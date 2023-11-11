import { render } from 'preact';
import { App } from './app.tsx';
import GlobalStyle from './theme/global.ts';
import { Global } from '@emotion/react';

render(
    <>
        <Global styles={GlobalStyle} />
        <App />
    </>,
    document.getElementById('app')!,
);
