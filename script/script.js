

const header = document.querySelector("header");
const sectionTwo = document.querySelector("#section-two");
const headerBtns = document.querySelector("#header-buttons");
const topBtn = document.querySelector("#top-btn");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // header.classList.add("text-black");
        headerBtns.classList.add("text-white");
        topBtn.classList.add("show");
        topBtn.classList.add("fade-in");
      } else {
        headerBtns.classList.remove("text-white");
        topBtn.classList.add("fade-out");

        const timer = setTimeout(() => {
          topBtn.classList.remove("show");
          topBtn.classList.remove("fade-out");

          clearTimeout(timer);
        }, 300);
      }
    });
  },
  { threshold: 0.2 }
);
observer.observe(sectionTwo);
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const headerLockIcon = document.querySelector("#header-lock-icon");
const unloackIcon = "ri-lock-unlock-line";
const lockIcon = "ri-lock-line";

let isUnlocked = true;
const handleHeaderLockButton = () => {
  if (isUnlocked) {
    headerLockIcon.classList = lockIcon;
  } else {
    headerLockIcon.classList = unloackIcon;
  }
  isUnlocked = !isUnlocked;
};

let lastScrollPosition = window.scrollY;
window.addEventListener("scroll", () => {
  if (!isUnlocked) return;
  const currentScrollPosition = window.scrollY;
  if (currentScrollPosition > lastScrollPosition) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScrollPosition = currentScrollPosition;
});

function listItemClick() {
  const lists = document.querySelectorAll(".right ul li");
  lists.forEach((listItem) => {
    listItem.addEventListener("click", () => {
      lists.forEach((item) => {
        item.classList.remove("active");
      });
      listItem.classList.add("active");
    });
  });
}

listItemClick();
