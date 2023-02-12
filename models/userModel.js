const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const getRootUrl = require('../utils/getRootUrl');

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
      enum: ['ADMIN', 'MANAGER', 'STAFF', 'CUSTOMER'],
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

userSchema.methods.addImageUrl = function (doc, req) {
  if (!Array.isArray(doc)) {
    const newDoc = Object.create(doc);
    newDoc.image = `${getRootUrl(req)}/${doc.image}`;
    return newDoc;
  }

  return doc.map((el) => {
    const newEl = Object.create(el);
    newEl.image = `${getRootUrl(req)}/${el.image}`;
    return newEl;
  });
};

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
