albumCover = document.querySelector('.album-cover');
linksHeader = document.querySelector('.links-header');
linksWrapper = document.querySelector('.links-wrapper');

// Initial state
var scrollPos = 0;
// adding scroll event
document.addEventListener('scroll', (event) => {
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    // Scrolling up
    console.log('going up')
    albumCover.style.top = Number(albumCover.style.top.slice(0, -2)) + Math.round(window.scrollY) + 'px';
    linksWrapper.style.top = Number(linksWrapper.style.top.slice(0, -2)) + Math.round(window.scrollY) + 'px';
  } else {
    // Scrolling down
    if (Math.round(window.scrollY) >= 10) {

      albumCover.style.positon = "fixed";
      // albumCover.style.top = "-108px";
    } else {
      console.log(Math.round(window.scrollY));
      albumCover.style.top = Number(albumCover.style.top.slice(0, -2)) - Math.round(window.scrollY) + 'px';
      linksWrapper.style.top = Number(linksWrapper.style.top.slice(0, -2)) - Math.round(window.scrollY) + 'px';
    }
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
}, {
  passive: true
});