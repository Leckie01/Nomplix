var CmmnCallBack = {
  SCROLLED_CLASS: "scrolled",

  handleWindowScroll: function(event) {
    var scrollY = this.pageYOffset,
      that = event.data,
      $nav = $("nav");

    if (scrollY >= 150) {
      $nav.addClass(that.SCROLLED_CLASS);
    } else {
      $nav.removeClass(that.SCROLLED_CLASS);
    }
  }
};

var CmmnEvent = {
  init: function() {
    $(window).on("scroll", this, this.handleWindowScroll);
  },

  handleVideo: function() {
    var video = document.querySelector(".video");

    video.play();
  }
};

$(function() {
  CmmnEvent.init.call(CmmnCallBack);
  CmmnEvent.handleVideo();
});
