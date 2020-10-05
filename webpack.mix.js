const mix = require('laravel-mix');

let postCssPlugins = [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    // require('postcss-advanced-variables'),
    // require('postcss-scss'),
    // require('postcss-simple-vars'),
    // require('postcss-for'),
    require('autoprefixer')
];

if (mix.inProduction()) {
    mix.version();
}

mix.setPublicPath('./')
    // .copyDirectory('./resources/images', './assets/images')
    // .copyDirectory('./resources/fonts', './assets/fonts')
    .js('resources/js/app.js', 'assets/js')
    .postCss('resources/scss/main.css', 'assets/css', postCssPlugins)
    .options({
        processCssUrls: false
    })
    .browserSync({
        proxy: 'http://oc-wunderfood.local/', //replace with your url
        files: [
            'layouts/**/*.htm',
            'pages/**/*.htm',
            'partials/**/*.htm',
            'assets/js/app.js',
            'assets/css/main.css'
        ]
    })
    .options({
        terser: {
          extractComments: false,
        }
    });
