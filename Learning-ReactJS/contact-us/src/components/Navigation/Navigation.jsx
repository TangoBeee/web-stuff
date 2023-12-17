import style from './Navigation.module.css'
import logo from '../../assets/logo.png'

const Navigation = () => {
  return (
    <nav className={`${style.navigation} container`}>
        <div className="logo">
            <a href="#">
                <img src={logo} alt="logo" />
            </a>
        </div>

        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            
            <li>
                <a href="#">About</a>
            </li>

            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation