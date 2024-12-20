document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('plansContainer').style.display = 'block';
});

// Define package prices
const prices = {
    daily: 25,   // Price per daily pass
    monthly: 100, // Price for monthly pass
    yearly: 1135  // Price for yearly pass
};

// Show benefits and update price based on selected plan
function showBenefits(plan) {
    const benefitsText = document.getElementById('benefitsText');
    const dailyCount = document.getElementById('dailyCount');
    benefitsText.innerHTML = '';
    dailyCount.style.display = 'none';
    document.getElementById('priceDisplay').innerText = ''; // Clear previous price

    if (plan === 'daily') {
        benefitsText.innerHTML = 'Given a one year best by date from time of purchase. Can be used to gain access to gym facilities in any given location.';
        dailyCount.style.display = 'block'; // Show daily count input
    } else if (plan === 'monthly') {
        benefitsText.innerHTML = 'Sign on for one month of full access to all Brick and Mortar gyms. Will charge each month on date of purchase until cancellation.';
        document.getElementById('priceDisplay').innerText = `Total Price: $${prices.monthly}`;
    } else if (plan === 'yearly') {
        benefitsText.innerHTML = 'Sign up for one year of full access to all Brick and Mortar gyms. Will charge each year on date of purchase until cancellation.';
        document.getElementById('priceDisplay').innerText = `Total Price: $${prices.yearly}`;
    }

    document.getElementById('benefitsContainer').style.display = 'block'; // Show benefits section
}

// Update price when daily passes input changes
document.getElementById('dailyPasses').addEventListener('input', function() {
    const dailyPasses = this.value;
    const totalPrice = dailyPasses * prices.daily;
    document.getElementById('priceDisplay').innerText = `Total Price: $${totalPrice}`;
});

function showCreditCardForm() {
    document.getElementById('plansContainer').style.display = 'none';
    document.getElementById('creditCardContainer').style.display = 'block';
}

document.getElementById('creditCardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (validateCreditCard(cardNumber, expiryDate, cvv)) {
        document.getElementById('paymentMessage').innerText = 'Payment confirmed! Thank you. Receipt sent to your email. ';
        document.getElementById('creditCardForm').reset();
    } else {
        document.getElementById('paymentMessage').innerText = 'Invalid credit card information. Please check and try again.';
    }
});

// You can also validate during input change
document.getElementById('dailyPasses').addEventListener('input', function() {
    const dailyPasses = this.value;
    if (dailyPasses > 7) {
        document.getElementById('passLimitMessage').style.display = 'block';
    } else {
        document.getElementById('passLimitMessage').style.display = 'none';
    }
});

function validateCreditCard(cardNumber, expiryDate, cvv) {
    cardNumber = cardNumber.replace(/\s+/g, '');
    const cardNumberPattern = /^[0-9]{16}$/;
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^[0-9]{3}$/;

    return cardNumberPattern.test(cardNumber) &&
           expiryPattern.test(expiryDate) &&
           cvvPattern.test(cvv);
}