const multer = require('multer');
const asyncHandler = require('../errors/asyncHandler');
const { saveImage } = require('../utils/image');
const { omitFields } = require('../utils/objectUtils');
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
  const product = await Product.findById(req.params.id).populate('reviews');

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

exports.updateProduct = asyncHandler(async (req, res, next) => {
  if (req.files) {
    validateProductImages(req);
    await saveProductImages(req.files, req.params.id);
  }

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    omitFields(req.body, 'images'),
    {
      runValidators: true,
      new: true,
    }
  );

  return res.status(200).json({
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
