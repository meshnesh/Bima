$(function () {
    var $toggle = $('#toggleBox')
        , $toggleButton = $('#mainNavigationToggle')
        , $mainNavigation = $('#mainNavigation')
        , $mainNavigationLink = $('#mainNavigation').find('a');

    $toggle.on('click', function () {
        $toggleButton.toggleClass('is-active');
        $mainNavigation.toggleClass('is-active');
    });
    $mainNavigationLink.on('click', function () {
        $toggleButton.removeClass('is-active');
        $mainNavigation.removeClass('is-active');
    });
});