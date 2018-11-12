import React from 'react'
import preval from 'preval.macro'

const footerHTML = preval`
const request = require('sync-request')
const cheerio = require('cheerio')

const res = request('GET', 'https://dwarves.foundation', { retry: true })
const $ = cheerio.load(res.getBody().toString())
const footer = $('footer').html()

module.exports = footer
`

const PageFooter = ({ ...rest }) => {
  return <footer {...rest} dangerouslySetInnerHTML={{ __html: footerHTML }} />
}

export default PageFooter
