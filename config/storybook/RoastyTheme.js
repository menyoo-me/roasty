import { create } from '@storybook/theming/create';
const logo = require('../../src/assets/images/logo-menyoo-default.svg')

export default create({
    base: 'light',

    colorPrimary: '#472F90',
    colorSecondary: 'deepskyblue',

    appBg: 'white',
    appContentBg: 'white',

    fontBase: '"Helvetica", "Open Sans", sans-serif',
    fontCode: 'monospace',

    textColor: '#69707f',
    textInverseColor: 'rgba(255,255,255,0.9)',

    barTextColor: '#8798ad',
    barSelectedColor: '#472F90',
    barBg: '#f4f6fc',

    inputBg: 'white',
    inputBorder: '#f4f6fc',
    inputTextColor: '#69707f',
    inputBorderRadius: 1,

    brandTitle: 'Roasty Design System',
    brandUrl: 'https://roasty.menyoo.dev',
    brandImage: logo,
});
