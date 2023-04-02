module.exports = (status) => {
  switch (status) {
    case 'PENDING':
      return 'Đang xử lý';
    case 'SHIPPING':
      return 'Đang giao hàng';
    case 'SUCCESS':
      return 'Thành công';
    case 'CANCELED':
      return 'Đã hủy';
    default:
      return 'Không xác định';
  }
};
