// Compoenents
import ProfileDropDown from "./ProfileDropdown";
import SignupLink from "../common/SignupLink";

// Hooks
import { useAuth } from "../../hooks/useAuth";

function Profile () {
  const { isAuthLoading, userProfile } = useAuth()

  return (
    userProfile
    ? (
      <ProfileDropDown />
    )
    : (
      <SignupLink
        inHeader
        disabled={isAuthLoading}
      />
    )
  )
}

export default Profile
