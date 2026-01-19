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
  });
}
