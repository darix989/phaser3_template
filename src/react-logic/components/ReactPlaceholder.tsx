import React from 'react';
import { setMusic } from '#/redux-logic/features/appSettings/appSettingsSlice';
import { useAppSelector, useAppDispatch } from '../hooks'

import './reactPlaceholder.css';

const ReactPlaceholder: React.FC = () => {
    const appSettings = useAppSelector(state => state.appSettings);
    const dispatch = useAppDispatch();
    return (
        <div className="react-parent">
            <div className="react-content">
                <div className="html-root-tag">HTML Container (padding: 5%)</div>
                <div>HTML Button</div>
                <button
                    onClick={() => { dispatch(setMusic(!appSettings.musicOn)) }}
                    style={{ height: "10vh", width: "10vw", borderRadius: "15px", fontSize: "2vw" }} >
                    {`Sound ${appSettings.musicOn ? 'On' : 'Off'}`}
                </button>
            </div>
        </div>
    )
}

export default ReactPlaceholder;