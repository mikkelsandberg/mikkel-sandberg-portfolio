export const formatText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-z\d-]/g, '');
}
