import Link from 'next/link';
import { SAtagu } from '../elements';

function NavLink({ href, name }) {
  return (
    <Link href={href} passHref>
      <SAtagu>{name}</SAtagu>
    </Link>
  )
}

export default NavLink