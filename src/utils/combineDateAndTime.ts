/**
 * Combines a date string and a time string into a single ISO string format.
 * 
 * @param dateString The date string to be combined.
 * @param timeString The time string to be combined.
 * @returns The combined date and time in ISO string format.
 * @throws {Error} If the date string or time string is invalid.
 */
export function combineDateAndTime(dateString: string, timeString: string): string {
  // Parse the date string into a Date object
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  // Regular expression to match time formats like '10:15', '3:45 PM', '12:00 AM'
  const timePattern = /^(\d{1,2}):(\d{2})(?:\s?(AM|PM))?$/i;
  const timeMatch = timeString.match(timePattern);

  if (!timeMatch) {
    throw new Error('Invalid time string');
  }

  let hours = parseInt(timeMatch[1], 10);
  const minutes = parseInt(timeMatch[2], 10);
  const meridiem = timeMatch[3];

  if (meridiem) {
    // Convert 12-hour clock to 24-hour clock
    if (meridiem.toUpperCase() === 'PM' && hours < 12) {
      hours += 12;
    } else if (meridiem.toUpperCase() === 'AM' && hours === 12) {
      hours = 0;
    }
  }

  // Set the hours and minutes on the date object
  date.setHours(hours, minutes, 0, 0);

  // Return the date-time in ISO string format
  return date.toISOString();
}