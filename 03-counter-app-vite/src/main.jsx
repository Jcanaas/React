import React from 'react';
import ReactDOM from 'react-dom/client';

import {HellowWorldApp} from './HellowWorldApp';
import {FirstApp} from './FirstApp';

ReactDOM.createRoot ( document.getElementById('root')).render(
    <React.StrictMode>
        <HellowWorldApp/>
        <FirstApp/>
    </React.StrictMode>
);
