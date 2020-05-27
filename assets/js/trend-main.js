/** Page Jquery */

/** Sticky Menu */
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 10) {
    $(".navbar").addClass("active");
    $("#harman-logo").addClass("pagescroll-logo-size");
  } else {
    $(".navbar").removeClass("active");
    $("#harman-logo").removeClass("pagescroll-logo-size");
  }

  if ($("body").hasClass("harman-trendpage")) {
    $(".navbar").removeClass("active");
    $("#harman-logo").removeClass("pagescroll-logo-size");
  }
  return false;
});

$(".navbar-toggler").click(function () {
  if ($(this).hasClass("collapsed")) {
    $(".navbar").addClass("navbar-bgcolor");
  } else {
    $(".navbar").removeClass("navbar-bgcolor");
  }
})

// HCS CLICK DOWN ARROW START
$("#hcs-connected-lifestyle").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#connected-lifestyle").offset().top + 110,
    },
    2000,
  );
  return false;
});
// HCS CLICK DOWN ARROW END



// CC BOX1 CLICK DOWN ARROW START
$("#gao-glblol-bx1").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#glbloutlook-section1").offset().top + 5,
    },
    2000,
  );
  return false;
});
// CC BOX1 CLICK DOWN ARROW END


// CC BOX2 CLICK DOWN ARROW START
$("#gao-glblol-bx2").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#glbloutlook-section2").offset().top + 5,
    },
    2000,
  );
  return false;
});
// CC BOX2 CLICK DOWN ARROW END


// CC BOX3 CLICK DOWN ARROW START
$("#gao-glblol-bx3").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#glbloutlook-section3").offset().top + 5,
    },
    2000,
  );
  return false;
});
// CC BOX3 CLICK DOWN ARROW END


// CC BOX4 CLICK DOWN ARROW START
$("#gao-glblol-bx4").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#glbloutlook-section4").offset().top + 5,
    },
    2000,
  );
  return false;
});
// CC BOX4 CLICK DOWN ARROW END



// LS BOX1 CLICK DOWN ARROW START
$("#ls-mt-bx1").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#consumer-pttrns").offset().top + 110,
    },
    2000,
  );
  return false;
});
// LS BOX1 CLICK DOWN ARROW END

// LS BOX2 CLICK DOWN ARROW START
$("#ls-mt-bx2").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#emerging-tech").offset().top + 110,
    },
    2000,
  );
  return false;
});
// LS BOX2 CLICK DOWN ARROW END


// LS BOX3 CLICK DOWN ARROW START
$("#ls-mt-bx3").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#multisensory-exp").offset().top + 110,
    },
    2000,
  );
  return false;
});
// LS BOX3 CLICK DOWN ARROW END


// LS BOX4 CLICK DOWN ARROW START
$("#ls-mt-bx4").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#gaming-esports").offset().top + 110,
    },
    2000,
  );
  return false;
});
// LS BOX4 CLICK DOWN ARROW END


// LS BOX5 CLICK DOWN ARROW START
$("#ls-mt-bx5").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#human-augmentation").offset().top + 110,
    },
    2000,
  );
  return false;
});
// LS BOX5 CLICK DOWN ARROW END


// CS BOX1 CLICK DOWN ARROW START
$("#cs-mt-bx1").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#connected-lifestyle").offset().top + 110,
    },
    2000,
  );
  return false;
});
// CS BOX1 CLICK DOWN ARROW END

// CS BOX2 CLICK DOWN ARROW START
$("#cs-mt-bx2").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#voiceai").offset().top + 110,
    },
    2000,
  );
  return false;
});
// CS BOX2 CLICK DOWN ARROW END

// CS BOX3 CLICK DOWN ARROW START
$("#cs-mt-bx3").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#edge-cloud-computing").offset().top + 110,
    },
    2000,
  );
  return false;
});
// CS BOX3 CLICK DOWN ARROW END

// CS BOX4 CLICK DOWN ARROW START
$("#cs-mt-bx4").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#data-mngt-security").offset().top + 110,
    },
    2000,
  );
  return false;
});
// CS BOX4 CLICK DOWN ARROW END

// CS BOX5 CLICK DOWN ARROW START
$("#cs-mt-bx5").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#exp-platform").offset().top + 110,
    },
    2000,
  );
  return false;
});
// CS BOX5 CLICK DOWN ARROW END












// LS CLICK DOWN ARROW START
$("#ls-cons-ptrns").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#consumer-pttrns").offset().top + 110,
    },
    2000,
  );
  return false;
});
// LS CLICK DOWN ARROW END


// PS CLICK DOWN ARROW START
$("#vertical-darrow").click(function () {

  $("html, body").animate(
    {
      scrollTop: $("#verticalSection").offset().top + 120,
    },
    2000,
  );
  return false;
});
// PS CLICK DOWN ARROW END


// CC CTAs START

$("#cc-connectivity").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#connectivity-1").offset().top,
    },
    2000,
  );
  return false;
});


$("#cc-autonomous").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#autonomous-1").offset().top,
    },
    2000,
  );
  return false;
});

$("#cc-shared").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#shared-1").offset().top,
    },
    2000,
  );
  return false;
});

$("#cc-electrification").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#electrification-1").offset().top,
    },
    2000,
  );
  return false;
});

$("#new-busi-model").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#business-1").offset().top,
    },
    2000,
  );
  return false;
});






// CC CTAs END


// PRO SOLUTION - END USER
$("#prosol-enduser").click(function (e) {
  // $("#end-user").addClass("show-section");
  // $("#vertical").removeClass("show-section");
  // $("#competitors").removeClass("show-section");
  // $("#channel").removeClass("show-section");
  // $("#product").removeClass("show-section");
  // e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#end-user").offset().top,
    },
    2000,
  );
  return false;
});

// PRO SOLUTION - vertical
$("#prosol-vertical").click(function (e) {
  // $("#end-user").removeClass("show-section");
  // $("#vertical").addClass("show-section");
  // $("#competitors").removeClass("show-section");
  // $("#channel").removeClass("show-section");
  // $("#product").removeClass("show-section");
  // e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#vertical").offset().top,
    },
    2000,
  );
  return false;
});




// PRO SOLUTION - competitors
$("#prosol-competitors").click(function (e) {
  // $("#end-user").removeClass("show-section");
  // $("#vertical").removeClass("show-section");
  // $("#competitors").addClass("show-section");
  // $("#channel").removeClass("show-section");
  // $("#product").removeClass("show-section");
  // e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#competitors").offset().top,
    },
    2000,
  );
  return false;
});


// PRO SOLUTION - channel
$("#prosol-channel").click(function (e) {
  // $("#end-user").removeClass("show-section");
  // $("#vertical").removeClass("show-section");
  // $("#competitors").removeClass("show-section");
  // $("#channel").addClass("show-section");
  // $("#product").removeClass("show-section");
  // e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#channel").offset().top,
    },
    2000,
  );
  return false;
});

// PRO SOLUTION - product
$("#prosol-product").click(function (e) {
  // $("#end-user").removeClass("show-section");
  // $("#vertical").removeClass("show-section");
  // $("#competitors").removeClass("show-section");
  // $("#channel").removeClass("show-section");
  // $("#product").addClass("show-section");
  // e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $("#product").offset().top,
    },
    2000,
  );
  return false;
});


/** Scroll to section */
$("#market").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#marketSection").offset().top,
    },
    2000,
  );
  return false;
});

$("#case, #cchead-case").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#caseSection").offset().top,
    },
    2000,
  );
  return false;
});

$("#global, #cchead-global").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#globalSection").offset().top,
    },
    2000,
  );
  return false;
});

$("#moveToConnectivity, #txt-moveToConnectivity, #sum-moveToConnectivity, #cchead-moveToConnectivity").click(function () {
  // $('#connectivity').show();
  // $('#autonomous').hide();
  // $('#shared').hide();
  // $('#electrification').hide();
  // $('#new-business').hide();
  $("html, body").animate(
    {
      scrollTop: $("#connectivity").offset().top,
    },
    2000,
  );
  return false;
});

$("#moveToAutonomous, #txt-moveToAutonomous, #sum-moveToAutonomous, #cchead-moveToAutonomous").click(function () {
  // $('#connectivity').hide();
  // $('#autonomous').show();
  // $('#shared').hide();
  // $('#electrification').hide();
  // $('#new-business').hide();
  $("html, body").animate(
    {
      scrollTop: $("#openAutonomous").offset().top,
    },
    2000,
  );
  return false;
});

$("#moveToMaas, #txt-moveToMaas,#sum-moveToMaas, #cchead-moveToMaas").click(function () {
  // $('#connectivity').hide();
  // $('#autonomous').hide();
  // $('#shared').show();
  // $('#electrification').hide();
  // $('#new-business').hide();
  $("html, body").animate(
    {
      scrollTop: $("#openMaas").offset().top,
    },
    2000,
  );
  return false;
});

$("#moveToElectrification, #txt-moveToElectrification, #sum-moveToElectrification, #cchead-moveToElectrification").click(function () {
  // $('#connectivity').hide();
  // $('#autonomous').hide();
  // $('#shared').hide();
  // $('#electrification').show();
  // $('#new-business').hide();
  $("html, body").animate(
    {
      scrollTop: $("#openElectrification").offset().top,
    },
    2000,
  );
  return false;
});

$("#moveToNewbm, #sum-moveToNewbm, #cchead-moveToNewbm").click(function () {
  // $('#connectivity').hide();
  // $('#autonomous').hide();
  // $('#shared').hide();
  // $('#electrification').hide();
  // $('#new-business').show();
  $("html, body").animate(
    {
      scrollTop: $("#openNewbm").offset().top,
    },
    2000,
  );
  return false;
});

$("#showDown").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#openOutlook").offset().top,
    },
    2000,
  );
  return false;
});

$("#showCase").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#opencaseSection").offset().top,
    },
    2000,
  );
  return false;
});

$("#covid").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#covidSection").offset().top,
    },
    2000,
  );
  return false;
});

$("#endUser").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#endUserSection").offset().top + 110,
    },
    2000,
  );
  return false;
});

$("#competitorsIn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#competitorSection").offset().top + 120,
    },
    2000,
  );
  return false;
});

$("#verticalIn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#verticalSection").offset().top,
    },
    2000,
  );
  return false;
});

$("#channelIn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#channelSection").offset().top + 125,
    },
    2000,
  );
  return false;
});

$("#productIn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#productSection").offset().top + 120,
    },
    2000,
  );
  return false;
});

/** Scroll to top */
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#scrollTop").fadeIn();
  } else {
    $("#scrollTop").fadeOut();
  }
  return false;
});

$("#scrollTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
  return false;
});

/** Page Parallax */
window.onload = function () {
  lax.setup() // init

  const updateLax = () => {
    lax.update(window.scrollY)
    window.requestAnimationFrame(updateLax)
  }

  window.requestAnimationFrame(updateLax)
}

/** Slide Section */
$("#covidClick").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#openCovideSection").offset().top + 10,
    },
    2000,
  );
  return false;
});


$(window).scroll(function () {
  if ($(this).scrollTop() > 12000) {
    $("#scrollTopCar").fadeIn();
  } else {
    $("#scrollTopCar").fadeOut();
  }
  return false;
});

$("#scrollTopCar").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#marketSection").offset().top,
    },
    2000,
  );
  return false;
});

