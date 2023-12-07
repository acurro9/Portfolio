class Item {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  /*Getterrs */
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
}

class Project extends Item {
  #image;
  constructor(title, descripcion, image) {
    super(title, descripcion);
    this.#image = image;
  }

  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getImage() {
    return this.#image;
  }
}

const drogo = new Project("Drogo", "HTML, CSS, PHP y JS", "drogo.png");
const bienesRaices = new Project(
  "Bienes Raices",
  "HTML, CSS, PHP, SASS y JS",
  "bienesRaices.png"
);
const tresRaya = new Project("Tic Tac Toe", "Java", "tresRaya.png");
const Fcolumns = new Project("Four Columns", "HTML y CSS", "4tarjetas.png");
const curvedSection = new Project(
  "Curved Section",
  "HTML y CSS",
  "curvedSection.png"
);
const socialProof = new Project(
  "Social Proof",
  "HTML y CSS",
  "social_proof.png"
);
const profileCard = new Project("Profile Card", "HTML y CSS", "profile.png");
const TColumns = new Project("Three Columns", "HTML y CSS", "3columns.png");
const orderSumary = new Project("Order Sumary", "HTML y CSS", "order.png");
const previewCard = new Project("Product Preview", "HTML y CSS", "product.png");
const NFT = new Project("NFT", "HTML y CSS", "nft.png");
const simplePrice = new Project("Price Grid", "HTML y CSS", "simplegrid.png");
const statsPreview = new Project("Stats Preview", "HTML y CSS", "business.png");
const freelancer = new Project("Freelancer", "HTML y CSS", "freelancer.png");
const homePage = new Project("Home Page", "HTML y CSS", "homePage.png");

const projects = [
  [drogo, NFT, TColumns, Fcolumns, profileCard],
  [
    bienesRaices,
    freelancer,
    statsPreview,
    socialProof,
    orderSumary,
    curvedSection,
  ],
  [simplePrice, tresRaya, homePage, previewCard],
];

function createProjects(arrayP) {
  try {
    var projectsMain = document.getElementById("projects_project");
    for (let y = 0; y < 3; y++) {
      var outerDiv = document.createElement("div");
      outerDiv.classList.add("projects_flex");
      for (let x = 0; x < projects[y].length; x++) {
        var innerDiv = document.createElement("div");
        innerDiv.classList.add("projects_photo");
        var heading = document.createElement("h1");
        heading.textContent = String(arrayP[y][x].getTitle());
        var paragraph = document.createElement("p");
        paragraph.textContent = String(arrayP[y][x].getDescription());
        var image = document.createElement("img");
        let imgSRC = "/images/projects/" + arrayP[y][x].getImage();
        image.src = imgSRC;
        image.alt = arrayP[y][x].getTitle();

        innerDiv.appendChild(heading);
        innerDiv.appendChild(paragraph);
        innerDiv.appendChild(image);
        outerDiv.appendChild(innerDiv);
      }
      projectsMain.appendChild(outerDiv);
    }
  } catch (err) {
    console.log("Error: " + err);
  }
}

window.addEventListener("load", (e) => {
  try {
    createProjects(projects);
  } catch (err) {
    console.log("Error: " + err);
  }
});
