$(document).ready(function () {
  $('.venobox').venobox();
  // $('#vertical-line  > span').map(function() {
  //   // console.log(this.id);
  //   alert("Finded Hurrrah");
  // });
});
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


const media = matchMedia("(min-width:768px)");
const media_2 = matchMedia(('(max-width:992px)'));

media.addEventListener("change", () => {
  if (media.matches) {

    var get = document.querySelectorAll("div.vertical-line > span");
    console.log(get);

    var take_inhtml = Array.prototype.reduce.call(get, function (html, get) {
      return html + (get.outerHTML || get.nodeValue);
    }, "");

    document.getElementById("dyn-row").append(get[0]);
    document.getElementById("dyn-row").append(get[1]);
    document.getElementById("dyn-row").append(get[2]);
    document.getElementById("dyn-row").append(get[3]);
    document.getElementById("dyn-row").append(get[4]);


  } else {

    var node = document.getElementById("dyn-row");
    node.innerHTML= '';
  }

});

media_2.addEventListener("change", () => {
  if (media_2.matches) {
    var get = document.querySelectorAll("div.vertical-line > span");
    console.log(get);

    var take_inhtml = Array.prototype.reduce.call(get, function (html, get) {
      return html + (get.outerHTML || get.nodeValue);
    }, "");

    document.getElementById("dyn-row").append(get[0]);
    document.getElementById("dyn-row").append(get[1]);
    document.getElementById("dyn-row").append(get[2]);
    document.getElementById("dyn-row").append(get[3]);
    document.getElementById("dyn-row").append(get[4]);

  } else {
    var node = document.getElementById("dyn-row");
    node.innerHTML= '';
  }

});


// var c = document.getElementById("vertical-line").childNodes;
// console.log(c);




// for (let checkbox of get) {
//   alert(get.element);
// }