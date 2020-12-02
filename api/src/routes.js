import { Router } from 'express';

import DefaultCtrl from './controller/Default';
import GetTweetsCtrl from './controller/GetTweets';
import GetTweetCtrl from './controller/GetTweet';

import NewTweetCtrl from './controller/NewTweet';

const routes = Router();

routes.get('/', DefaultCtrl);
routes.get('/tweets', GetTweetsCtrl);
routes.get('/tweets/:id', GetTweetCtrl);

routes.post('/new_tweet', NewTweetCtrl);

export default routes;