export function formatDate(dateString) {
  const date = new Date(dateString);

  // Options for formatting the date
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getUTCFullYear().toString().slice(-2);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  // Formatted date string
  const formattedDate = `${day} ${month} ${year} | ${hours}:${minutes}`;

  return formattedDate;
}

// [Example usage]
// const dateStr = "2024-08-18T17:18:06.219Z";
// const formattedDate = formatDate(dateStr);
// console.log(formattedDate); // Output: "18 Aug 24 | 17:18"
