// Types
import type { ProfileType } from "../types/profile"

export function formatAttendeess(attendees: ProfileType[], capacity: number): string {
  return (
    `${attendees.length} of ${capacity}`
  )
}