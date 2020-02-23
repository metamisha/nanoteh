var out = '';
$(document).ready(function () {
    $('.card-promotion').fadeIn();
    $('#vishnu-button').hide();
    $('#button_promote').fadeIn('fast', 'swing');
    loadGoods();
    loadBizGoods();
    $(window).scroll(function () {
        $('.prod-card').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 200;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            $('#vishnu-button').fadeIn();
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({'opacity': '1'}, 500);

            }
        });
    });
});



function loadGoods() {
$.getJSON('products.json', function (data) {
var out = '';
for (var key in data) {
out += '<div class="product-wrap  col-sm-12 col-md-6 col-lg-4  d-flex align-items-stretch prod-card">' +
'<div class="product">' +
'<div class="card h-100 bg-white"  style="border: 1px solid #5a6268; border-radius: 0">' +
    '<div class="card-body">' +
                '<img class="card-img-top" src="' + data[key]['image0'] + '"  alt="Card image cap" style="height: 180px; width: 180px" >' +
                '<div class="name" id="name"><h5 class="text-header" style="font-weight: bold"> ' + data[key]['name'] + '</h5></div>' +
                '<div class="descr" ><h6 style="word-spacing: -5px; font-size: 15px">' + data[key]['description'] + '</h6></div></div>' +
                '<div class="price">';
            out += '</div> <div class="card-footer" style="border-top: 1px solid #5a6268">';
            out +=
                '<a  href="" style="text-decoration: none"><button  type="button" class="btn btn-outline-dark btn-sm details"  style="border-radius: 0" data-art="' + key + '" > ' +
                ' Подробнее ' +
                '</button></a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
        }

        $('.card-fiz').html(out);
        $('.details').on('click', setLocalStorage);
    });
}


function setLocalStorage() {
    var art = $(this).attr('data-art');
    localStorage.setItem('art', art);
    console.log(art);
}
function loadBizGoods() {
    $.getJSON('bussines.json', function (data2) {
        var outB = '';
        for (var key2 in data2) {
           outB+='<div class=" row no-gutters d-flex flex-wrap align-items-center card-biz-prod" ' +
               '<div class="card-body col-12" style=" border: 1px solid #5a6268; margin-top: 5px; height: 400px; width: 100%">' +
               '<div class="card col-6  card-img-overlay d-flex align-items-center card-image-biz"  >' +
               '<img  class="card-img " src="'+data2[key2]['image0']+'" alt="" >' +
               '</div>' +
               '' +
               '<div class="card col-6 card-biz-body" >' +
               ' <h4 class="card-title">'+data2[key2]['name']+'</h4>' +
               ' <p class="card-text">'+data2[key2]['description']+'</p>' +
               '<p class="card-text">Позвоните, или напишите нам, чтобы обсудить детали.</p>'+
               '<div style="display: flex"> <a class="btn btn-outline-dark showNum" href="tel:063-798-7841"  style="border-radius: 0; width: 70%"> Позвонить </a>' +
               '<a href="tg://resolve?domain=nanotehsupport"><button class="btn btn-info" data-toggle="modal" data-target="#exampleModal"><i class="fab fa-telegram-plane"></i></button></a>' +
               '<a href="mailto:nanoteh8570@gmail.com"><button class="btn btn-outline-danger number" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-envelope"></i></button></a>' +
               '<a href="viber://chat?number=+380637987841"><button class="btn btn-light viberButton" data-toggle="modal" data-target="#exampleModal" style=" background-color:#665CAC;border-radius: 0; border: 1px solid #6f42c1"><i class="fab fa-viber"></i></button></a> ' +
               '</div>' +
               '<h3 style="margin-left: 5px"><a href="tel:063-798-7841" style="text-align: center; font-size: 20px">063-798-7841</a></h3>' +
               '     </div>' +
               '</div>';
        }
        console.log(outB);
        $('.card-biz').html(outB);
        $('.details').on('click', setLocalStorage);
    });

}