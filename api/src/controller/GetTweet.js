import httpStatus from '../utils/HttpStatus';

import connection from '../db/Connection';
import handler from '../errors/Handler';

export default (req, res) => {
  const param = req.params.id;

  connection.beginTransaction((error) => {
    handler.simpleError(error, res);

    connection.query(`SELECT * FROM tweets WHERE idtweet = ${param}`, (err, results) => {
      handler.transactionError(err, res);

      const tweets = results;

      connection.commit((err) => {
        handler.transactionError(err, res);
        httpStatus.tweetsFound(res, tweets);
      });
    });



  });
}