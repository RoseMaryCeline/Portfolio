$(function(){

//stickymenu
  var stickyNavTop = $('.navigation').offset().top;
  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
        $('.navigation').addClass('sticky');
    } else {
        $('.navigation').removeClass('sticky');
    }
    };
  stickyNav();

  $(window).scroll(function() {
      stickyNav();
  });


//slider
  var slider = $(".slider");
  var nextButton = $("#nextPicture");
  var prevButton = $("#prevPicture");
  var ulHandler = $('.slider').find("ul");
  var list=$(".slider ul").find("li");
  var pictureIndex = 1;
  var clonedFirst = list.first().clone();
  var clonedLast = list.last().clone();
  clonedFirst.appendTo(ulHandler);
  clonedLast.prependTo(ulHandler);

  list = $(".slider ul").find("li");
  var pictureWidth = list.first().width();
  ulHandler.css("left", "-="+pictureWidth);
  ulHandler.width(list.length* pictureWidth);
  slider.width(pictureWidth);

  nextButton.on("click", function() {
    pictureIndex++;
      if(pictureIndex == (list.length - 1)) {
        ulHandler.animate({
          left: "-=" + pictureWidth
        }, {
        complete: function() {
          $(this).css("left", -pictureWidth);
        }
        });
        pictureIndex=1;
      }
      else{
        ulHandler.animate({
          left:  "-=" + pictureWidth
        });
      }
  });

  prevButton.on("click", function() {
    pictureIndex--;
    var szer= -((list.length-2)* pictureWidth);
      if (pictureIndex === 0) {
        ulHandler.animate({
           left: "+=" + pictureWidth
        }, {
        complete: function() {
          $(this).css("left", szer);
        }
        });
        pictureIndex=list.length-2;
        }
      else{
        ulHandler.animate({
          left:  "+=" + pictureWidth
        });
        }
   });

  //clickable areas that enables to move to pointed section
  var about_Me=$(".aboutMe");
  var portfolio_My=$(".portfolio");
  var contact_Me=$(".contact");


  //areas to be sent to
  var toAbout=$(".aboutMeInfo");
  var toPortfolio=$(".portfolioSection");
  var toContact=$(".contactSection");

  var page=$($('html, body'));

  about_Me.on("click", function(event){
    page.animate({
      scrollTop:toAbout.offset().top
    }, 3000);

  });
  portfolio_My.on("click", function(event){
      page.animate({
        scrollTop:toPortfolio.offset().top
      }, 3000);
  });
  contact_Me.on("click", function(event){
      page.animate({
        scrollTop:toContact.offset().top
      }, 3000);
  });

});
