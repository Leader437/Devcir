import "./Button.css"

const Button = ({children}) => {
  return (
    <button className="bg-custom-green px-3 py-1.5 rounded-sm cursor-pointer whitespace-nowrap text-md lg:text-sm btn-v1">{children}</button>
  )
}

export default Button