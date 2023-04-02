export default function getCreatedAt(createdAt = "") {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}
