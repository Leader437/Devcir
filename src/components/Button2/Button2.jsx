import "./Button2.css"

const Button2 = (props) => {
  return (
    <button className="bg-custom-green px-6 py-3 rounded-3xl cursor-pointer font-yaro whitespace-nowrap uppercase text-sm lg:text-sm font-bold btn-v2">{props.btn_text}</button>
  )
}

export default Button2