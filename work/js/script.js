var currentPage = 1;
var aLeft = $(".a-move-left");
var aRight = $(".a-move-right");

$( document ).ready(function() {
    currentPage = 1;
    aLeft.css({'visibility': 'hidden'});

    $("#modal-11").on("hidden.bs.modal", function (e) {
        var video = document.getElementById("myVideoPlayer");
        video.pause();
        video.currentTime = 0;
    });
});

$(document).on('click', '.a-move-right', function (e) {
    currentPage = getNextPage();
    updateNavigation();
    displayNextPage();
});

$(document).on('click', '.a-move-left', function (e) {
    currentPage = getPreviousPage();
    updateNavigation();
    displayNextPage();
});

function getNextPage() {
    let nextPage = currentPage + 1;
    if (nextPage >= 3) {
        nextPage = 3;
    }

    return nextPage;
}

function getPreviousPage() {
    let previousPage = currentPage - 1;
    if (previousPage <= 1) {
        previousPage = 1;
    }

    return previousPage;
}

function updateNavigation() {
    if (currentPage === 1) {
        aLeft.css({'visibility': 'hidden'});
    } else {
        aLeft.css({'visibility': 'visible'});
    }

    if (currentPage === 3) {
        aRight.css({'visibility': 'hidden'});
    } else {
        aRight.css({'visibility': 'visible'});
    }
}

function hideAllPages() {
    $(".page").hide();
}

function displayNextPage() {
    hideAllPages();
    $("#dv-" + currentPage).fadeIn(250);

    // page 3 and 4 are displayed together
    if (3 === currentPage) {
        $("#dv-" + (currentPage+1)).show();
    }
}