/* TODO: Save the last targetted article in each of the seperate sections and target all of those*/
/* TODO: Check the current target, if there is a target, give the a with href="#that_target" a highlight */
/* TODO: Wait with showing page untill all images have been loaded? */

$(document).ready(function() {                           
    add_highlight();
    remove_hidden();
});

function add_highlight() {                              /* Highlight the link to the article that is targetted */
    id = $(location).attr('hash');                      /* Get the hashtag */
    $("a[href='" + id + "']").addClass("highlight");    /* Highlight the <a> with that destination */
}

function remove_hidden() {                              /* Remove the class 'hidden', to display the elements that require JavaScript */
    $(".hidden").removeClass("hidden");

}


$(document).on("click","a", function () {       /* Give the last clicked link a highlight */
    if ( $(this).parents("nav").length == 1 ) { /* If the link clicked is inside a <nav> element */
        $("a").removeClass("highlight");        /* Remove highlight from all other <a>'s */
        $(this).addClass("highlight");          /* Add a highlight to the clicked link */
        $(this).addClass("visited");            /* Make the current link visited as well */
     }     
 });

function next_article(){
    var vp_height = $(window).height();
    console.log("vp_height: ", vp_height);
    var scroll_offset = Math.round($(document).scrollTop() + 1);    /* Otherwise numbers behind the comma would appear and % vp_height would never be 0 */
    console.log("scroll_offset + 1: ", scroll_offset);
    var max_scroll_height = $(document).height();
    console.log("max_scroll_height: ", max_scroll_height);
    var i = 0;
    while (i + scroll_offset < max_scroll_height) {                 /* As long as there is still the option to scroll further, check for a new article */
        if ((i + scroll_offset) % vp_height == 0)
        {
            window.scrollTo(0, scroll_offset + i);                  /* If there is still an article to scroll to, we'll end up here */
            return false;
        }
        i++;
    }

    window.scrollTo(0, scroll_offset - 100);                        /* Bounce when we have reached the bottom */
    setTimeout(function(){
        window.scrollTo(0, scroll_offset);
    }, 150);

}