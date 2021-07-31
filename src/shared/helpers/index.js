const UseBody = (req) => {
  return req.body;
};

const UseParams = (req) => {
  return req.params;
};

const UseQuery = (req) => {
  return req.query;
};

// const UseRoute = (req) => {
//   return req.params;
// };

class Helper {
  static sendObjectResponse(content, message) {
    return {
      status: true,
      message,
      data: content,
    };
  }

  static sendPaginatedResponse(content, message) {
    return {
      status: true,
      message,
      data: content.list,
      meta: content.pagination,
    };
  }

  static async paginate(model, paginationDto, filterQuery, relationships = []) {
    var { page, limit } = paginationDto;
    page = parseInt(page);
    limit = parseInt(limit);
    const response = await model
      .find(filterQuery)
      .populate(relationships)
      .skip(limit * page - limit)
      .limit(limit);
    const total = await model.countDocuments().exec();
    const nextPage = page + 1;

    const pagination = {
      page,
      limit,
      previousPage: page > 0 ? page - 1 : false,
      nextPage: Math.ceil(total / limit) >= nextPage ? nextPage : false,
      pageCount: response.length,
      total,
    };

    return {
      list: response,
      pagination,
    };
  }
}

module.exports = {
  UseBody,
  UseParams,
  UseQuery,
  Helper,
};
