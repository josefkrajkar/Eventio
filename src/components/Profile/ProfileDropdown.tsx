import { useState } from "react";

// Utils
import { getInitialsFromName } from "../../utils/getInitialsFromName";

// Hooks
import { useAuth } from "../../hooks/useAuth";

// Styles
import '../../styles/components/ProfileDropdown.css'

function ProfileDropDown () {
  const { userProfile, logout } = useAuth()
  const { firstName, lastName } = userProfile || {}
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className='profile-dropdown'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='avatar'>{getInitialsFromName(firstName, lastName)}</div>
      <span className='user-name'>{`${firstName} ${lastName}`}</span>
      <span className="arrow">▼</span>

      {
        isOpen &&
        <div className="dropdown-menu">
          <a href="/profile">Profile</a>
          <a onClick={logout}>Log out</a>
        </div>
      }
    </div>
  )
}

export default ProfileDropDown
