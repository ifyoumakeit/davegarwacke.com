var current = "top";
"use strict";
$(window).bind("load", function()
{

    $(".skill").each(function(index)
    {
      var barwidth = 100-parseInt($(this).attr("class").split('level-')[1])+"%";
      $(this).find(".thermometer").delay(1000).animate( { marginLeft: barwidth}, 1000);  

    });

    $("h1,h4").slabText();
    $("h1,h4").css("visibility", "visible");

});

$(document).ready(function()
{

    WebFont.load({
    google: {
      families: ['Roboto Slab:700', 'Open Sans']
    }
    });
    
    $("h1,h4").css("visibility", "hidden");
    $("#pink-couch-sessions .rslider li").fitVids();

    $("#contactform").submit(function(e)
    {
        e.preventDefault();
        var name = $("#name").val(),
            email = $("#email").val(),
            text = $("#text").val();
        var dataString = 'name=' + name + '&email=' + email + '&text=' + text;

        function isValidEmail(emailAddress)
        {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        }
        if (isValidEmail(email) && (name.length > 1))
        {
            $.ajax(
            {
                type: "POST",
                url: "contact.php",
                data: dataString,
                success: function()
                {
                    $('.error').hide();
                    $('.success').fadeIn(1000).delay(2000).fadeOut();
                }
            });
        }
        else
        {
            $('.error').fadeIn(1000).delay(5000).fadeOut();
        }
        return false;
    });
    // FILL SCREEN WITH PROJECT
    var pHeight = $(window).height();
    if (pHeight < 500) pHeight = 500;
    $(".project").css("min-height", pHeight);
    //SLIDER  
    $(".rslider").responsiveSlides(
    {
        auto: false,
        // Boolean: Animate automatically, true or false
        speed: 500,
        // Integer: Speed of the transition, in milliseconds
        timeout: 4000,
        // Integer: Time between slide transitions, in milliseconds
        pager: true,
        // Boolean: Show pager, true or false
        nav: true,
        // Boolean: Show navigation, true or false
        random: false,
        // Boolean: Randomize the order of the slides, true or false
        pause: false,
        // Boolean: Pause on hover, true or false
        pauseControls: true,
        // Boolean: Pause when hovering controls, true or false
        prevText: "Previous",
        // String: Text for the "previous" button
        nextText: "Next",
        // String: Text for the "next" button
        maxwidth: "",
        // Integer: Max-width of the slideshow, in pixels
        navContainer: "",
        // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "",
        // Selector: Declare custom pager navigation
        namespace: "rslides"
    });
    //SLIDE TO ID

    function scroller(id)
    {
        if (id == "#prev") id = "#" + $(".project." + current).prev("div.project").attr("id");
        if (id == "#next")
        {
            if (current == "contact") return false;
            id = "#" + $(".project." + current).next("div.project").attr("id");
        }
        if (id == "#top") $('html, body').animate(
        {
            scrollTop: 0
        }, "slow", function()
        {
            window.location.hash = id;
        });
        else $('html, body').animate(
        {
            scrollTop: $(id).offset().top
        }, "slow", function()
        {
            window.location.hash = id;
        });
    }
    $("a.scroller").click(function(e)
    {
        e.preventDefault();
        var a_href = $(this).attr('href');
        scroller(a_href);
        return false;
    });
});
var isvisible = true;
$(window).scroll(function()
{
    var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
    var y_scroll_pos = window.pageYOffset;
    var navtop = $("#navigation").css("top");
    var offset = "-55px";
    if ($('.mobile').is(":visible")) offset = "-108px";
    //BIG TO SMALL
    if (y_scroll_pos > 200 && navtop == offset && !$('#navigation').is(":animated")) $("#navigation").animate(
    {
        top: "0px"
    }, "fast");
    //SMALL TO BIG
    if (y_scroll_pos === 0 && !$('#navigation').is(":animated")) $("#navigation").animate(
    {
        top: offset
    }, "fast");
    var max = 1000;
    //TURN ARROWS ON SCROLL STOP
    $(".project").each(function(index)
    {
        var top = $(this).offset().top;
        var bottom = $(this).offset().top + $(this).height();
        var classname = $(this).attr("class").split(' ')[1];
        var diff = Math.abs(y_scroll_pos - top);
        if (diff < max)
        {
            max = diff;
            current = classname;
        }
        if (classname != "top")
        {
            var h = $("#" + classname + " h2");
            var hx = h.offset().left + h.width() / 2;
            var hy = h.offset().top + h.height() / 2;
            var p = $("#navigation ." + classname + " .symbol");
            var px = p.offset().left + p.width() / 2;
            var py = p.offset().top + p.height() / 2;
            var angle = Math.atan2(hy - py, hx - px) * (180 / Math.PI) + 270;
            if (angle < 270) angle += 360;
            if (angle > 420 && angle < 510) angle = 450;
            else if (angle < 450) angle = 360;
            else angle = 540;
            if (!iOS && classname != "contact")
            {
                
                    p.css({ '-webkit-transform': 'rotate(' + angle + 'deg)',  '-moz-transform': 'rotate(' + angle + 'deg)', 'transform': 'rotate(' + angle + 'deg)',});
            }
            if (current == "contact") $(".contact a").css("color", "#12bea4");
            else $(".contact a").css("color", "#ccc");
        }
    });
});