const heroSwiper = new Swiper(
  ".hero__swiper",
  {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  }
);

const topProductSwiper = new Swiper(
  ".top-product__swiper",
  {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      600: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    }
  }
);

const topProductSwiperBtn = document.querySelector("#top-product__swiper__btn");

topProductSwiperBtn.querySelector(".btn-next").addEventListener("click", () => {
  topProductSwiper.slideNext();
});

topProductSwiperBtn.querySelector(".btn-prev").addEventListener("click", () => {
  topProductSwiper.slidePrev();
});

const headerContent = document.querySelector("#header__content");

const showMenuClass = "show-menu";

document.querySelector("#btn-close-menu").addEventListener("click", () => {
  headerContent.classList.remove(showMenuClass);
});

document.querySelector("#btn-open-menu").addEventListener("click", () => {
  headerContent.classList.add(showMenuClass);
});
// JavaScript code
var swiper = new Swiper('.top-product__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 10, // Adjust the space between each slide as per your preference
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev'
  }
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

/// JavaScript
function updateDateTime() {
  const currentDate = new Date();
  const day = currentDate.toLocaleString('en-US', { day: 'numeric' });
  const month = currentDate.toLocaleString('en-US', { month: 'short' });
  const time = currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });

  const formattedDate = `${currentDate.toLocaleString('en-US', { weekday: 'short' })} ${day} ${month} [${time}]`;
  document.getElementById('currentDateTime').textContent = formattedDate;
}

// Call the function to update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to set the date and time when the page loads
updateDateTime();
