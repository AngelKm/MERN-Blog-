import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li><Link to="/posts/categories/:Deontology">Deontology</Link></li>
        <li><Link to="/posts/categories/:Ethics of Care">Ethics of Care</Link></li>
        <li><Link to="/posts/categories/:Philosophy">Philosophy</Link></li>
        <li><Link to="/posts/categories/:Utilitarianism">Utilitarianism</Link></li>
        <li><Link to="/posts/categories/:Vitue Ethics">Vitue Ethics</Link></li>
      </ul>
      <div className="footer__copyright">
        <small>All Rights Reserved &copy; Copyright, Philosphy Review.</small>
      </div>
    </footer>
  )
}

export default Footer