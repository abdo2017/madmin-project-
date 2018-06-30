// hide section
$(".section").hide();

setTimeout(function() {
    jQuery(document).ready(function($) {

        // fadeout preloader
        $(".loader").fadeOut();
        // show sections    
		$(".section").fadeIn();
        // init sidenav
        $(".button-collapse").sideNav();
        // init modals
            $('.modal').modal();
            // init select
                $('select').material_select();


        // hover effect on stats cards
        $(".myCard").hover(function(){
            $(this).addClass('z-depth-3');
        },function(){
            $(this).removeClass('z-depth-3');
        });
        // hover effect  chart
        $(".myChart").hover(function(){
            $(this).addClass('z-depth-3');
        },function(){
            $(this).removeClass('z-depth-3');
        }); 
               // hover effect  comments
        $(".myComment").hover(function(){
            $(this).addClass('z-depth-3');
        },function(){
            $(this).removeClass('z-depth-3');
        });
        

        // approve and deny comments 
$(".approve").click(function(e){
    e.preventDefault();
      Materialize.toast('Comment approved!', 4000);
    $(this).text("approved").addClass('grey-text lighten-3');
    $(this).siblings('.deny').addClass('grey-text lighten-3');
});
$(".deny").click(function(e){
    e.preventDefault();
      Materialize.toast('Comment denied!', 4000) 
    $(this).text("Denied").addClass('grey-text lighten-3')
    $(this).siblings('.approve').addClass('grey-text lighten-3');

});
// quick todos
    $("form#todo-form").submit(function(event) {
            event.preventDefault();

                        const newLi = `        <li class="collection-item">
            <div> ${ $("#todo").val() }
                <a href="#!" class="secondary-content delete">
                    <i class="material-icons">close</i>
                </a>
            </div>
        </li>   `;
        $(newLi).appendTo('ul.todos');
          Materialize.toast('todo added!', 4000) 

        $("input#todo").val("");

});

// activate the close button on the todo
        $("ul.todos").on("click", ".delete", function(e){
            e.preventDefault();
            $(this).parent().parent().remove();
                      Materialize.toast('todo Removed!', 4000) 
        })





        // counter
        $(".count").each(function() {
            $(this).prop("Counter", 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                step: function(now) {
                    $(this).text(Math.ceil(now))
                }
            })
        });
    });
}, 1000);

// ckeditor rules
CKEDITOR.replace( 'body' );













