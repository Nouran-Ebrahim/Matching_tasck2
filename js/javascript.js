/****************start loading page***********************/
$("document").ready(function () {

    $(".loader-cover").fadeOut(1000)

});
/****************end loading page***********************/


/***************start scale functionality***************/

window.addEventListener("resize", function (event) {
    var browserWidth = window.innerWidth;
    var browserHieght = window.innerHeight;
    var matcherDiv = document.querySelector(".matcher");
    var scale = browserWidth / 600; // Calculate the scale factor
    // var scaley = browserHieght/ 700; // Calculate the scale factor
    if (browserWidth <= 600) {
      matcherDiv.style.transform = "scale(" + scale + ")";
    //   matcherDiv.style.transform = "scale(" + scaley + ")";
    } else {
      matcherDiv.style.transform = "none";
    //   matcherDiv.style.transform = "none";
    }
  });

/***************end scale functionality***************/

/***************start show dummy and help buttom functionality***************/
$('#show-dummy-btn').click(() => {
    $('.dummy-img').css('display', 'block')
    $('.outer').addClass("img-opacity")
})

$('#close-btn').click(() => {
    $('.dummy-img').css('display', 'none')
    $('.outer').removeClass("img-opacity")
})
$('#close-btn2').click(() => {
    $('.help').css('display', 'none')
    $('.outer').removeClass("img-opacity")
})
$('#help-btn').click(() => {
    $('.outer').addClass("img-opacity")
    $('.help').css('display', 'block')
})
/***************end show dummy and help buttom functionality***************/

/***************start questions functionality***************/
var temp = ""

$('.q').click(function () {

    temp = this.dataset.id
    console.log(temp);
    $(this).find(".radio-circle").toggleClass("blue-radio");
    $(".ans").addClass("clicked")
    $(".ans").removeClass("unclicked")

})
/***************end questions functionality***************/


/***************start answers functionality***************/

$('.ans').click(function () {
    console.log("q id", temp)
    $(".ans").addClass("unclicked")
    $(".ans").removeClass("clicked")
    console.log(this.dataset.ansId);
    if (temp === this.dataset.ansId) {
        var questions = $('.q')
        for (let quest of questions) {
            var data1 = $(quest).attr("data-id")

            if (temp === data1) {
                console.log("good")
                $(quest).addClass("img-opacity")
                $(quest).addClass("unclicked")
                $(quest).find(".radio-circle").addClass("white-radio")
                if (data1 == 1) {

                    $('#line1').css("display","inline")
                }
                if (data1 == 2) {
                    $('#line2').css("display","inline")
                }
                if (data1 == 3) {
                    $('#line3').css("display","inline")

                }
                if (data1 == 4) {
                    $('#line4').css("display","inline")

                }

            }

        }
        $(this).addClass("img-opacity")
        let myAudio = document.querySelector('#audio')
        myAudio.play()
        console.log("good boy")
        $(this).find(".wrong-icon").css("visibility","hidden")
       
        temp = ""
    }
    else {
        console.log("bad")
        let myAudio2 = document.querySelector('#audio-wrong')
        myAudio2.play()
        $(this).find(".wrong-icon").css("visibility","visible").animate({ opacity: "0" }, 1000)
        $(".ans").addClass("clicked")
        $(".ans").removeClass("unclicked")
        // $(this).find(".radio-circle").addClass("white-radio");
        // $(this).find(".radio-circle").removeClass("blue-radio");
        // temp = ""
    }

})
/***************end answers functionality***************/


/***************start rset and show buttom animation ***************/
$('.reset').click(function () {
    temp = ""
    $(".radio-circle").removeClass("blue-radio")
    $(".radio-circle").removeClass("white-radio")
    $(".wrong-icon").removeClass("active")
    $(".ans").removeClass("img-opacity")
    $(".q").removeClass("img-opacity")

    $(".q").addClass("clicked")
    $('#line1').css("display","none")
    $('#line2').css("display","none")
    $('#line3').css("display","none")
    $('#line4').css("display","none")
    $('.show').removeClass("img-opacity")
})

$('.show').click(function () {


    $(".q").addClass("img-opacity")
    $(".ans").addClass("img-opacity")
    $(".q").addClass("unclicked")
    $(".ans").find(".radio-circle").removeClass("blue-radio")
    $(".q").find(".radio-circle").removeClass("blue-radio")
    $(".ans").find(".radio-circle").addClass("white-radio")
    $(".q").find(".radio-circle").addClass("white-radio")
    $(".answers").find(".wrong-icon").removeClass("active")
    $('.show').addClass("img-opacity")
    $('#line1').css("display","inline")
    $('#line2').css("display","inline")
    $('#line3').css("display","inline")
    $('#line4').css("display","inline")
})
/***************end rset and show buttom animation ***************/