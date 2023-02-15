$(document).ready(function () {
    console.log($("#botella"))
    
    $("#botella5").mlens(
        {
            imgSrc: $("#botella5").attr("data-big"),   // path of the hi-res version of the image
            imgSrc2x: $("#botella5").attr("data-big2x"),
            lensShape: "circle",                // shape of the lens (circle/square)
            lensSize: 80,            // lens dimensions (in px or in % with respect to image dimensions)
            // can be different for X and Y dimension
            borderSize: 4,                  // size of the lens border (in px)
            borderColor: "#fff",            // color of the lens border (#hex)
            borderRadius: 0,                // border radius (optional, only if the shape is square)
            imgOverlay: $("#botella5").attr("data-overlay"), // path of the overlay image (optional)
            overlayAdapt: true,    // true if the overlay image has to adapt to the lens size (boolean)
            zoomLevel: 1,          // zoom level multiplicator (number)
            responsive: true       // true if mlens has to be responsive (boolean)
        });
});