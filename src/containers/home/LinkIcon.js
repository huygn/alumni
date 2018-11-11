import React from 'react'
import { FaGithub, FaLinkedinIn, FaExternalLinkAlt } from 'react-icons/fa'

const LinkIcon = ({ type = '', ...rest }) => {
  switch (type.toLowerCase()) {
    case 'github':
      return <FaGithub {...rest} />
    case 'linkedin':
      return <FaLinkedinIn {...rest} />
    default:
      return <FaExternalLinkAlt {...rest} />
  }
}

export default LinkIcon
