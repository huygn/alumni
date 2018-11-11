import path from 'path'
import fs from 'fs'
import klaw from 'klaw'
import yaml from 'js-yaml'
import slugify from 'slugify'

const resolvePath = arg => path.resolve(__dirname, `../../content/${arg}`)

export async function getAlumni({ dirname = 'alumni' } = {}) {
  // Walk ("klaw") through posts directory and push file paths into items array
  const alumni = new Promise((resolve, reject) => {
    // Check if posts directory exists
    if (!fs.existsSync(resolvePath(dirname))) {
      console.log('dir not exist: ', resolvePath(dirname))
      // If directory doesn't exist, return items as empty array
      resolve([])
      return
    }

    let items = []
    klaw(resolvePath(dirname))
      .on('data', item => {
        // Filter function to retrieve .md files
        if (path.extname(item.path) === '.yml') {
          // If markdown file, read contents
          const data = fs.readFileSync(item.path, 'utf8')
          // Convert to frontmatter object
          // const dataObj = matter(data).data
          const dataObj = yaml.safeLoad(data)
          dataObj.name = dataObj.title
          // Create slug for URL
          dataObj.slug = slugify(dataObj.name, { lower: true })
          // Push object into items array
          items.push({
            ...dataObj,
            links: (dataObj.links || []).map(l => l.link),
          })
        }
      })
      .on('error', e => {
        reject(e)
      })
      .on('end', () => {
        resolve(items.sort((a, b) => a.name.localeCompare(b.name)))
      })
  })

  return alumni
}
