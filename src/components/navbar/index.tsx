import Style from '~src/assets/styles/Navbar.module.css';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter()
  const disconnect = () => {
    router.back()
  }

  return (
    <div className={Style.container}>
      <Button
        className={Style.disconnect}
        size="sm"
        onClick={disconnect}
      >
        Disconnect
      </Button>
    </div>
  )
}

export default NavBar;