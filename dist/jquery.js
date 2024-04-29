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

  $(".info-content2").hide(); // Sembunyikan semua info-content saat halaman dimuat
  $(".info-content3").hide(); // Sembunyikan semua info-content saat halaman dimuat
  $(".info-content5").hide(); // Sembunyikan semua info-content saat halaman dimuat

  $(document).ready(function() {
    $(".info-tittle").click(function() {
      $(".info-content").slideToggle();
    })
  });

  $(document).ready(function() {
    $(".info-tittle2").click(function() {
      $(".info-content2").slideToggle();
    })
  });

  $(document).ready(function() {
    $(".info-tittle3").click(function() {
      $(".info-content3").slideToggle();
    })
  });
  $(document).ready(function() {
    $(".info-tittle4").click(function() {
      $(".info-content4").slideToggle();
    })
  });
  $(document).ready(function() {
    $(".info-tittle5").click(function() {
      $(".info-content5").slideToggle();
    })
  });
  $(document).ready(function() {
    $(".info-tittle6").click(function() {
      $(".info-content6").slideToggle();
    })
  });
  $(document).ready(function() {
    $(".info-tittle7").click(function() {
      $(".info-content7").slideToggle();
    })
  });

  Highcharts.chart('chart-container', {
    chart: {
        type: 'column', // Mengatur tipe grafik menjadi bar chart
        backgroundColor: 'rgba(229, 231, 235, 0.2)',
        width: 750, // Lebar grafik
        height: 150 // Tinggi grafik
    },
    title: {
        text: null // Menghapus judul grafik
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar'],
        labels: {
            style: {
                fontSize: '0.8rem', // Ukuran label sumbu X
            }
        }
    }],
    yAxis: [{ // Sumbu Y pertama (kiri)
        title: {
            text: 'Volume (ETH)',
            style: {
                fontSize: '0.8rem' // Ukuran judul sumbu Y pertama
            }
        },
        labels: {
            style: {
                fontSize: '0.8rem' // Ukuran label sumbu Y pertama
            }
        },
        tickPositions: [0, 0.08, 0.16] // Nilai-nilai yang ditampilkan di sumbu Y pertama
    }, { // Sumbu Y kedua (kanan)
        title: {
            text: 'Average price (ETH)',
            style: {
                fontSize: '0.8rem' // Ukuran judul sumbu Y kedua
            }
        },
        labels: {
            style: {
                fontSize: '0.8rem' // Ukuran label sumbu Y kedua
            }
        },
        opposite: true, // Meletakkan sumbu Y di sebelah kanan
        tickPositions: [0.025, 0.075, 0.125], // Nilai-nilai yang ditampilkan di sumbu Y kedua
        gridLineColor: 'gray', // Warna garis antara sumbu Y pertama dan kedua
        gridLineWidth: 1 // Lebar garis antara sumbu Y pertama dan kedua
    }],
    plotOptions: {
        column: {
            pointWidth: 50 // Lebar setiap bar
        }
    },
    series: [{
        name: 'Tokyo',
        data: [0.118, 0.068],
        color: 'black', // Warna grafik bar
        showInLegend: false // Menghapus label seri dari legenda
    }]
});



