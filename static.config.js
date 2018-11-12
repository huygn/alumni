import webpack from './webpack.config'
import Document from './src/Document'
import { siteRoot } from './src/config'
import { getAlumni } from './src/services/content'
import { crawlFooter } from './src/services/footer'

export default {
  siteRoot: siteRoot,
  bundleAnalyzer: !!process.env.BUNDLE_ANALYZE,
  Document,
  getSiteData: async () => ({
    footerHTML: await crawlFooter(),
  }),
  getRoutes: async () => {
    const alumni = await getAlumni()
    return [
      {
        path: '/',
        component: 'src/containers/home',
        getData: async () => ({
          alumni,
        }),
        children: alumni.map(a => ({
          path: `/${a.slug}`,
          component: 'src/containers/AlumniDetail',
          getData: () => ({
            alumni: a,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack,
  devServer: {
    proxy: {
      '/.netlify/functions': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/\\.netlify/functions': '',
        },
      },
    },
  },
}
