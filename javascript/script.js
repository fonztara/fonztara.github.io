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

    const img = document.createElement("img");
    img.src = "../assets/photos/alfoSmall.png";
    const img2 = document.createElement("img");
    img2.src = "../assets/photos/alfoSmall.png";
    const img3 = document.createElement("img");
    img3.src = "../assets/photos/alfoSmall.png";

    detailContent.querySelector(".gallery").appendChild(img);
    detailContent.querySelector(".gallery").appendChild(img2);
    detailContent.querySelector(".gallery").appendChild(img3);

    body.classList.add("no-scroll");
    detail.classList.add("showing");
  }
}

function hideDetail() {
  if (detail.classList.contains("showing")) {
    body.classList.remove("no-scroll");
    detail.classList.remove("showing");

    detailContent.querySelector(".gallery").innerHTML = "";
  }
}

function generateDetail(projectTitle) {
  
}