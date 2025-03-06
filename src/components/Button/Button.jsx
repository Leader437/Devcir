import "./Button.css"

const Button = (props) => {
  return (
    <button className="bg-custom-green px-3 py-1.5 rounded-sm cursor-pointer whitespace-nowrap text-md lg:text-sm btn-v1">{props.btn_text}</button>
  )
}

export default Button