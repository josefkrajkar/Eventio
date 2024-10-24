import { useState, forwardRef } from "react"

// Styles
import "../../styles/components/Input.css"

// Types
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  errorMsg?: string
  inputRef?: React.RefObject<HTMLInputElement>
}

function Input (props: InputProps, ref: React.Ref<HTMLInputElement>) {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const {error, errorMsg, ...restProps } = props
  const {className,  id, label, type, value, onFocus, onBlur} = restProps;


  return (
    <div className={type === 'password' ? 'password-wrapper' : 'input-wrapper'}>
      {
        label && (
          <label
            className={`floating-label ${isFocused || value ? 'focused' : ''}`}
            htmlFor={id || `${label}-input`}
          >
            {label}
          </label>
        )
      }
      <input
        {...restProps}
        ref={ref}
        type={showPassword ? 'text' : type}
        id={id || (label ? `${label}-input` : undefined)}
        className={
          `form-field${error ? ' error' : ''}${showPassword ? '' : ' pass'}${className ? ` ${className}` : ''}`
        }
        onFocus={(e) => {
          onFocus?.(e)
          setIsFocused(true)
        }}
        onBlur={(e) => {
          onBlur?.(e)
          setIsFocused(false)
        }}
      />
      {
        type === 'password' && (
          <>
            <input
              id='toggle-password'
              type='checkbox'
              className='toggle-password-checkbox'
              onChange={() => setShowPassword(!showPassword)}
              aria-label='Toggle password visibility'
            />
            <label htmlFor='toggle-password' className='toggle-password-label'>
              <img src='/images/svgs/Show-pass.svg' alt='Toggle password icon' />
            </label>
          </>
        )
      }
      {
        errorMsg &&
        <p className="error-msg">{errorMsg}</p>
      }
    </div>
  )
}

export default forwardRef(Input)
