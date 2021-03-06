import { Config } from './types/config'

const config: Config = {
  webSiteConfig: {
    PROTOCOL: 'https',
    DOMAIN_NAME: 'example.com',
    TITLE: 'This is TITLE',
    DESCRIPTION: 'This is DESCRIPTION',
  },
  htmlBeautifyOptions: {
    // https://github.com/beautify-web/js-beautify#css--html
    indent_size: 2,
    preserve_newlines: false,
    max_preserve_newlines: 0,
    wrap_line_length: 0,
    wrap_attributes_indent_size: 0,
    extra_liners: [],
    unformatted: ['b', 'em'],
  },
  src: 'src',
  dist: 'dist',
  docroot: 'src/docroot',
  postcss: {
    preset: {
      stage: 1,
      autoprefixer: {
        grid: true,
      },
      features: {
        'nesting-rules': true,
      },
    },
  },
  imagemin: {
    jpegtran: {},
    pngquant: {},
    svgo: {
      plugins: [
        {
          removeViewBox: false,
        },
      ],
    },
  },
  browsersync: {
    startPath: '/index.html',
    ghostMode: false,
    logLevel: 'debug',
    reloadDebounce: 500,
    ui: false,
    open: false,
  },
  webpack: {
    vendor: {
      name: './js/vendor.bundle',
    },
    module: {
      name: './js/module.bundle',
    },
  },
}

export default config
