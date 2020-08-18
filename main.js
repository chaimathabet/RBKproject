 console.log('test')

 $(document).ready(function() {
            // bind our function to the tabs
            $('#tabs-nav ul li a').click(function(e) {
                // remove the active state from all links
                $('#tabs-nav ul li a').removeClass("active");
                // add the active state to the clicked link
                $(this).addClass("active");
                // fade out the current container
                $('.profile').fadeOut(600, function() {
                    // fade in the clicked container
                    $('#' + profileID).fadeIn(600);
                });
                // define our current profile variable
                var profileID = $(this).attr("data-id");
            });
        });