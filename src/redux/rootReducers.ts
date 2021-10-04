import { combineReducers } from '@reduxjs/toolkit';
import { settingsName, settingsReducer } from './settings/slice';

export const rootReducers = combineReducers({
  [settingsName]: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
