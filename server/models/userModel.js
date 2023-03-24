const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const { getImageUrl } = require('../utils/image');

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Họ và tên không được bỏ trống'],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, 'Email không được bỏ trống'],
      validate: [validator.isEmail, 'Email không hợp lẹ'],
    },
    password: {
      type: String,
      required: [true, 'Mật khẩu không được bỏ trống'],
      minLength: [8, 'Mật khẩu tối thiểu 8 ký tự'],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Xác nhận mật khẩu không được bỏ trống'],
      validate: {
        validator: function (el) {
          return this.password === el;
        },
        message: 'Xác nhận mật khẩu không trùng khớp với mật khẩu',
      },
    },
    passwordChangedAt: {
      type: Date,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    image: {
      type: String,
      default: 'public/images/users/user-default.png',
    },
    role: {
      type: String,
      enum: ['MANAGER', 'STAFF', 'CUSTOMER'],
      default: 'CUSTOMER',
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    id: false,
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
  }
);

userSchema.index({ email: 1 });
userSchema.index({ '$**': 'text' });

userSchema.path('image').get((value) => getImageUrl(value));

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  this.passwordConfirm = undefined;
  return next();
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  return next();
});

userSchema.methods.checkPassword = async function (
  candidatePassword,
  userPassword
) {
  const result = await bcrypt.compare(candidatePassword, userPassword);
  return result;
};

userSchema.methods.changedPasswordAfter = function (jwtTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return jwtTimestamp < changedTimestamp;
  }
  return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
