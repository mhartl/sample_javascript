// document.addEventListener("DOMContentLoaded", function() {
//   var all_images = document.querySelectorAll('img');
//   for (i = 0; i < all_images.length; i++) {
//     all_images[i].addEventListener('click', function(event) {
//       var image_src     = this.dataset.largeVersion;

//       var main_div  = document.getElementById('gallery-photo');
//       var old_image = document.getElementById('main-gallery-image');
//       if (old_image) {
//         main_div.removeChild(old_image);
//       }

//       var new_image = document.createElement('img');
//       new_image.id  = 'main-gallery-image';
//       new_image.src = image_src;
//       main_div.appendChild(new_image);

//       for (var j = 0; j < all_images.length; j++) {
//         all_images[j].className = "";
//       }
//       this.className = "current";

//       var title = this.parentElement.querySelector('.photo-title');
//       var desc  = this.parentElement.querySelector('.photo-desc');
//       var gallery_info = document.getElementById('gallery-info');
//       gallery_info.querySelector('h3').innerHTML = title.innerHTML;
//       gallery_info.querySelector('p').innerHTML = desc.innerHTML;
//     });
//   }
//   document.querySelector('div.gallery-element > img').click();
// });


$(document).ready(function() {
  $('#gallery-thumbs div.gallery-element').click(function(event) {
    var clicked_image = $(this).find('img');
    var image_src = clicked_image.attr('data-large-version');
    var new_image = $('<img src="' + image_src +'">');
    // var new_image = new Image();
    // new_image.src = $(this).attr('data-large-version');
    new_image.hide();

    $('#gallery-photo img').fadeOut(1000, function() {
      $(this).remove();
    });
    $('#gallery-photo').prepend(new_image);
    new_image.fadeIn(1000);

    $('.current').removeClass('current');
    clicked_image.addClass('current');


    // if (!$(this).hasClass('current')) {
    // }

//     //get reference to old image
//     var oldImage = $('#gallery-photo img');

//     //create HTML for new image
//     var newImage = $('<img src="' + imgPath +'">');
//     //make new image invisible
//     newImage.hide();
//     //add to the #photo div
//     $('#gallery-photo').prepend(newImage);
//     //fade in new image
//     var fade_time = 1000;

    $('#gallery-info h3').html($(this).find('.photo-title').html());
    $('#gallery-info p').html($(this).find('.photo-desc').html());
  }); // end click

  $('#gallery-thumbs img:first').click();
}); // end ready
