const links = document.querySelector(".header-right ol");

function showMenu() {
  if (links.classList.contains("hidden")) {
    links.classList.remove("hidden");
  } else {
    closeMenu();
  }
}

function closeMenu() {
  links.classList.add("hidden");
}

const detail = document.querySelector(".project-detail");
const detailContent = detail.querySelector(".project-detail-content")
const body = document.body

function showDetail(projectTitle) {
  if (!detail.classList.contains("showing")) {
    detailContent.querySelector("h2").innerHTML = projectTitle;

    const description = document.querySelector(".project-description." + projectTitle)

    detailContent.querySelector("p").innerHTML = description.innerHTML

    body.classList.add("no-scroll")
    detail.classList.add("showing");
  }
}

function hideDetail() {
    if (detail.classList.contains("showing")) {
        body.classList.remove("no-scroll")
        detail.classList.remove("showing");
      }
}