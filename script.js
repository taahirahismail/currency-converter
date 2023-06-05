const apiKey = "e103a1113ae8ddb3d0da6a5f";

// fetch currency options
fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
  .then((response) => response.json()) // making the responses into an object for js to understand
  .then((data) => {
    const { supported_codes } = data; // have to put it into curly brackets because you're selecting from an array (I think) and you only want to take that specific property out
    const selectElements = document.querySelectorAll("select"); // making a variable for the select element so that you can add options (children) to it

    // the next thing to do is take each of the supported codes (data) and put them into the select thingy as children of it (so, options)
    supported_codes.forEach((code) => {
      const optionElement = document.createElement("option");
      optionElement.value = code;
      optionElement.text = code; //have to use .value and .text because each option must have a value that the html reads and the text which is displayed on the user side

      selectElements.forEach((select) => {
        select.appendChild(optionElement.cloneNode(true)); // here we are just saying that we want each option that we made to be appended to the parent (select) and the cloneNode(true) is to make sure they all follow underneath each other instead of covering each other (I think basically you're just saying you want to clone the option and change the value instead of just changing the value)
      });
    });
  })
  .catch((error) => {
    console.log("Error fetching currency options:", error); // if there are any errors it will show up on the console with the message
  });

// function for converting currency
function convertCurrency() {
    const amountInput = document.getElementById("input-currency") // taking the number from where you would input it on the DOM
    const fromCurrency = document.getElementById("currency-select").value // taking the value of the option (you want to convert from) in select on the DOM
    const toCurrency = document.getElementById("currency-show").value // same as previous but for the option you want to convert to
    const resultElement = document.getElementById("output-currency") // where the answer is going to show on the DOM

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`)
    .then(response => response.json()) // again just making the responses into a version that JS can read
    .then(data => {
        const {conversion_rate} = data; // again just calling the stukkie that you want to take from the whole array that's given by the API and calling it data
        const convertedAmount = (amountInput.value * conversion_rate).toFixed(2); // the actual calculation of the conversion - amountInput.value gives the value of the number you put in on the DOM; conversion_rate is from the API, it's dynamic, so you always just put in your number and multiply it by the conversion rate, it will update on it's own as the conversion rate changes

        resultElement.innerHTML = `${amountInput.value} ${fromCurrency} = ${convertedAmount} ${toCurrency}` // this is just how we want it to be displayed on the DOM, using backticks because it's literals and each value is inserted dynamically as you change the amounts and currencies
    })

    .catch(error => {
        console.log("Error fetching exchange rate:", error); // again, just to show on the console if there are any errors
    })
}


const convertBtn = document.getElementById("convert") 
convertBtn.addEventListener('click', convertCurrency) // making the button work, once you click the button, the conversion function would run