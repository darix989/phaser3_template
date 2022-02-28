import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {AppSettingsData} from "#/types";

const initialState : AppSettingsData = {musicOn: true, soundsOn: true};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    setMusic(state, action: PayloadAction<boolean>) {
        return {...state, musicOn: action.payload};
    },
    setSounds(state, action: PayloadAction<boolean>) {
        return {...state, soundsOn: action.payload};
    },
  }
})

export const { setMusic, setSounds } = appSettingsSlice.actions;

export default appSettingsSlice.reducer;