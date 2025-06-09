const body = document.body;
const links = document.querySelector(".header-right ol");
const detail = document.querySelector(".project-detail");
const detailContent = detail.querySelector(".project-detail-content");
const headerButton = document.querySelector(".header-right button");

function toggleMenu() {
  hideDetail();
  if (headerButton.classList.contains("isOpen")) {
    headerButton.classList.remove("isOpen")
  } else {
    headerButton.classList.add("isOpen")
  }
  if (links.classList.contains("hidden")) {
    links.classList.remove("hidden");
  } else {
    links.classList.add("hidden");
  }
}

function closeMenu() {
  hideDetail();
  if (headerButton.classList.contains("isOpen")) {
    headerButton.classList.remove("isOpen")
  } else {
    headerButton.classList.add("isOpen")
  }
  if (!links.classList.contains("hidden")) {
    links.classList.add("hidden");
  }
}

function showDetail(projectTitle) {
  if (!detail.classList.contains("showing")) {
    detailContent.querySelector("h2").innerHTML = projectTitle;

    const description = document.querySelector(
      ".project-description." + projectTitle
    );

    detailContent.querySelector("p").innerHTML = description.innerHTML;

    body.classList.add("no-scroll");
    detail.classList.add("showing");
  }
}

function hideDetail() {
  if (detail.classList.contains("showing")) {
    body.classList.remove("no-scroll");
    detail.classList.remove("showing");
  }
}

function generateDetail(projectTitle) {
  
}