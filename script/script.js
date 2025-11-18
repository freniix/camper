const header = document.querySelector("header");
const sectionTwo = document.querySelector("#section-two");
const headerBtns = document.querySelector("#header-buttons");
const topBtn = document.querySelector("#top-btn");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.boundingClientRect.top < 0) {
//         topBtn.classList.add("show", "fade-in");
//       } else {
//         topBtn.classList.add("fade-out");
//         setTimeout(() => {
//           topBtn.classList.remove("show", "fade-out");
//         }, 300);
//       }
//     });
//   },
//   {
//     threshold: 0,
//   }
// );

// observer.observe(sectionTwo);


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
function runSwiper(){
  const swiper = new Swiper(".swiper",{
    direction: 'horizontal',
    loop:true,
    slidesPerView: 4,
    effect: "coverflow",
    grab: true,
    centeredSlides: true,

    coverflowEffect: {
      rotate: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}
//swiper function ends here


listItemClick();
runSwiper();
