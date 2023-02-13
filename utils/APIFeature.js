class APIFeatures {
  constructor(mongooseQuery, requestQuery) {
    this.mongooseQuery = mongooseQuery;
    this.requestQuery = requestQuery;
    this.page = {};
  }

  search() {
    const q = this.requestQuery.q || '';
    this.mongooseQuery.find({ $text: { $search: q } });
    return this;
  }

  filter() {
    const queryObj = { ...this.requestQuery };
    const excludeFields = ['page', 'sort', 'limit', 'fields', 'q'];
    excludeFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    this.mongooseQuery = this.mongooseQuery.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.requestQuery.sort) {
      const sortBy = this.requestQuery.sort.split(',').join(' ');
      this.mongooseQuery = this.mongooseQuery.sort(sortBy);
    } else {
      this.mongooseQuery = this.mongooseQuery.sort('-createdAt');
    }

    return this;
  }

  limitFields() {
    if (this.requestQuery.fields) {
      const fields = this.requestQuery.fields.split(',').join(' ');
      this.mongooseQuery = this.mongooseQuery.select(fields);
    }

    return this;
  }

  async paginate() {
    this.page.current = this.requestQuery.page * 1 || 1;
    this.page.itemsPerPage = this.requestQuery.perPage * 1 || 10;

    const countQuery = Object.create(this.mongooseQuery);

    this.page.totalItems = await countQuery.countDocuments();
    this.page.tolalPages = Math.ceil(
      this.page.totalItems / this.page.itemsPerPage
    );

    const skip = (this.page.current - 1) * this.page.itemsPerPage;
    this.mongooseQuery = this.mongooseQuery
      .skip(skip)
      .limit(this.page.itemsPerPage);

    return this;
  }
}

module.exports = APIFeatures;
