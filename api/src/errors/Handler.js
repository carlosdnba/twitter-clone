import connection from '../db/Connection';
import httpStatus from '../utils/HttpStatus';

export default {
  simpleError: (err, res) => {
    if (err) {
      httpStatus.internalServerError(res);
    };
  },
  connectionError: (err) => {
    if (err) {
      return console.error('O servidor back end não conseguiu conectar ao banco: ' + err.stack);;
    };
  },
  transactionError: (err, res) => {
    if (err) {
      httpStatus.internalServerError(res);
      
      return connection.rollback();
    };
  }
}
