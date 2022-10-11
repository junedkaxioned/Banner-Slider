var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');
var bannerList = document.querySelectorAll('.banner');
var dots = document.querySelectorAll('.dot');
var x = 0;

// Slider Function 
function slider(num) {
  for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].classList.remove('active')
  }
  bannerList[num].classList.add('active');
}
slider(x);

// Events on Next Button
nextBtn.addEventListener('click', function () {
  x++
  if (x == (bannerList.length)) {
    x = 0;
  }
  slider(x);
  dotActive(x)
})

// Events on Previous Button
prevBtn.addEventListener('click', function () {
  x--
  if (x < 0) {
    x = bannerList.length - 1;
  }
  slider(x);
  dotActive(x)
})

// Indicators Functions
dots.forEach(function (dot, idx) {
  // Events on each Dots(indicators)
  dot.addEventListener('click', function () {
    x = idx;
    slider(x);
    dotActive(idx)
  })
})

// Function for Showing Dots Active
function dotActive(idx) {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[idx].classList.add('active');
}
dotActive(idx);
