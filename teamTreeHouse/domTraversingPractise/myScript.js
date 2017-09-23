$(function() {

// select all the li elements within the tab-panels, create an event listener for click
    $('.tab-panels .tabs li').on('click', function() {

//$panel becomes the target's, which had been clicked on, within the closest tab panel
//(ie, could be more than one available)
        var $panel = $(this).closest('.tab-panels');

//find the active li within the tab ul element and remove the class active
//then add the class active to the target which had been clicked on.
        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        // Finds the rel value of the target and assigns to panelTowShow
        var panelToShow = $(this).attr('rel');

        //hide current panel. Finds (within closest tab) matches of panel and active class
        // and then slides up and calls the showNextPanel function.
        $panel.find('.panel.active').slideUp(300, showNextPanel);

        //show next panel.
        //calls the function, which removes active class from the target
        function showNextPanel() {
            $(this).removeClass('active');

//then attaches a # to the rel value stored in panelToShow, slides it down, calls an anon function
//which adds the active class to target.
            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });
        }
    });


});
