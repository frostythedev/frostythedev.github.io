
zoom = 1;
doubleZoom = false;
imageIndex = 0;

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    previewImg = document.querySelector("#reddit-preview");

    previewImg.addEventListener("dblclick", event => {

        console.log("Double-click detected");

        if (doubleZoom) {

            zoom /= 2;
            doubleZoom = false;

        } else {

            zoom *= 2;
            doubleZoom = true;
        }

        previewImg.style.transform = "scale(" + zoom + ")";
        // Double-click detected
    })

    next = document.querySelector("#next-img");
    next.addEventListener('click', function (e) {

        if (imageIndex == 0) { 
            imageIndex++;
        } else { 
            imageIndex--; 
        }
        
        document.getElementById('reddit-preview').src = 'img/reddit' + imageIndex + '.png';
    });

});
