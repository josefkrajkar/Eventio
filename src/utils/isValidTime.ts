/**
 * Check if a given time string is valid in 24-hour or 12-hour format with or without minutes.
 * 
 * @param timeString - The time string to validate.
 * @returns True if the time string is valid, false otherwise.
 */
export function isValidTime(timeString: string) {
  const regex24Hour = /^([01]\d|2[0-3]):[0-5]\d$/;
  const regex12Hour = /^(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM)$/i;
  const regex12HourNoMinutes = /^(0?[1-9]|1[0-2])\s?(AM|PM)$/i;

  return (
    regex24Hour.test(timeString) ||
    regex12Hour.test(timeString) ||
    regex12HourNoMinutes.test(timeString)
  );
}
