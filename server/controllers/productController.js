const fs = require('fs/promises');
const multer = require('multer');
const asyncHandler = require('../errors/asyncHandler');
const { saveImage } = require('../utils/image');
const Product = require('../models/productModel');
const AppError = require('../errors/AppError');
const APIFeatures = require('../utils/APIFeature');

// TODO change multer
exports.uploadProductImages = multer({
  storage: multer.memoryStorage(),
}).any();

exports.getAllProduct = asyncHandler(async (req, res, next) => {
  const features = await new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const products = await features.mongooseQuery;

  return res.status(200).json({
    status: 'success',
    page: features.page,
    products: products,
  });
});

exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) throw new AppError('Không tìm thấy sản phẩm với id này', 404);

  return res.status(200).json({
    status: 'success',
    product: product,
  });
});

const validateProductImages = (req) => {
  req.files.forEach((file) => {
    if (!file.mimetype.startsWith('image')) {
      throw new AppError('Hãy gửi file có định dạng hình ảnh', 400);
    }
  });

  if (!req.files) {
    throw new AppError('Không được bỏ trống ảnh sản phẩm (field images)', 400);
  } else if (req.files.length < 3) {
    throw new AppError('Phải có tối thiểu 3 bức ảnh', 400);
  }
};

const saveProductImages = async (files, productId) => {
  const images = [];
  // TODO delete old images if exist
  await Promise.all(
    files.map(async (file, index) => {
      const fileName = `product-${productId}-${Date.now()}-${index + 1}.png`;
      const filePath = `public/images/products/${fileName}`;
      await saveImage(file.buffer, 700, null, `./${filePath}`);
      images.push(filePath);
    })
  );
  const product = await Product.findByIdAndUpdate(
    productId,
    { images },
    { runValidators: true, new: true }
  );
  return product;
};

exports.createProduct = asyncHandler(async (req, res, next) => {
  await Product.validate(req.body);
  validateProductImages(req);

  const productId = (await Product.create(req.body)).get('_id');
  const product = await saveProductImages(req.files, productId);

  return res.status(201).json({
    status: 'success',
    product: product,
  });
});

exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      isDeleted: true,
    },
    {
      new: true,
    }
  );

  if (!product) throw new AppError('Không tồn tại dữ liệu với id này', 404);

  return res.status(204).json({
    status: 'success',
    product,
  });
});

exports.updateProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { deleteImg } = req.body;
  const oldProduct = await Product.findById(id);
  if (!oldProduct) throw new AppError('Không tồn tại dữ liệu với id này', 404);

  // validate
  let deleteImgDir = [];
  if (deleteImg) {
    [deleteImg].flat().forEach((val) => {
      if (
        oldProduct.images.every((img) => {
          return img !== val;
        })
      ) {
        throw new AppError('Anh khong ton tai', 400);
      }
    });
    deleteImgDir = [deleteImg].flat().map((imgDir) => imgDir.split('/').pop());
  }
  const newImgDir = [];
  const oldImgDir = oldProduct.images.filter(
    (val) => !deleteImg?.includes(val)
  );
  if (req.files) {
    if (req.files.length + oldImgDir.length < 3) {
      return res.status(400).json({
        success: false,
        message: 'Phải có tối thiểu 3 bức ảnh',
      });
    }
    await Promise.all(
      req.files.map(async (file, index) => {
        const fileName = `product-${id}-${Date.now()}-${index + 1}.png`;
        const filePath = `public/images/products/${fileName}`;
        await saveImage(file.buffer, 700, null, `./${filePath}`);
        newImgDir.push(filePath);
      })
    );
  }
  const product = await Product.findByIdAndUpdate(
    id,
    {
      ...req.body,
      images: [...oldImgDir, ...newImgDir],
    },
    {
      runValidators: true,
      new: true,
    }
  );

  await Promise.all(
    deleteImgDir.map(async (each) =>
      fs.unlink('public/images/products/' + each)
    )
  );

  return res.status(200).json({
    status: 'success',
    product,
  });
});
