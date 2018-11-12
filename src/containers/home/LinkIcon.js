import React from 'react'
import {
  FaGithub,
  FaLinkedinIn,
  FaCertificate,
  FaExternalLinkAlt,
  FaUser,
  FaBehance,
} from 'react-icons/fa'

const LinkIcon = ({ type = '', ...rest }) => {
  switch (type.toLowerCase()) {
    case 'github':
      return <FaGithub {...rest} />
    case 'linkedin':
      return <FaLinkedinIn {...rest} />
    case 'certificate':
      return <FaCertificate {...rest} />
    case 'blog':
    case 'portfolio':
      return <FaUser {...rest} />
    case 'behance':
      return <FaBehance {...rest} />
    default:
      return <FaExternalLinkAlt {...rest} />
  }
}

export default LinkIcon
