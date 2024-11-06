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

function getData() {
  const categories = [];

  const footballIcon = "categoriesSvgs/football.svg";
  const basketballIcon = "categoriesSvgs/football.svg";
  const musicIcon = "categoriesSvgs/football.svg";
  const travelIcon = "categoriesSvgs/football.svg";

  const sportsCategory = new Categorie("Sports", "#EF4444"); // Light Pink
  sportsCategory.addSubcategorie(new Subcategorie("Football", footballIcon));
  sportsCategory.addSubcategorie(new Subcategorie("Football", basketballIcon));

  const musicCategory = new Categorie("Music", "#22C55E"); // Peach Puff
  musicCategory.addSubcategorie(new Subcategorie("Football", musicIcon));
  musicCategory.addSubcategorie(new Subcategorie("Football", musicIcon));

  const travelCategory = new Categorie("Travel", "#A855F7"); // Lavender
  travelCategory.addSubcategorie(new Subcategorie("Football", travelIcon));
  travelCategory.addSubcategorie(new Subcategorie("Football", travelIcon));

  categories.push(sportsCategory, musicCategory, travelCategory);

  return categories;
}

function renderCategories() {
  const categoriesContainer = document.getElementsByClassName(
    "categories-container"
  );
  Array.from(categoriesContainer).forEach((container) => {
    const categories = getData();

    categories.forEach((categorie, index) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = `w-3/4 min-phone:max-w-64 min-h-12 min-phone:self-start  text-white rounded-3xl flex justify-between items-center my-4`;
      categoryDiv.style.backgroundColor = categorie.color;
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
      subcategoriesContainer.className = `subcategories-${index} transition-all duration-500   overflow-hidden opacity-0 max-h-0 min-phone:ml-24 phone:justify-center `;

      // Populate subcategories for each category
      categorie.getSubcategories().forEach((subcategory) => {
        const subDiv = document.createElement("div");
        subDiv.className = "flex items-center     w-full  my-2";
        subDiv.innerHTML = `
        <span style="color: ${categorie.color};">${subcategory.name}</span>
        <div class="min-w-16 h-px">
        <div class="min-w-16 h-px border border-secondary"></div>
        </div>
        
        <div class=" h-6 w-6 ml-2">
        
        <img src="${subcategory.iconPath}" class="h-6 w-6" alt="${subcategory.name}">
        </div>
        `;
        subcategoriesContainer.appendChild(subDiv);
      });

      // Insert the subcategories container after the main category div
      container.insertBefore(subcategoriesContainer, container.children[1]);
    });
  });
}

// Toggle function to show/hide subcategories
function toggleSubcategories(index) {
  Array.from(document.getElementsByClassName(`subcategories-${index}`)).forEach(
    (subcategoriesContainer) => {
      const isVisible =
        subcategoriesContainer.classList.contains("opacity-100");

      if (isVisible) {
        subcategoriesContainer.classList.remove("opacity-100", "max-h-screen");
        subcategoriesContainer.classList.add("opacity-0", "max-h-0");
      } else {
        subcategoriesContainer.classList.remove("opacity-0", "max-h-0");
        subcategoriesContainer.classList.add("opacity-100", "max-h-screen");
      }
    }
  );
}

document.addEventListener("DOMContentLoaded", renderCategories);
