export function generateBreadcrumb(url) {
  const pathArray = new URL(url).pathname.split("/").filter(Boolean);

  // Capitalize each word in the path
  const breadcrumb = pathArray.map((segment) => {
    return segment
      .split("%20")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  });

  return breadcrumb.join(" / ");
}

// [Example Usage]
// const url = "http://localhost:3000/home/Dample%20Project%202/add-your-podcast";
// const breadcrumb = generateBreadcrumb(url);
// console.log(breadcrumb);
