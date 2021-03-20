import NavbarStyle from '../styles/navbar.module.scss';
import Link from './CustomLink';

export const Navbar = () => {
  return (
    <nav className={NavbarStyle.navbar}>
      <ul>
        <Link activeClassName={NavbarStyle.active} href="/">
          <li>🏠 About me</li>
        </Link>
        {/*<Link activeClassName={NavbarStyle.active} href="/services">*/}
        {/*    <li>👨🏻‍💻 Services</li>*/}
        {/*</Link>*/}
        <Link activeClassName={NavbarStyle.active} href="/projects">
          <li>🖥 Recent projects</li>
        </Link>
        <li>
          <a href="https://blog.statescu.net" target="_blank">
            ✏️ Blog
          </a>
        </li>
        <li>
          <a href="mailto:contact@statescu.net" target="_blank">
            📬 Contact me
          </a>
        </li>
      </ul>
    </nav>
  );
};
