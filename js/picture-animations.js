// The purpose of this script is to determine the type of animation to use 
// when loading pictures in the About section.

// On a full screen:
// the 1st (left) image should come from the left,
// the 2nd (center) image should simply fade in,
// and the 3rd (right) image should come from the right.

// On a small screen where the images are stacked:
// the 1st image should come from the left,
// the 2nd image should come from the right,
// and the 3rd image should come from the left.

$(document).ready(function () {
    if ($(window).width() < 1000) {
        $("#image-2").addClass('fadeInRightBig');
        $("#image-3").addClass('fadeInLeftBig');
    } else {
        $("#image-2").addClass('fadeIn');
        $("#image-3").addClass('fadeInRightBig');
    }
});
