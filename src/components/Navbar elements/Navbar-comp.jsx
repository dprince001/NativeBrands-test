import './navbar-comp.scss'

const NavbarComp = ({ImageSource, navbarText}) => {

  return (
    <div className='navbar-comp-items'>
        <ImageSource />
        <p>{navbarText}</p>
    </div>
  )
}

export default NavbarComp