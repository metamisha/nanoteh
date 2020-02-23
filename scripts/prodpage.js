var active = 0;

$(document).ready(function() {
loadProductPage();

});
function loadProductPage() {
    var arrt = localStorage.getItem('art');


    var out = '';
    $.getJSON("products.json", function (data) {
        var url =  data[arrt]['image'+active+''];


    out += '<div class="name-holder" style="" >' +
        '<a href="../productpage.html"><h1 style="text-align: center; color: white; padding-top: 30px; vertical-align: center; display: table-cell">' + data[arrt]['description'] + '</h1></a>' +
        '</div>' +

        '</div>' +
        '<div class="row no-gutters" style="; margin-top: 20px; border-top: 2px solid whitesmoke">' +
        '<div class="col-md-12 col-sm-12 col-lg-5 photoholder" style="text-align: center; border-right: 2px solid whitesmoke">' +
        '<img src="' + url + '" class="card-img " alt="..." style="height: 300px; width: 450px; object-fit: contain">' +
        '</div>' +
        '<div class="col-md-12 col-sm-12 col-lg-7">' +
        '<div class="card-body">' +

        '<h3 class="card-title text-left">' + data[arrt]['name'] + '</h3>' +


        '<button class="btn btn-outline-dark number">Позвонить</button>' +
        '<a href="tg://resolve?domain=nano_tech_support"><button data-toggle="modal" data-target="#exampleModal" class="btn btn-info" style="margin: 5px;border:1px solid #5a6268 "><i class="fab fa-telegram-plane"></i></button></a>' +
        '<a href="mailto:nanoteh8570@gmail.com"><button data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-danger number"><i class="fas fa-envelope"></i></button></a>' +
        '<a href="viber://chat?number=+380637987841"><button data-toggle="modal" data-target="#exampleModal" class="btn btn-light viberButton"  style="margin: 5px;border:1px solid #5a6268; background-color:#665CAC; "><i class="fab fa-viber"></i></button></a>' +

        '<div class="phonenumber" style="display: none">' +
        '<h2><a href="tel:+063-798-7841" style="text-align: center; font-size: 20px">+063-798-7841</a></h2>' +
        '</div>' +
        '</div>' +
        '<hr>';


    out +=
        '<div style="margin-left: 0.375rem">';
    if (data[arrt]['image1'] !== undefined)
        out += '<button class="btn btn-light first"  style="width: 100px;height: 100px; border: 1px solid #5a6268; margin-top: 5px; margin-right: 5px"><img src="' + data[arrt]['image1'] + '" style="width: 50px;height: 80px;object-fit: contain" alt=""></button>';
    if (data[arrt]['image2'] !== undefined)
        out += '<button class="btn btn-light second" style="width: 100px;height: 100px; border: 1px solid #5a6268; margin-top: 5px; margin-right: 5px"><img src="' + data[arrt]['image2'] + '" style="width: 50px; height: 80px;object-fit: contain" alt=""></button>';
    if (data[arrt]['image3'] !== undefined)
        out += '<button class="btn btn-light third"  style="width: 100px;height: 100px; border: 1px solid #5a6268;  margin-top: 5px; margin-right: 5px"><img src="' + data[arrt]['image3'] + '" style="width: 50px;height: 80px;object-fit: contain " alt=""></button>';
    if (data[arrt]['image4'] !== undefined)
        out += '<button class="btn btn-light fourth" style="width: 100px;height: 100px; border: 1px solid #5a6268;  margin-top: 5px; margin-right: 5px"><img src="' + data[arrt]['image4'] + '" style="width: 50px; height: 80px;object-fit: contain" alt=""></button>';
    if (data[arrt]['image5'] !== undefined)
        out += '<button class="btn btn-light fifth"  style="width: 100px;height: 100px; border: 1px solid #5a6268;  margin-top: 5px; margin-right: 5px"><img src="' + data[arrt]['image5'] + '" style="width: 50px;height: 80px;object-fit: contain" alt=""></button>';
    if (data[arrt]['image6'] !== undefined)
        out += '<button class="btn btn-light sixth"  style="width: 100px;height: 100px; border: 1px solid #5a6268;  margin-top: 5px; margin-right: 5px"><img src="' + data[arrt]['image6'] + '" style="width: 50px; height: 80px;object-fit: contain" alt=""></button>';
    if (data[arrt]['image0'] !== undefined)
        out += '<button class="btn btn-light zero"   style="width: 100px;height: 100px; border: 1px solid #5a6268;  margin-top: 5px; margin-right: 5px"><img src="' + data[arrt]['image0'] + '" style="width: 50px; height: 80px;object-fit: contain" alt=""></button>' +
            '</div>' +
            '<hr>';
    out += '<h6 class="text-sm-left" style="margin-left: 0.375rem">Не нашли желанного дизайна? Не проблема! Позвоните нам, мы обязательно реализуем то, что вы желаете!</h6><hr>';
    out += '<span class=" text-sm-left" style="margin-left: 0.375rem">' + data[arrt]['fullDescription'] + '</span></h4></div>';


    out += '</div><hr>' +
        '</div>' +
        '</div>' +

        '</div>';

        $('.check').html(out);
        $('.number').on('click', function () {
            $('.phonenumber').fadeIn();

        });
        $('.zero').on('click', function () {
            active = 0;
            loadProductPage();
            $('.zero').css("background-color","#5a6268");
        });
        $('.first').on('click', function () {
            active = 1;
            loadProductPage();

        });
        $('.second').on('click', function () {
            active = 2;
            loadProductPage();
        });
        $('.third').on('click', function () {
            active = 3;
            loadProductPage();
        });
        $('.fourth').on('click', function () {
            active = 4;
            loadProductPage();
        });
        $('.fifth').on('click', function () {
            active = 5;
            loadProductPage();

        });
        $('.sixth').on('click', function () {
            active = 6;
           loadProductPage();
        });

    });
}




