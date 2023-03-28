import { Navlink } from 'React-router-dom'

function UnAuthedLinks() {

  return (
    <ul>
        <li>
            <NavLink to='/signup'>Signup</NavLink>
        </li>
        <li>
            <NavLink to='/signin'>SignIn</NavLink>
        </li>
    </ul>
  )  
}
