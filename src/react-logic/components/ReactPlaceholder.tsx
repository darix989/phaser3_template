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
                <div className="html-root-tag">React Container (padding: 5%)</div>
                <div>React Button</div>
                <button
                    className='music-toggler'
                    onClick={() => { dispatch(setMusic(!appSettings.musicOn)) }}
                >
                    {`Sound ${appSettings.musicOn ? 'On' : 'Off'}`}
                </button>
            </div>
        </div>
    )
}

export default ReactPlaceholder;