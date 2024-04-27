$('.menu-toggle input').on('click', function() {
    $('nav ul').toggleClass('slider');
  });
  
  $(document).ready(function() {
    var strings = ["Search for", "<span class='text-black'>Search for</span> <span class='text-[#E82B2B]'>NFT here </span>"];
    var typing = new Typed(".typing", {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      cursorChar: '<span style="color: white;">|</span>'
    });
  });
