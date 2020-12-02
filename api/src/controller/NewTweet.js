import httpStatus from '../utils/HttpStatus';

import connection from '../db/Connection';
import handler from '../errors/Handler';

export default (req, res) => {
  const { tweet_content, userId } = req.body;

  const query = `INSERT INTO tweets (tweet_content, userId) VALUES ('${tweet_content}', ${userId}); `;

  connection.query(query, (err, result) => {
    handler.simpleError(err, res);

    connection.commit(function (error) {
      handler.transactionError(error, res);
      httpStatus.created(res);
    });
  });
}