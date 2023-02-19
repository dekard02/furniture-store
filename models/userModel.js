const rootUrl = process.env.ROOT_URL || '';
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Họ và tên không được bỏ trống'],
    },
    email: {
      type: String,
      required: [true, 'Email không được bỏ trống'],
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
      type: String,
      default: true,
    },
  },
  {
    id: false,
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.index({ email: 1 });
userSchema.index({ '$**': 'text' });

userSchema.pre(/^find/, function (next) {
  this.projection({
    fullName: 1,
    email: 1,
    image: { $concat: [rootUrl, '/', '$image'] },
    passwordChangedAt: 1,
    phoneNumber: 1,
    address: 1,
    role: 1,
    active: 1,
  });
  next();
});

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
