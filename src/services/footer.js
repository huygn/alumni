// import axios from 'axios'
// import cheerio from 'cheerio'
// import fs from 'fs'

// export const crawlFooter = async () => {
//   const { data } = await axios.get('https://dwarves.foundation ')
//   const $ = cheerio.load(data)
//   const html = $('footer').html()
//   // write to file and later feed it to PurgeCSS
//   await writeFile('./footer.js', `module.exports = '${html}'`, { flag: 'w+' })
//   return html
// }

// function writeFile(path, data, opt) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(path, data, opt, err => {
//       if (err) {
//         reject(err)
//         return
//       }
//       resolve()
//     })
//   })
// }

import preval from 'preval.macro'

export const footerHTML = preval`
const request = require('sync-request')
const cheerio = require('cheerio')
const fs = require('fs')

const res = request('GET', 'https://dwarves.foundation', { retry: true })
const $ = cheerio.load(res.getBody().toString())
const html = $('footer').html()

fs.writeFileSync('./.footer-html.js', "module.exports = '" + html + "'", {
  flag: 'w+',
})

module.exports = html
`
