$(document).ready(function () {
  $('.venobox').venobox();
  const media = matchMedia('(min-width:576px)');
  const media_2 = matchMedia(('(max-width:992px)'));
  var check = new Boolean("");
  // media.addEventListener("change", () => {
  //   if (media.matches ) {
  //     $('.ver-line').removeClass('d-inline-block');
  //     $('.ver-line').addClass('d-none');

  //     $(".vertical-line").parent('.row').addClass('vertical-line-js');
  //     $(".vertical-line").addClass('d-flex justify-content-between align-items-center');
  //     alert("hrllo");
  //   } else {
  //     $('.ver-line').addClass('d-inline-block');
  //     $('.ver-line').removeClass('d-none');
  //     $(".vertical-line").parent('.row').removeClass('vertical-line-js');
  //     $(".vertical-line").removeClass('d-flex unset-vr justify-content-between align-items-center');
  //   }
  // });

  window.addEventListener('resize', () => {
    if (media.matches) {
      addClasses();
    } else {
      removeClasses();
    }
  });

  window.addEventListener('resize', () => {
    if (media_2.matches) {
      addClasses();
    } else {
      removeClasses();
    }
  });

  if (check == false) {
    if (media.matches && media_2.matches) {
      alert("CheckedIn");
      addClasses();
    }
  }


  function addClasses() {
    $('.ver-line').removeClass('d-inline-block');
    $('.ver-line').addClass('d-none');
    $(".vertical-line").parent('.row').addClass('vertical-line-js');
    $(".vertical-line").addClass('d-flex justify-content-between align-items-center');
    check = true;
  }

  function removeClasses() {
    $('.ver-line').addClass('d-inline-block');
    $('.ver-line').removeClass('d-none');
    $(".vertical-line").parent('.row').removeClass('vertical-line-js');
    $(".vertical-line").removeClass('d-flex unset-vr justify-content-between align-items-center');

  }



  // media_2.addEventListener("change", () => {
  //     if (media_2.matches) {

  //       $('.ver-line').removeClass('d-inline-block');
  //       $('.ver-line').addClass('d-none');
  //       $(".vertical-line").parent('.row').addClass('vertical-line-js');
  //       $(".vertical-line").addClass('d-flex unset-vr justify-content-between align-items-center');
  //       alert("ksjnsdjfnskdjfn");

  //     } else {
  //       $('.ver-line').addClass('d-inline-block');
  //       $('.ver-line').removeClass('d-none');
  //       $(".vertical-line").parent('.row').removeClass('vertical-line-js');
  //       $(".vertical-line").removeClass('unset-vr d-flex justify-content-between align-items-center');

  //     }
  //   }

  // );



});

AOS.init();

$("#firstlink").venobox().trigger('click');

$(window).on('load', function () {
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item'
  });

  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $('.venobox').venobox({
      'share': false
    });
  });
});

// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() < 100) {

//       // $('header').removeClass('fixed-top');
//       $('header').removeClass('shadow-lg');
//       $('header').removeClass('custom-header');

//     } else {

//       // $('header').addClass('fixed-top');
//       $('header').addClass('shadow-lg');
//       $('header').addClass('custom-header');

//     }

//   })
// });
$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    // $('#header').addClass('custom-header');
    $('#header').addClass('header-box');
    $('.header-box:hover::after').addClass('w-100');
    $('.header-animation').addClass('animated-navbar');
    // $('#header').addClass('shadow-lg');

  } else {
    // $('#header').removeClass('custom-header');
    $('#header').removeClass('header-box');
    $('#header').addClass('w-100');
    $('.header-animation').addClass('addtranstion');
    $('.header-animation').removeClass('animated-navbar');
    // $('#header').removeClass('shadow-lg');

  }
});

if ($(window).scrollTop() > 80) {
  $('.header-animation').addClass('animated-navbar');
  $('#header').addClass('header-box');
}


// htmltopdf

function Export2Doc(element, filename = '') {
  var html = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  var footer = "</body></html>";
  var html = html + document.getElementById(element).innerHTML + footer;


  //link url
  var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

  //file name
  filename = filename ? filename + '.doc' : 'document.doc';

  // Creates the  download link element dynamically
  var downloadLink = document.createElement("a");

  document.body.appendChild(downloadLink);

  //Link to the file
  downloadLink.href = url;

  //Setting up file name
  downloadLink.download = filename;

  //triggering the function
  downloadLink.click();
  //Remove the a tag after donwload starts.
  document.body.removeChild(downloadLink);
}



// function removeAllChildNodes(parent) {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   }
// }

// document.getElementsByClassName('ver-line').style.display = 'none';


// var c = document.getElementById("vertical-line").childNodes;
// console.log(c);


// for (let checkbox of get) {
//   alert(get.element);
// }

// $('#vertical-line').addClass('vertical-line-js');

// $('#vertical-line').addClass('vertical-line-js');




// console.log(get);

// var take_inhtml = Array.prototype.reduce.call(get, function (html, get) {
//   return html + (get.outerHTML || get.nodeValue);
// }, "");

// document.getElementById("dyn-row").append(get[0]);
// document.getElementById("dyn-row").append(get[1]);
// document.getElementById("dyn-row").append(get[2]);
// document.getElementById("dyn-row").append(get[3]);
// document.getElementById("dyn-row").append(get[4]);


// document.getElementById('vertical-line').append(get[0]);
// document.getElementById('vertical-line').append(get[1]);
// document.getElementById('vertical-line').append(get[2]);
// document.getElementById('vertical-line').append(get[3]);
// document.getElementById('vertical-line').append(get[4]);


// var get = document.querySelectorAll("div.vertical-line > span");
// console.log(get);

// var take_inhtml = Array.prototype.reduce.call(get, function (html, get) {
//   return html + (get.outerHTML || get.nodeValue);
// }, "");

// document.getElementById("dyn-row").append(get[0]);
// document.getElementById("dyn-row").append(get[1]);
// document.getElementById("dyn-row").append(get[2]);
// document.getElementById("dyn-row").append(get[3]);
// document.getElementById("dyn-row").append(get[4]);
// var gfc = document.getElementsByClassName('ver-line')
// gfc.style.setProperty('display', none , 'important');
// $('.ver-line').css("display", "none");
// $('#dyn-row').addClass('vertical-dyn-row');




function getCtnCreadentials() {
  var useremail = $("#useremail").val(); //useremail
  var recepname = $("#recipient-name").val(); // recep Name
  var username = $("#username").val(); // Username
  var message = $("#message-text").val(); // message
  var subject = $("#subject").val();
  var messageInfo = 'Name: ' + username + '<br>Email: ' + useremail + '<br>username: ' + username + '<br>Message: ' + message;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "technicaldemonstrations@gmail.com",
    Password: "wordpress12",
    To: 'technicaldemonstrations@gmail.com',
    From: useremail,
    Subject: subject,
    Body: messageInfo
  }).then(
    message => {
      //console.log (message);
      if (message == 'OK') {
        alert('Your mail has been send. Thank you for connecting.');
      } else {
        console.error(message);
        alert('There is error at sending message. ')

      }

    }
  );



}


jQuery(document).ready(function ($) {
  // Your code in here
  jQuery(".wp-image-3867").addClass("img-responsive");
  jQuery(".wp-image-3870").addClass("img-responsive");
  jQuery(".wp-image-2878").addClass("img-responsive");
  jQuery(".wp-image-3453").addClass("img-responsive");

  jQuery(".wp-image-3503").addClass("img-responsive");


  jQuery(".wp-image-3058").addClass("img-responsive");
  jQuery(".wp-image-3059").addClass("img-responsive");
  jQuery(".wp-image-3060").addClass("img-responsive");
  jQuery(".wp-image-3061").addClass("img-responsive");

  jQuery(".wp-image-3062").addClass("img-responsive");
  jQuery(".wp-image-3064").addClass("img-responsive");
  jQuery(".wp-image-3065").addClass("img-responsive");
  jQuery(".wp-image-3066").addClass("img-responsive");
  jQuery(".wp-image-3067").addClass("img-responsive");
  jQuery(".wp-image-3068").addClass("img-responsive");
  jQuery(".wp-image-3069").addClass("img-responsive");

  jQuery(".wp-image-3070").addClass("img-responsive");
  jQuery(".wp-image-3071").addClass("img-responsive");
  jQuery(".wp-image-3072").addClass("img-responsive");

  jQuery(".wp-image-3430").addClass("img-responsive");
  jQuery(".wp-image-3431").addClass("img-responsive");

  jQuery(".wp-image-3036").addClass("img-responsive");

  jQuery(".wp-image-3804").addClass("img-prominent");














});