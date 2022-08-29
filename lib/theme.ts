import { extendTheme } from '@chakra-ui/react';

const colors = {
  main: {
    yellow: '#eda524',
    darkblue: '#021222',
    red: '#e23c39',
    tan: '#ffdfc5',
    green: '#0f443c',
    coretext: 'rgb(248, 249, 250)'
  },
};

const fonts = {
  heading: 'Work Sans, -apple-system, system-ui, sans-serif',
  body: 'Work Sans, -apple-system, system-ui, sans-serif',
  mono: `DM Sans, sans-serif, monospace`,
};

const theme = {
  colors,
  fonts,
  styles: {
    global: {
      'html, body': {
        bg: '#021222',
        color: 'main.coretext',
        minH: '100vh',
        overflowX: 'hidden',
        fontSize: 'clamp(1rem, 0.96rem + 0.18vw, 1.125rem)',
      },
      '*:focus, *[data-focus]': {
        outline: '2px solid',
        outlineColor: 'main.tan',
        outlineOffset: '3px',
      },
      'h2,h3,h4': {
        scrollMarginTop: '4rem',
        '&:hover': {
          'a.anchor': {
            opacity: 1,
          },
        },
      },
      '.img': {
        rounded: 'lg',
        maxWidth: '100%',
        height: 'auto',
      },
      '.wrapper': {
        marginInline: 'auto',
        width: 'clamp(16rem, 95vw, 85rem)',
        paddingInline: 'clamp(1.375rem, 1.2rem + 0.89vw, 2rem)',
        position: 'relative',
      },
      '.section': {
        paddingBlock: 'clamp(3.75rem, 3.21rem + 2.68vw, 5.625rem)',
        paddingTop: '73px'
      },
      '.switcher > *': {
        flexGrow: '1',
        flexBasis: 'calc( (var(50rem, 40rem) - 100%) * 999 )',
      },
      'a.anchor': {
        opacity: 0,
        marginX: '3',
        '&:before': {
          content: `"#"`,
          color: 'sage.base',
        },
        '&:focus': {
          opacity: 1,
        },
      },
    },
  },
};

export default extendTheme(theme);
