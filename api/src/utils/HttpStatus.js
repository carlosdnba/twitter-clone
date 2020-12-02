export default {
  ok: (response) => {
    response.status(200).json({
      "status": "OK",
      "working": "absofruitly"
    });
  },

  created: (response) => {
    response.status(201).json({
      "status": "tweet created"
    });
  },

  tweetsFound: (response, content) => {
    response.status(200).json(content);
  },

  badRequest: (response) => {
    response.status(401).json({
      "status": "bad request"
    });
  },

  internalServerError: (response) => {
    response.status(500).json({
      "status": "database error" + err
    });
  }
}