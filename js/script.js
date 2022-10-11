// var zoomIntensity = 0.1;
  
// var canvas = document.getElementsByClassName("main_video");
// var context = canvas.getContext("2d");
// var width = 800;
// var height = 500;

// var scale = 1;
// var orgnx = 0;
// var orgny = 0;
// var visibleWidth = width;
// var visibleHeight = height;
    
// // Scroll effect function
// canvas.onwheel = function(event) {
//     event.preventDefault();
//     var x = event.clientX - canvas.offsetLeft;
//     var y = event.clientY - canvas.offsetTop;
//     var scroll = event.deltaY < 0 ? 1 : -2;

//     var zoom = Math.exp(scroll * zoomIntensity);

//     context.translate(orgnx, orgny);

//     orgnx -= x / (scale * zoom) - x / scale;
//     orgny -= y / (scale * zoom) - y / scale;

//     context.scale(zoom, zoom);
//     context.translate(-orgnx, -orgny);

//     // Updating scale and visisble width and height
//     scale *= zoom;
//     visibleWidth = width / scale;
//     visibleHeight = height / scale;
// }


// $ban = $('.main_video')

// var ref = 100;
// var scroll, zoom;

// $(window).scroll(function (event) {
//     scroll = $(window).scrollTop()
//     zoom = ref + scroll/30
//     $ban.css('width', zoom + '%')
// });




$(window).scroll(function(e){
    scroll = $(window).scrollTop();
    console.log(scroll);

    var mv = $('#main_video');
    
    if(scroll < 100){
        $(mv).attr('class','ori');
    }else{
        if(scroll <200){
            $(mv).attr('class','scroll1');
        }else{
            if(scroll <300){
                $(mv).attr('class','scroll2');
            }else{
                if(scroll <400){
                    $(mv).attr('class','scroll3');
                }else{
                    if(scroll <500){
                        $(mv).attr('class','scroll4');
                    }else{
                        if(scroll <600){
                            $(mv).attr('class','scroll5');
                        }else{
                            if(scroll <700){
                                $(mv).attr('class','scroll6');
                            }else{
                                if(scroll <800){
                                    $(mv).attr('class','scroll7');
                                }else{
                                    if(scroll <900){
                                        $(mv).attr('class','scroll8');
                                    }else{
                                        if(scroll <1000){
                                            $(mv).attr('class','scroll9');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:30,
        nav:true,
        autoWidth:true
    })
});
