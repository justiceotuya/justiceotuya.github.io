import React from 'react';
import { createGlobalStyle } from 'styled-components';
import 'fontsource-open-sans';
import { useScrollRestoration } from 'gatsby';

const GlobalStyle = createGlobalStyle`
body {
    font-family: "Open Sans";
}
html {
    box-sizing: border-box;
    font-size: 16px;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul,figure {
    margin: 0;
    padding: 0;
    font-weight: normal;
}

ol, ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
}
`;

export default function Layout({ children }) {
    const ulScrollRestoration = useScrollRestoration('page-component-ul-list');
    return (
        <div style={{ minHeight: '100vh', overflow: 'auto' }} {...ulScrollRestoration}>
            <GlobalStyle />
            {children}
        </div>
    );
}
