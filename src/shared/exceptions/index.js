var createError = require('http-errors');

// function BadRequestException(message) {
//   // var error = createError.BadRequestException(message);
//   createError(400, 'This video does not exist!');
// }

function NotFoundException(message) {
  return new createError.NotFound(message);
}

module.exports = {
  // BadRequestException,
  NotFoundException,
};
