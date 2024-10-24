import { memo } from "react"

// Components
import Loader from "./Loader"

// Styles
import "../../styles/components/Button.css"

// Types
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

function Button (props: ButtonProps) {
  const {loading, ...restProps} = props

  return (
    <button 
      {...restProps}
      disabled={loading || props.disabled}
      className={`
        ${props.className || ''}
        ${loading ? ' disabled' : ''}
      `}
    >
      {
        loading
          ? <Loader />
          : props.value || props.children
      }
    </button>
  )
}

export default memo(Button)
