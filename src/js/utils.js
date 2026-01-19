<<<<<<< HEAD
export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
=======
export function slugify(text) {
  return text
    .toString()   // FIXED
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-GB', {
    timeZone: "Europe/London",
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
>>>>>>> f05d767ea3c611aa631a569e69c765c5b59f2c58
  });
}
