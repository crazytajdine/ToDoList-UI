class Categorie {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.subCategories = [];
  }
  addSubcategorie(subcategorie) {
    this.subCategories.push(subcategorie);
  }
  getSubcategories() {
    return this.subCategories;
  }
}

class Subcategorie {
  constructor(name, iconPath) {
    this.name = name;
    this.iconPath = iconPath;
  }
}
let type = "desktop";
function getData() {
  const footballIcon = "categoriesSvgs/football.svg";
  const categorie1 = new Categorie("Categorie 1", "red-500");
  categorie1.addSubcategorie(new Subcategorie("Subcategorie 1", footballIcon));
  categorie1.addSubcategorie(new Subcategorie("Subcategorie 2", footballIcon));
  return [categorie1, categorie1, categorie1, categorie1, categorie1];
}

function renderCategories() {
  const categoriesContainer = document.getElementsByClassName(
    "categories-container"
  );
  Array.from(categoriesContainer).forEach((container) => {
    const categories = getData();

    categories.forEach((categorie, index) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = `w-3/4 min-h-12 bg-${categorie.color} text-white rounded-3xl flex justify-between items-center my-4`;
      categoryDiv.innerHTML = `
    <span class="flex items-center ml-10">${categorie.name}</span>
    <span class="mr-4 w-10 flex flex-row-reverse space-x-2 space-x-reverse">
    <button onclick="toggleSubcategories(${index})">
    
    <img src="svgs/next.svg"  >
    </button>
    <button>
    <img src="svgs/+.svg"  >
    </button>
    </span>
    `;

      container.insertBefore(categoryDiv, container.firstChild);

      // Create subcategories container for each category
      const subcategoriesContainer = document.createElement("div");
      subcategoriesContainer.className = `transition-all duration-500   overflow-hidden opacity-0 max-h-0  w-3/4`;
      subcategoriesContainer.id = `subcategories-${index}`;

      // Populate subcategories for each category
      categorie.getSubcategories().forEach((subcategory) => {
        const subDiv = document.createElement("div");
        subDiv.className = "flex items-center justify-center w-full  my-2";
        subDiv.innerHTML = `
        <span class="text-${categorie.color}">${subcategory.name}</span>
        <div class="min-w-16 h-px">
        <div class="min-w-16 h-px border border-secondary"></div>
        </div>
        
        <div class="ml-2">
        
        <img src="${subcategory.iconPath}" class="h-6 w-6" alt="${subcategory.name}">
        </div>
        `;
        subcategoriesContainer.appendChild(subDiv);
      });

      // Insert the subcategories container after the main category div
      container.insertBefore(subcategoriesContainer,container.children[1]);
    });
  });
}

// Toggle function to show/hide subcategories
function toggleSubcategories(index) {
    const subcategoriesContainer = document.getElementsByClassName(type)[0].querySelector(
        `#subcategories-${index}`
    );
    const isVisible = subcategoriesContainer.classList.contains("opacity-100");

  if (isVisible) {
      subcategoriesContainer.classList.remove("opacity-100", "max-h-screen");
      subcategoriesContainer.classList.add("opacity-0", "max-h-0");
  } else {
    subcategoriesContainer.classList.remove("opacity-0", "max-h-0");
    subcategoriesContainer.classList.add("opacity-100", "max-h-screen");
      console.log(subcategoriesContainer);
  
}
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 500) {
    document.getElementsByClassName("phone")[0].style.display = "block";
    document.getElementsByClassName("desktop")[0].style.display = "none";
    type = "phone";  
} else {
    document.getElementsByClassName("phone")[0].style.display = "none";
    document.getElementsByClassName("desktop")[0].style.display = "block";
    type = "desktop"  
}

  renderCategories();
});
window.addEventListener("resize", () => {
  if (window.innerWidth < 500) {
    document.getElementsByClassName("phone")[0].style.display = "block";
    document.getElementsByClassName("desktop")[0].style.display = "none";
    type = "phone";  
 
} else {
    document.getElementsByClassName("phone")[0].style.display = "none";
    document.getElementsByClassName("desktop")[0].style.display = "block";
    type = "desktop"  
  
}
});
