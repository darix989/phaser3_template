import { combineReducers } from 'redux';

import appSettingsReducer from '../features/appSettings/appSettingsSlice';

export default combineReducers({
    appSettings: appSettingsReducer
});
