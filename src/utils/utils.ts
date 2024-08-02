export function formatPhoneNumber(phoneNumber : string) {
  // Remove any non-digit characters
  let cleaned = ('' + phoneNumber).replace(/\D/g, '');

  // Check if the input is of correct length
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
      return match[1] + '-' + match[2] + '-' + match[3];
  }

  return null;
}