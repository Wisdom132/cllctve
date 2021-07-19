const { Helper } = require('../helpers/index');

const resolveError = async ({ res, error }) => {
  var { status, message } = error;
  if (!status) status = 500;
  if (!message) message = 'An Error Occured';
  res.status(status).json({
    message,
    status,
  });
};

const resolveResponse = async ({
  res,
  service,
  message = 'Success',
  status = 200,
}) => {
  try {
    const response = await service;
    let finalresponse = null;
    if (response && response.pagination) {
      finalresponse = Helper.sendPaginatedResponse(response, message);
    } else {
      finalresponse = Helper.sendObjectResponse(response, message);
    }
    res.status(status).json(finalresponse);
  } catch (error) {
    // const { status } = error;
    resolveError({ res, error });
  }
};

module.exports = resolveResponse;
