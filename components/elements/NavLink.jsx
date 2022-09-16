import Link from 'next/link';
import { SAtagu } from '../elements';

function NavLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <SAtagu>{children}</SAtagu>
    </Link>
  )
}

export default NavLink