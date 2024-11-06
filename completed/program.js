const all = document.getElementsByClassName("all");
const today = document.getElementsByClassName("today");
for (let i = 0; i < all.length; i++) {
  all[i].addEventListener("click", () => {
    const url = new URL(window.location);
    const params = new URLSearchParams(url.search);
    params.set("today", "");
    url.search = params.toString();

    window.history.replaceState(null, "", url.href);
    for (j = 0; j < all.length; j++) {
      all[j].classList.remove("bg-gray-300");
      all[j].classList.add("bg-yellow-500");
    }
    for (j = 0; j < today.length; j++) {
      today[j].classList.remove("bg-yellow-500");
      today[j].classList.add("bg-gray-300");
    }
  });
}
for (let i = 0; i < today.length; i++) {
  today[i].addEventListener("click", (e) => {
    const url = new URL(window.location);
    const params = new URLSearchParams(url.search);
    params.set("today", "true");
    url.search = params.toString();

    window.history.replaceState(null, "", url.href);
    for (j = 0; j < today.length; j++) {
      today[j].classList.remove("bg-gray-300");
      today[j].classList.add("bg-yellow-500");
    }
    for (j = 0; j < all.length; j++) {
      all[j].classList.remove("bg-yellow-500");
      all[j].classList.add("bg-gray-300");
    }
  });
}
