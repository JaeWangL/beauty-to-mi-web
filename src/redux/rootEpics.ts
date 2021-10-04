import { combineEpics } from 'redux-observable';
import settingsEpics from './settings/epics';

export const rootEpics = combineEpics(...settingsEpics);
