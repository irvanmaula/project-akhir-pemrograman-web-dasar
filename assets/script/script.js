// menu
const tombolMenu = $('.tombol-menu');
const menu = $('nav .menu ul');

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}
$(document).ready(function () {
  const width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

// cek lebar
$(window).resize(function () {
  const width = $(window).width();
  if (width > 989) {
    menu.css('display', 'block');
  } else {
    menu.css('display', 'none');
  }
  klikMenu();
});

// efek scroll
$(document).ready(function () {
  let scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $('nav').addClass('putih');
    } else {
      $('nav').removeClass('putih');
    }
  });
});
