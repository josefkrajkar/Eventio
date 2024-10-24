import { memo } from 'react'

// Styles
import '../../styles/components/Loader.css'

function Loader ({ darker, larger }: { darker?: boolean, larger?: boolean }) {  

  return (
    <div className="loader">
      <img
        className={`loader-icon${larger ? " loader-icon-larger" : ""}`}
        src={
          darker
            ? "/images/svgs/Loader-darker.svg"
            : "/images/svgs/Loader.svg"
        }
        alt="Loading..."
      />
    </div>
  )
}

export default memo(Loader)
