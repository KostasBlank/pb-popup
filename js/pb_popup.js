/**
 * Open a popup only once for each user.
 *
 * Use the $.jStorage to store whether the popup has been opened.
 */
(function ($, Drupal, window, document, undefined) {
  $(document).ready(function($) {
    var popUpSelector = '.block-pb-popup';

    // To make the popup appear every time, uncomment the line below.
     $.jStorage.set("pb_popup", 0);

    // Hide the popup
    $(popUpSelector).hide();

    var discountPopupStorage = $.jStorage.get("pb_popup", 0);

    // Determine if we should display the discount popup.
    var displayDiscountPopup = false;
    if (discountPopupStorage === 0) {
      displayDiscountPopup = true;
    }

    // Display the discount popup.
    if(displayDiscountPopup){

      // Set the jStorage variable so as not to appear again.
      $.jStorage.set("pb_popup", 1);

      // This function opens the Discount popup.
      function openDiscountPopup() {
        var magnific_options = {
          type: 'inline',
          closeBtnInside: true,
          mainClass: 'mfp--light',
          items: {
            src: popUpSelector
          }
        };

        var magnificDiscountPopup = $.magnificPopup.instance;
        magnificDiscountPopup.open(magnific_options);
      }
      openDiscountPopup();

      // Show the popup
      $(popUpSelector).show();

      // Open popup after delay.
      //setTimeout(openDiscountPopup, discountPopupDelay);

      // Bind scroll event to trigget the popup.
      //$(window).bind('scroll', openDiscountPopupOnce);

      // Open the popup when the user scrolls and 3s have passed.
      // If ther popup is open remove the scroll event listener.
      function openDiscountPopupOnce() {
        var scroll = $(window).scrollTop();
        // Get time.
        var justNow = new Date();
        var justNowMs = justNow.getTime();
        var nowMs = now.getTime();

        if (scroll >= 20 && (justNowMs > (nowMs + discountPopupDelay))) {
          openDiscountPopup();
          $(window).unbind('scroll', openDiscountPopupOnce);
        }
      }

    }

  });
})(jQuery, Drupal, this, this.document);