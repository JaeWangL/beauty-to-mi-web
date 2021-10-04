import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/rootReducers';
import { SetMobilePayload } from '@/redux/settings/payloads';
import { setMobile, SettingsActions, SettingsState } from '@/redux/settings/slice';

export interface SettingsStore {
  settings: SettingsState;
  setMobile: (payload: SetMobilePayload) => SettingsActions;
}

export function useSettingsStore(): SettingsStore {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  const setMobileDispatch = useCallback((payload: SetMobilePayload) => dispatch(setMobile(payload)), [dispatch]);

  return {
    settings,
    setMobile: setMobileDispatch,
  };
}
