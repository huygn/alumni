import React from 'react'
import { withSiteData } from 'react-static'

const PageFooter = withSiteData(({ footerHTML, ...rest }) => {
  return <footer {...rest} dangerouslySetInnerHTML={{ __html: footerHTML }} />
})

export default PageFooter
