//groomsmen slider js start


let slider = document.querySelector(".slider");
let items = document.querySelectorAll(".slider_img");
let x = 0; // taking "variable(x = 0)" because we want to change the slider slide.
let activeSliderIndex = 0;
/*
function left() {
  if (activeSliderIndex == 0) {
    return;
  } else {
    x += 900;
    slider.style.transform = `translate(${x}px)`;
    activeSliderIndex--;
  }
}

function right() {
  if (activeSliderIndex == items.length - 1) {
    return;
  } else {
    x -= 900;
    slider.style.transform = `translate(${x}px)`;
    activeSliderIndex++;
  }
}*/

let slideWidth = items[0].clientWidth; // Get the width of the first slide

function left() {
  if (activeSliderIndex == 0) {
    return;
  } else {
    x += slideWidth;
    slider.style.transform = `translate(${x}px)`;
    activeSliderIndex--;
  }
}

function right() {
  if (activeSliderIndex == items.length - 1) {
    return;
  } else {
    x -= slideWidth;
    slider.style.transform = `translate(${x}px)`;
    activeSliderIndex++;
  }
}


//groomsmen slider js end

// bridesmaid slider js start
let bSlider = document.querySelector(".b_slider");
let bItems = document.querySelectorAll(".b_slider_img");
let bx = 0;
let bActiveSlideIndex = 0;

function bLeft() {
  if (bActiveSlideIndex == 0) {
    return;
    // bActiveSlideIndex = 2
  } else {
    bx += 900;
    bSlider.style.transform = `translate(${bx}px)`;
    bActiveSlideIndex--;
  }
}

function bRight() {
  if (bActiveSlideIndex == items.length - 1) {
    return;
  } else {
    bx -= 900;
    bSlider.style.transform = `translate(${bx}px)`;

    bActiveSlideIndex++;
  }
}

// craousel js start

let sideNavWrapper = document.querySelector(".craousel_wrapper");
let backStretch = document.querySelectorAll(".back_stretch");
let activeIndex = 0;

function craousel() {
  backStretch.forEach(function (data) {
    data.classList.remove("active");
  });
  if (activeIndex == 0) {
    activeIndex = backStretch.length - 1;
    backStretch[activeIndex].classList.add("active");
  } else {
    activeIndex--;
    backStretch[activeIndex].classList.add("active");
  }
}

setInterval(function () {
  craousel();
}, 4000);
// carousel js end

//lightbox js start

let gallerySlider = document.querySelectorAll(
  ".gallery_slider .gallery_link1 img"
);
let galleryCarousel = document.querySelector(".gallery_carousel");
let galleryActiveIndex = 0;

function openx(index) {
  galleryActiveIndex = index;
  galleryCarousel.style.display = "block";

  gallerySlider.forEach(function (item) {
    item.classList.remove("active");
  });

  if (galleryActiveIndex == gallerySlider.length - 1) {
    return;
  }

  gallerySlider[galleryActiveIndex].classList.add("active");
}

function slideLeft() {
  gallerySlider.forEach((item) => {
    item.classList.remove("active");
  });

  if (galleryActiveIndex == 0) {
    // return
    galleryActiveIndex = gallerySlider.length;
  }
  galleryActiveIndex--;

  gallerySlider[galleryActiveIndex].classList.add("active");
}

function slideRight() {
  gallerySlider.forEach((item) => {
    item.classList.remove("active");
  });

  if (galleryActiveIndex == gallerySlider.length - 1) {
    // return
    galleryActiveIndex = -1;
  }
  galleryActiveIndex++;

  gallerySlider[galleryActiveIndex].classList.add("active");
}

function closeLB() {
  galleryCarousel.style.display = "none";
}

setInterval(() => {
  slideRight();
}, 4000);

//lightbox js end

//form js start

//get the form and input fields
let form = document.querySelector("#myForm");
let firstName = document.querySelector("#first_name");
let lastName = document.querySelector("#last_name");
let emailField = document.querySelector("#email");
let phoneField = document.querySelector("#phone");

//get the error message elements
let fNameError = document.querySelector("#fName");
let lNameError = document.querySelector("#lName");
let emailError = document.querySelector("#errEmail");
let phoneError = document.querySelector("#errPhone");

//function to validate the name field
function validateFname() {
  const name = firstName.value.trim(); //trim string method uses for remove the whitespace from the string
  if (name == "") {
    fNameError.textContent = "Enter the First Name";
    return false;
  } else {
    fNameError.textContent = " ";
    return true;
  }
}

function validateLname() {
  const laName = lastName.value.trim();
  if (laName == "") {
    lNameError.textContent = "Enter the Last Name";
    return false;
  } else {
    lNameError.textContent = "";
    return true;
  }
}

//function to validate the email field
function validateEmail() {
  const email = emailField.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

//function to validate the phone field
function validatePhone() {
  const phone = phoneField.value.trim();
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Enter the valid phone number";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("working");
  const isFnameValid = validateFname();
  const isLnameValid = validateLname();
  const isemailValid = validateEmail();
  const isphoneValid = validatePhone();

  if (isFnameValid && isLnameValid && isemailValid && isphoneValid) {
    console.log("form submit successfully!");
    form.reset();
  }
});

//get the form input radio field
let accept = document.querySelector(".radio_input_value");
let hide = document.querySelector("#decline");

function show() {
  hide.style.display = "block";
}

function hideInput() {
  hide.style.display = "none";
}

//select food option
let select = document.querySelector("#food");
let selectDessert= document.querySelector("#dessert")

select.innerHTML = `
<option value="">None</option>
<option value="chicken">Chicken</option>
<option value="Beef">Beef</option>
<option value="vegetarian">Vegetarian</option>
`;
selectDessert.innerHTML = `
 <option value="">None</option>
    <option value="chocolate_cake">Chocolate Cake</option>
    <option value="lemon_cheesecake">Lemon Cheesecake</option>
    <option value="key_lime_pie">Key Lime Pie</option>
`

//form js end

//bridesmaid slider js end

/*
1.parallex site header?
2.how can we apply one slider function working on both slider?
3. why we write in return value true or false?
*/
