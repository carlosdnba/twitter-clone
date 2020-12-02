import httpStatus from '../utils/HttpStatus';

export default (req, res) => {
  console.log(`I'm listening bae.`);
  httpStatus.ok(res);
}