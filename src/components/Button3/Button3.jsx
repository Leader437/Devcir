import "./Button3.css"

const Button3 = (props) => {
  return (
    <button className="bg-transparent px-4 py-3 rounded-3xl cursor-pointer font-yaro uppercase whitespace-nowrap text-sm lg:text-sm font-bold btn-v3">{props.btn_text}</button>
  )
}

export default Button3