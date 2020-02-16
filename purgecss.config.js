import glob from 'glob-all'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import PurgecssWhitelister from 'purgecss-whitelister'

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

export default new PurgecssPlugin({
  // Specify the locations of any files you want to scan for class names.
  paths: glob.sync(['./.footer-html.js', 'src/**/*.js']),
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['js', 'jsx'],
    },
  ],
  whitelist: ['html', 'body', 'opacity-25'].concat(
    PurgecssWhitelister(['src/css/nprogress.css'])
  ),
  whitelistPatterns: [
    /^module__.+/, // css modules
  ],
})
