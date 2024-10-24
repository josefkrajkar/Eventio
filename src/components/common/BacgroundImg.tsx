// Hooks
import { useLayoutRules } from '../../hooks/useLayoutRules'

// Styles
import '../../styles/components/BackgroundImg.css'

function BackgroundImg () {
  const {showBackgroundImg} = useLayoutRules()

  if (!showBackgroundImg) {
    return null
  }

  return (
    <div className='background-img'>
      <div className='quote-wrapper'>
        <cite>
          “Great, kid. Don’t get cocky.”
        </cite>
        <hr />
        <p>
          Han Solo
        </p>
      </div>
    </div>
  )
}

export default BackgroundImg
