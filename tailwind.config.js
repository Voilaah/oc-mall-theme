module.exports = {
    purge: {
        content: [
            'layouts/**/*.htm',
            'pages/**/*.htm',
            'partials/**/*.htm'
        ],
        options: {
            whitelistPatterns: [
                /active$/,
                /error$/,
                /sal-animate$/,
                /disable-scroll$/,
                /^glider/],
            whitelistPatternsChildren: [/active$/]
        }
    },
    theme: {
        extend: {
            colors: {
                'primary': '#103d60',
                'primary-light': '#144b76',
                'secondary': '#ef7204',
                'secondary-light': '#ef5c12',

                'black': '#222b2f',
                'grey-darkest': '#364349',
                'grey-darker': '#596a73',
                'grey-dark': '#70818a',
                'grey': '#9babb4',
                'grey-light': '#dae4e9',
                'grey-lighter': '#f3f7f9',
                'grey-lightest': '#fafcfc',
                'smoke-dark': '#ccd6db',
                'smoke': '#dae4e9',
                'smoke-light': '#f1f6f8',
                'smoke-lightest': '#f6fbfd',
                'white': '#ffffff',

                'red-darkest': '#420806',
                'red-dark': '#cc1f1a',
                'red': '#e3342f',
                'red-light': '#ef5753',
                'red-lightest': '#fcebea',

                'orange-darkest': '#542605',
                'orange-light': '#faad63',
                'orange-lightest': '#fff5eb',

                'yellow-darkest': '#453411',
                'yellow-lightest': '#fcfbeb',

                'blue-darker': '#103d60',
                'blue-dark': '#2779bd',
                'blue': '#3490dc',
            },
            screens: {
                'sm': '576px',
                'md': '768px',
                'lg': '992px',
                'xl': '1200px',
            },
            fonts: {
                'sans': [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Oxygen',
                    'Ubuntu',
                    'Cantarell',
                    'Fira Sans',
                    'Droid Sans',
                    'Helvetica Neue',
                    'sans-serif',
                ],
                'serif': [
                    'Constantia',
                    'Lucida Bright',
                    'Lucidabright',
                    'Lucida Serif',
                    'Lucida',
                    'DejaVu Serif',
                    'Bitstream Vera Serif',
                    'Liberation Serif',
                    'Georgia',
                    'serif',
                ],
                'mono': [
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    'Liberation Mono',
                    'Courier New',
                    'monospace',
                ]
            },
            fontWeight: {
              hairline: '100',
              thin: '200',
              light: '300',
              normal: '400',
              medium: '500',
              semibold: '600',
              bold: '700',
              extrabold: '800',
              black: '900',
            },
            fontSize: {
                '2xs': '.65rem',    // 10px
                'xs': '.75rem',     // 12px
                'sm': '.875rem',    // 14px
                'base': '1rem',     // 16px
                'lg': '1.125rem',   // 18px
                'xl': '1.25rem',    // 20px
                '2xl': '1.5rem',    // 24px
                '3xl': '1.875rem',  // 30px
                '4xl': '2.25rem',   // 36px
                '5xl': '3rem',      // 48px
            },
            leading: {
                'none': 1,
                'tight': 1.25,
                'normal': 1.5,
                'loose': 2,
            },
            tracking: {
                'tight': '-0.05em',
                'normal': '0',
                'wide': '0.05em',
            },
            backgroundSize: {
              auto: 'auto',
              cover: 'cover',
              contain: 'contain',
            },


        }
    }
}
