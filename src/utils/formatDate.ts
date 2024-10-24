/**
 * Formats the given ISO date string into a custom date format.
 * 
 * @param isoString The ISO date string to format.
 * @param showFullDate Optional. Specifies whether to include the full date and time or just the date.
 * @returns The formatted date string based on the parameters provided.
 */

export function formatDate(isoString: string, showFullDate?: boolean): string {
  // Create a Date object from the ISO string
  const date = new Date(isoString);

  // Define an array of month names
  const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];

  // Extract month, day, and year
  const month = showFullDate ? monthNames[date.getMonth()] : date.getMonth(); // Get the month name or number
  const day = date.getDate(); // Get the day of the month
  const year = date.getFullYear(); // Get the year

  // Extract hours and minutes
  let hours = date.getHours(); // Get the hour (in 24-hour format)
  const minutes = date.getMinutes(); // Get the minutes

  // Format minutes to always show two digits (e.g., "02" instead of "2")
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  if (showFullDate) {
    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight
    // Return the formatted date string
    return `${month} ${day}, ${year} – ${hours}:${formattedMinutes} ${ampm}`;
  }

  // If the showFullDate parameter is false, return the date as a number
  return `${month as number + 1}.${day}. ${year} – ${hours}:${formattedMinutes}`;
}