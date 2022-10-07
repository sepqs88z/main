// header skrollbar

document.querySelectorAll(".dropdown__simplebar").forEach((dropdown) => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
  });
});

// header dropdown

const btns = document.querySelectorAll(".header-bottom__nav .nav__button");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach((item) => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach((el) => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns);
      }
    });
    btns.forEach((el) => {
      if (el != this) {
        el.classList.remove(activeClassbtns);
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  });
});

// hero swiper

const container = document.querySelector(".container");
const swiper = new Swiper(".swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000,
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-bullet-pagination",
    type: "bullets",
    clickable: true,
  },
});

// gallery select

const element = document.querySelector("#painting");
const choices = new Choices(element, {
  searchEnabled: false,
  // сортировка списка НЕ по алфовиту
  shouldSort: false,
  shouldSortItems: false,
});

// gallery slide

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 34,
    pagination: {
      el: ".gallery .nav__pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".nav__next",
      prevEl: ".nav__back",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 34,
      },

      530: {
        slidesPerView: 2,
        spaceBetween: 34,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 34,
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 34,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
    },

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});

// catalog accordion

(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0],
  });
})();

// catalog tab

const params = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active",
};

function setTabs(params) {
  const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${params.wrap}`);
    const currentContent = wrap.querySelector(
      `.${params.content}[data-target="${path}"]`
    );
    const contents = wrap.querySelectorAll(`.${params.content}`);

    contents.forEach((el) => {
      el.classList.remove(params.active);
    });

    currentContent.classList.add(params.active);

    tabBtns.forEach((el) => {
      el.classList.remove(params.active);
    });

    this.classList.add(params.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(params);

// developments slide

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".developments__slides", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 25,

    navigation: {
      nextEl: ".btn-dev",
      prevEl: ".btn-den",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 27,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },

    // клики на кнопки слайда для пролистывание картинок
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
    },

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});

// project tooltip

tippy(".projects__tooltip-btn", {
  theme: "tomato",
});

// projects slide

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".projects__slides", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 44,

    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },

    breakpoints: {
      550: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 34,
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    // watchSlidesProgress: true,
    // watchSlidesVisibility: true,
    // slideVisibleClass: "slide-visible",

    // on: {
    //   init: function () {
    //     this.slides.forEach((slide) => {
    //       if (!slide.classList.contains("slide-visible")) {
    //         slide.tabIndex = "-1";
    //       } else {
    //         slide.tabIndex = "";
    //       }
    //     });
    //   },
    //   slideChange: function () {
    //     this.slides.forEach((slide) => {
    //       if (!slide.classList.contains("slide-visible")) {
    //         slide.tabIndex = "-1";
    //       } else {
    //         slide.tabIndex = "";
    //       }
    //     });
    //   },
    // },

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});

// contacts input

let select = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");
im.mask(select);

new JustValidate(".form", {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = select.inputmask.unmaskedvalue();
        console.log(phone);
        return Number(phone) && phone.length === 10;
      },
    },
  },
  messages: {
    name: "Недопустимый формат",
    tel: "Недопустимый формат",
  },
});

// contacts map

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  const mapElem = document.querySelector("#map");
  const myMap = new ymaps.Map(
    "map",
    {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.75846806898367, 37.60108849999989],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14,
      // скрывает стандартную навигацию
      controls: ["geolocationControl", "zoomControl"],
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: "none",
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" },
    }
  );

  myMap.behaviors.disable("scrollZoom");

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/map-marker.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

// burger menu

const burgerBtn = document.querySelector(".header-top__burger-btn-open");
const menu = document.querySelector(".header-top__burger-nav");

const openBurger = function () {
  menu.classList.add("active");
};

const closeBurger = function () {
  menu.classList.remove("active");
};

burgerBtn.addEventListener("click", openBurger);

menu.addEventListener("click", function (event) {
  const target = event.target;
  if (
    target.closest(".header-top__burger-btn-close") ||
    target.closest(".header-burger__link")
  ) {
    closeBurger();
  }
});

// search menu

const searchBtn = document.querySelector(".header-top__search-btn-open");
const menuSearch = document.querySelector(".header-top__search-nav");

const openSearch = function () {
  menuSearch.classList.add("active");
};

const closeSearch = function () {
  menuSearch.classList.remove("active");
};

searchBtn.addEventListener("click", openSearch);

menuSearch.addEventListener("click", function (events) {
  const target = events.target;
  if (target.closest(".header-search__btn-close")) {
    closeSearch();
  }
});

// modal window

const bttns = document.querySelectorAll(".gallery__modal");
const modalOverlay = document.querySelector(".modal-overlay");
const modals = document.querySelectorAll(".modal");
const btnnsClose = document.querySelector(".modal__btn");
const btnnsCloseMob = document.querySelector(".modal__btn-mob");

bttns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

btnnsClose.addEventListener("click", () => {
  modalOverlay.classList.remove("modal-overlay--visible");
});

btnnsCloseMob.addEventListener("click", () => {
  modalOverlay.classList.remove("modal-overlay--visible");
});
