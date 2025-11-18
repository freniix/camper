const header = document.querySelector("header");
const sectionTwo = document.querySelector("#section-two");
const headerBtns = document.querySelector("#header-buttons");
const topBtn = document.querySelector("#top-btn");
const darkZone = document.querySelector(".dark-zone");

function darkZoneObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          topBtn.classList.add("show", "fade-in");
        } else {
          topBtn.classList.add("fade-out");
          const timer = setTimeout(() => {
            topBtn.classList.remove("show", "fade-out");
            clearTimeout(timer);
          }, 300);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(darkZone);
}

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const headerLockIcon = document.querySelector("#header-lock-icon");
const unloackIcon = "ri-lock-unlock-line";
const lockIcon = "ri-lock-line";

//logic for lock icon starts here
let isUnlocked = true;
const handleHeaderLockButton = () => {
  if (isUnlocked) {
    headerLockIcon.classList = lockIcon;
  } else {
    headerLockIcon.classList = unloackIcon;
  }
  isUnlocked = !isUnlocked;
};
//logic for lock icon ends here

//scroll position starts here
function scrollEvents() {
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
}

// scroll position ends here

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
//  list item click function ends here
function runSwiper() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: "auto",
    effect: "coverflow",
    grab: true,
    centeredSlides: true,

    coverflowEffect: {
      rotate: 0,
      depth: 150,
      modifier: 1,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
//swiper function ends here

const progressCounter = document.querySelectorAll(".progress-counter");
const progressLabels = document.querySelectorAll(".progress-label");

function topBottom({ top, bottom }) {
  top.forEach(
    (item) => (progressLabels[item].className = "progress-label top")
  );
  bottom.forEach(
    (item) => (progressLabels[item].className = "progress-label bottom")
  );
}

function setClasses(el, classNames) {
  el.className = classNames;
}
function progressMaintainer() {

  const rootSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
// Getting current base font size
  console.log(
    "WIDTH:", window.innerWidth,
    "| 46rem =", rootSize * 46,
    "| CONDITION =", window.innerWidth < rootSize * 46
  );

  if (window.innerWidth > rootSize * 67.5) {
    topBottom({ top: [0, 1, 2, 3], bottom: [4, 5, 6, 7] }); //setting label positons

    progressCounter.forEach((item, index) => {
      if (index === 3) {
        setClasses(item, "progress-counter connect-bottom");
      } else if (index === 7) {
        setClasses(item, "progress-counter");
      } else {
        setClasses(item, "progress-counter connect-right");
      }
    });
  } else if (
    (window.innerWidth > rootSize * 46) && (window.innerWidth < rootSize * 67.5 )) {

    topBottom({ top: [0, 1, 2, 5], bottom: [3, 4, 6, 7] });//setting label positions
    progressCounter.forEach((item, index) => {
      if (index === 2) {
        setClasses(item, "progress-counter connect-bottom");
      } else if (index === 5) {
        setClasses(item, "progress-counter connect-bottom double-connect");
      } else if (index === 7 || index === 3) {
        setClasses(item, "progress-counter ");
      } else {
        setClasses(item, "progress-counter connect-right");
      }
    });


  } else if (window.innerWidth < rootSize * 46) {
    console.log("inside smaller screen")
    topBottom({ top: [0, 1, 3, 5], bottom: [2, 4, 7, 6] }); //setiting label positions
    console.log("smaller screeen")
    progressCounter.forEach((item, index) => {
      if (index === 0 || index === 4 || index === 7) {
        setClasses(item,"progress-counter connect-right" )
      } else if (index === 1 || index === 5) {
        setClasses(item, "progress-counter connect-bottom")
      } else if (index === 3) {
        setClasses(item,"progress-counter connect-bottom double-connect" )
      } else {
        setClasses(item, "progress-counter")
      }
    });
  }
}

progressMaintainer();
window.addEventListener("resize", progressMaintainer);
darkZoneObserver();
scrollEvents();
listItemClick();
runSwiper();
