'use strict';

$(document).ready(function () {
    var url = document.location.toString();
    $(".navbar-nav a").filter(function () {
        return url.indexOf(this.href) !== -1;
    }).addClass("Current");
});