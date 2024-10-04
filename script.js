// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// JavaScript to handle the navbar color change on scroll
// window.addEventListener("scroll", function() {
//     const navbar = document.querySelector(".navbar");

//     // Add the 'scrolled' class when page is scrolled 50px or more
//     if (window.scrollY > 50) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// });
// $(document).ready(function() {
//     animateSlider();
//   });
  
  
    // function animateSlider() {
    //   $('.slider').animate({
    //     marginLeft: '-=220px' // Adjust value according to the width of the cards and margin
    //   }, 1000, 'linear', function() {
    //     $(this).css('marginLeft', '0').find('.slider-card:last').after($(this).find('.slider-card:first'));
    //     animateSlider(); // Call the function recursively for infinite loop
    //   });
    // }
    
    function animateSlider() {
      $('.slider').animate({
          marginLeft: '-=0px' // Adjust value based on card width
      }, 1000, 'linear', function() {
          $(this).css('marginLeft', '0').find('.slider-card:last').after($(this).find('.slider-card:first'));
          animateSlider(); // Loop animation
      });
  }
  //   // function animateSlide() {
  //   //   $('.slide').animate({
  //   //       marginLeft: '-=0' // Adjust value based on card width
  //   //   }, 1000, 'linear', function() {
  //   //       $(this).css('marginLeft', '0').find('.slide:last').after($(this).find('.slide:first'));
  //   //       animateSlide(); // Loop animation
  //   //   });
  // }
  // function animateSlide() {
  //     const $slide = $('.slide');
  //     $slide.animate({
  //         marginLeft: '-=0px' // Adjust value based on item width
  //     }, 4000, 'linear', function() {
  //         if ($slide.children().length > 0) {
  //             $slide.append($slide.children().first()); // Move first item to end
  //             $slide.css('marginLeft', '0'); // Reset margin after moving item
  //         }
  //         animateSlide(); // Loop animation
  //     });
  // }
  document.addEventListener('DOMContentLoaded', function () {
    // Calculate and update the subtotal and total
    function updateTotals() {
      let subtotal = 0;
      const rows = document.querySelectorAll('#cart-items tr');
      rows.forEach(row => {
        const price = parseFloat(row.querySelector('.price').getAttribute('data-price'));
        const quantity = parseInt(row.querySelector('input').value);
        const total = price * quantity;
        row.querySelector('.total').innerText = `$${total.toFixed(2)}`;
        subtotal += total;
      });

      // Update subtotal and order total
      document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
      document.getElementById('order-total').innerText = `$${subtotal.toFixed(2)}`;
    }

    // Increase quantity
    document.querySelectorAll('.increase-quantity').forEach(button => {
      button.addEventListener('click', function () {
        const input = this.parentElement.querySelector('input');
        let quantity = parseInt(input.value);
        quantity++;
        input.value = quantity;
        updateTotals();
      });
    });

    // Decrease quantity
    document.querySelectorAll('.decrease-quantity').forEach(button => {
      button.addEventListener('click', function () {
        const input = this.parentElement.querySelector('input');
        let quantity = parseInt(input.value);
        if (quantity > 1) {
          quantity--;
          input.value = quantity;
          updateTotals();
        }
      });
    });

    // Remove item (set quantity to 0)
document.querySelectorAll('.remove-icon').forEach(icon => {
  icon.addEventListener('click', function () {
    const row = this.closest('tr'); // Get the row containing the clicked trash icon
    
    // Set quantity input to 0
    const quantityInput = row.querySelector('input[type="text"]');
    quantityInput.value = 0;
    
    // Update the total value of this row to $0
    const totalCell = row.querySelector('td:nth-child(5)');
    totalCell.textContent = '$0.00';
    
    // Recalculate the cart totals
    updateTotals();
  });
});

// Update totals
function updateTotals() {
  let subtotal = 0;

  // Loop through each row and calculate the subtotal
  document.querySelectorAll('tbody tr').forEach(row => {
    const quantity = parseInt(row.querySelector('input[type="text"]').value);
    const price = parseFloat(row.querySelector('td:nth-child(3)').textContent.replace('$', ''));
    const totalCell = row.querySelector('td:nth-child(5)');
    
    // Calculate the total for this row
    const total = quantity * price;
    
    // Update the total cell
    totalCell.textContent = `$${total.toFixed(2)}`;
    
    // Add to subtotal
    subtotal += total;
  });

  // Update cart totals
  document.querySelector('.cart-totals .row .value').textContent = `$${subtotal.toFixed(2)}`;
  document.querySelector('.cart-totals .total').textContent = `$${subtotal.toFixed(2)}`;
}


    // Initial totals calculation
    updateTotals();
  });
  
    // Login Form Validation
    function validateLoginForm() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            document.getElementById("loginerror").innerText = 
            'Please fill in both Username/Email and Password.';
            return false;
        }
        return true;
    }

    // Sign Up Form Validation
    function validateSignUpForm() {
        const email = document.querySelector('input[type="email"]').value;
        const firstName = document.querySelector('input[placeholder="First Name"]').value;
        const lastName = document.querySelector('input[placeholder="Last Name"]').value;
        const phone = document.querySelector('input[placeholder="Phone number"]').value;
        const address = document.querySelector('input[placeholder="Street Address"]').value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Email Regex

        if (!emailPattern.test(email)) {
            document.getElementById("sigin-up-error").innerText='Please enter a valid email address.';
            return false;
        }

        if (firstName === '' || lastName === '' || phone === '' || address === '') {
            document.getElementById("sigin-up-error").innerText='Please fill in all required fields.';
            return false;
        }

        return true;
    }

    document.querySelectorAll('input[name="payment-method"]').forEach((radio) => {
        radio.addEventListener('change', function() {
            const selectedMethod = this.id;
            const creditCardDetails = document.getElementById('credit-card-details');

            if (selectedMethod === 'credit-card') {
                creditCardDetails.style.display = 'block';
            } else {
                creditCardDetails.style.display = 'none';
            }
        });
    });
    window.addEventListener("resize", function() {
      if (window.innerWidth <= 768) {
          const popularItems = document.querySelectorAll('.popular-items, .items, .popular-item');
          popularItems.forEach(function(item) {
              item.style.display = 'flex';
              item.style.flexDirection = 'column';
              item.style.alignItems = 'center';
              item.style.width = '100%';
          });
      }
  });