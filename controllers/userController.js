const multer = require('multer');
const asyncHandler = require('../errors/asyncHandler');
const { filterObject } = require('../utils/objectUtils');
const saveImage = require('../utils/saveImage');
const User = require('../models/userModel');
const APIFeatures = require('../utils/APIFeature');
const AppError = require('../errors/AppError');

const upload = multer({
  storage: multer.memoryStorage(),
});

exports.uploadImage = upload.single('image');

const validateImage = (req) => {
  if (!req.file.mimetype.startsWith('image')) {
    throw new AppError('Hãy gửi file có định dạng hình ảnh', 400);
  }
};

const saveUserImage = async (file, userId) => {
  // TODO delete old image if exist
  const fileName = `user-${userId}-${Date.now()}.png`;
  const filePath = `public/images/users/${fileName}`;
  await saveImage(file.buffer, 500, null, `./${filePath}`);

  const user = await User.findByIdAndUpdate(
    userId,
    { image: filePath },
    { runValidators: true, new: true }
  );
  return user;
};

exports.me = asyncHandler(async (req, res, next) => {
  const profile = await User.findById(req.user.get('_id'));
  res.status(200).json({
    status: 'success',
    profile: profile.addImageUrl(profile, req),
  });
});

exports.updateMe = asyncHandler(async (req, res, next) => {
  const userId = req.user.get('_id');

  if (req.body.password || req.body.passwordConfirm) {
    throw new AppError('Không được cập nhật password ở route này.', 400);
  }

  if (req.file) {
    validateImage(req);
    await saveUserImage(req.file, userId);
  }

  const userInfo = filterObject(req.body, 'fullName', 'phoneNumber', 'address');
  const user = await User.findByIdAndUpdate(userId, userInfo, {
    runValidators: true,
    new: true,
  });

  return res.status(200).json({
    status: 'success',
    profile: user.addImageUrl(user, req),
  });
});

exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const features = await new APIFeatures(User.find(), req.query)
    .search()
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const users = await features.mongooseQuery;

  return res.status(200).json({
    status: 'success',
    page: features.page,
    users: users.addImageUrl(users, req),
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = User.findById(req.params.id);

  return res.status(200).json({
    status: 'success',
    user,
  });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  if (req.body.password || req.body.passwordConfirm) {
    throw new AppError('Không được cập nhật password của user khác', 400);
  }

  if (req.file) {
    validateImage(req);
    await saveUserImage(req.file, userId);
  }

  const userInfo = filterObject(req.body, 'fullName', 'phoneNumber', 'address');
  const user = await User.findByIdAndUpdate(userId, userInfo, {
    runValidators: true,
    new: true,
  });

  return res.status(200).json({
    status: 'success',
    user: user.addImageUrl(user, req),
  });
});

// exports.deleteUser = asyncHandler(async (req, res, next) => {});
