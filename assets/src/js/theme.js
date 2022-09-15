import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

window.lightGallery = lightGallery;
window.lgThumbnail = lgThumbnail;
window.lgZoom = lgThumbnail;

window.$ = window.jQuery = require("jquery");

// lightGallery(document.getElementById("klienti"), {
//     selector: ".image",
//     plugins: [lgZoom, lgThumbnail],
//     speed: 500,
// });

$(document).ready(function () {
    // $("#offcanvas .nav li a").click(function (event) {
    //     $("#offcanvas").removeClass("show");
    //     $(".offcanvas-backdrop").remove();
    //     $("body").removeAttr("style");
    // });
});
