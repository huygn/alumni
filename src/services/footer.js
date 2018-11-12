import axios from 'axios'
import cheerio from 'cheerio'
import fs from 'fs'

export const crawlFooter = async () => {
  const { data } = await axios.get('https://dwarves.foundation ')
  const $ = cheerio.load(data)
  const html = $('footer').html()
  // write to file and later feed it to PurgeCSS
  fs.writeFileSync('./ignores/_footer.js', `module.exports = '${html}'`)
  return html
}
