import webpack from './webpack.config'
import Document from './src/Document'
import { siteRoot } from './src/config'
import { getAlumni } from './src/services/content'

export default {
  siteRoot: siteRoot,
  bundleAnalyzer: !!process.env.BUNDLE_ANALYZE,
  Document,
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
