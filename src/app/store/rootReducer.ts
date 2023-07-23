import { combineReducers } from '@reduxjs/toolkit';
import { IPosts, postsReducer } from 'entities/Post';

import { loaderReducer } from 'widgets/PageLoader';

export interface IRootState {
  posts: IPosts;
  loader: {
    isLoading: boolean;
  };
}
export const rootReducer = combineReducers({
  loader: loaderReducer,
  posts: postsReducer,
});
