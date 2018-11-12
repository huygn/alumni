import axios from 'axios'
import cheerio from 'cheerio'

export const crawlFooter = async () => {
  try {
    const { data } = await axios.get('https://dwarves.foundation')
    const $ = cheerio.load(data)
    const footer = $('footer').html()
    return footer
  } catch (err) {
    return ''
  }
}
