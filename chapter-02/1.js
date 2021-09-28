const div = document.getElementById("root");

for (const key of ["title", "URL", "referrer", "lastModified", "compatMode"]) {
  const p = document.createElement("p");
  p.textContent = `${key}: ${document[key]}`;
  div.appendChild(p);
  console.log(document[key]);
}
