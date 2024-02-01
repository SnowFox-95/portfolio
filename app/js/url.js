/* 



This is script to mod URL



*/

document.addEventListener("DOMContentLoaded", function () {
  let currentPath = window.location.pathname;
  switch (true) {
    case currentPath.endsWith("index.html"):
      var newPath = currentPath.slice(0, -10);
      window.history.replaceState({}, "", newPath);
      break;
    case currentPath.includes("/learn"):
      let pageNum = currentPath.match("//learn(d+)?.html/");
      if (pageNum) {
        let newUrl = "/learn/#page-" + pageNum[1];
        window.history.replaceState({}, "", newUrl);
      } else {
        let newUrl = "/learn/#page-1";
        window.history.replaceState({}, "", newUrl);
      }
      break;
    default:
      break;
  }
});
