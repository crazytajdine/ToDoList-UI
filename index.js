    const tasks = {};

// Fonction pour ajouter un outline sur le conteneur
function addOutline() {
  document.getElementById("input-container").classList.add("border-gray-400");
  document.getElementById("input-container").classList.remove("border-[1px]");
  document.getElementById("input-container").classList.add("border-[2px]");
}

// Fonction pour enlever l'outline sur le conteneur
function removeOutline() {
  document.getElementById("input-container").classList.remove("border-gray-400");
  document.getElementById("input-container").classList.remove("border-[2px]");
  document.getElementById("input-container").classList.add("border-[1px]");
}

    // Fonction pour ajouter une tâche
function addTask(event) {
    if (event.key === 'Enter') {
        const taskInput = document.getElementById('task-input');
        const taskText = taskInput.value.trim(); // Enlève les espaces inutiles

        if (taskText) { // Ajoute la tâche seulement si elle n'est pas vide
            const taskList = document.getElementById('task-list');
            const newTask = document.createElement('li');
            newTask.textContent = taskText;
            taskList.appendChild(newTask);

            taskInput.value = ''; // Efface le contenu de l'input
        }
    }
}
function toggleCategories() {
    const categories = document.getElementById('categories');
    
    if (categories.classList.contains('hidden')) {
        categories.classList.remove('hidden');
        categories.classList.remove('opacity-0', 'pointer-events-none');
        categories.classList.add('opacity-100');
    } else {
        categories.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => categories.classList.add('hidden'), 300); // 300ms to match the transition duration
    }
}
function toggleprio() {
    const categories = document.getElementById('prio');
    
    if (categories.classList.contains('hidden')) {
        categories.classList.remove('hidden');
        categories.classList.remove('opacity-0', 'pointer-events-none');
        categories.classList.add('opacity-100');
    } else {
        categories.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => categories.classList.add('hidden'), 50); // 300ms to match the transition duration
    }
}
function curseur() {
    cursor: pointer;
}
document.addEventListener('click', function (event) {
    const categories = document.getElementById('categories');
    const catButt = document.getElementById('catButt');
    // Vérifie si le clic est en dehors de l'élément 'catButt' et de la liste 'categories'
    if (!catButt.contains(event.target) && !categories.contains(event.target)) {
        categories.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => categories.classList.add('hidden'), 50); // 300ms pour que l'animation de transition se produise
    }
});
function toggleDateInput() {
    const dateInput = document.getElementById('dateInput');
    dateInput.classList.toggle('hidden');
}

// Cacher le champ de date si on clique en dehors
document.addEventListener('click', function(event) {
    const calendarIcon = document.getElementById('calendarIcon');
    const dateInput = document.getElementById('dateInput');

    // Vérifie si le clic est en dehors de l'icône ou du champ de date
    if (!calendarIcon.contains(event.target) && !dateInput.contains(event.target)) {
        dateInput.classList.add('hidden');
    }
});
function toggleDateInput() {
    const dateInput = document.getElementById("dateInput");
    dateInput.style.display = dateInput.style.display === "none" ? "block" : "none";
}
function togglePrio() {
    const prioMenu = document.getElementById("prio");
    prioMenu.classList.toggle("opacity-0");
    prioMenu.classList.toggle("pointer-events-none");

    // Si le menu est visible, ajouter un écouteur de clic pour fermer en dehors
    if (!prioMenu.classList.contains("opacity-0")) {
      document.addEventListener("click", closeMenuOnClickOutside);
    }
  }

  // Fonction pour fermer le menu quand on clique en dehors
  function closeMenuOnClickOutside(event) {
    const prioMenu = document.getElementById("prio");
    const svgIcon = document.querySelector("svg[onclick='togglePrio()']");

    // Vérifie si le clic n'est pas sur le menu ou l'icône
    if (!prioMenu.contains(event.target) && !svgIcon.contains(event.target)) {
      prioMenu.classList.add("opacity-0");
      prioMenu.classList.add("pointer-events-none");

      // Supprimer l'écouteur une fois le menu fermé
      document.removeEventListener("click", closeMenuOnClickOutside);
    }
  }
  function toggleCalendar() {
    const calendarMenu = document.getElementById("calendarMenu");
    calendarMenu.classList.toggle("opacity-0");
    calendarMenu.classList.toggle("pointer-events-none");

    // Ajouter un écouteur de clic pour fermer le menu si l'on clique en dehors
    if (!calendarMenu.classList.contains("opacity-0")) {
      document.addEventListener("click", closeCalendarOnClickOutside);
    }
  }

  // Fonction pour fermer le menu du calendrier quand on clique en dehors
  function closeCalendarOnClickOutside(event) {
    const calendarMenu = document.getElementById("calendarMenu");
    const calendarIcon = document.getElementById("calendarIcon");

    // Vérifie si le clic n'est pas sur le menu ou l'icône du calendrier
    if (!calendarMenu.contains(event.target) && !calendarIcon.contains(event.target)) {
      calendarMenu.classList.add("opacity-0");
      calendarMenu.classList.add("pointer-events-none");

      // Supprimer l'écouteur une fois le menu fermé
      document.removeEventListener("click", closeCalendarOnClickOutside);
    }
  }