/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { GlobalProvider } from '../src/provider';

export const wrapRootElement = ({ element }) => {
    return <GlobalProvider>{element}</GlobalProvider>;
};
