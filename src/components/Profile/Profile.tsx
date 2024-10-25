// Compoenents
import ProfileDropDown from "./ProfileDropdown";
import SignupLink from "../common/SignupLink";

// Hooks
import { useAuth } from "../../hooks/useAuth";

function Profile () {
  const { isAuthLoading, userProfile } = useAuth()

  if (isAuthLoading) {
    return null
  }

  return (
    userProfile
    ? (
      <ProfileDropDown />
    )
    : (
      <SignupLink
        inHeader
      />
    )
  )
}

export default Profile
