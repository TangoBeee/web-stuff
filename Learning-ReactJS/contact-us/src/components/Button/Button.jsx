import style from './Button.module.css'

const Button = ({icon, text, customButton, onClick}) => {
  return (
    <button onClick={onClick} className={`${style.primary_btn} ${style[customButton]}`}>
        
        {icon}
        {text}
    </button>
  )
}

export default Button