/* let oldPath = window.location.pathname;
if (oldPath.endsWith("index.html")) {
  let newPath = oldPath.slice(0, -10);
  window.history.replaceState({}, "", newPath);
} else {
  let pageName = window.location.pathname.split("/").pop().replace(".html", "");
  let newPath = window.location.origin + "/" + pageName;
  window.history.pushState({}, "", newPath);
} 
 */