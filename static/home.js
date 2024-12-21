var dd_main = document.querySelector(".dd_main");

dd_main.addEventListener("click", function () {
  this.classList.toggle("active");
});

let senBtn = document.querySelector("#send-btn");
let recBtn = document.querySelector("#rec-btn");

let curr = true;

senBtn.addEventListener("click", function () {
  if (curr == false) {
    document.getElementById("amount").style.display = "flex";
    document.getElementById("send-btn").style.color = "white";
    document.getElementById("rec-btn").style.color = "grey";
    document
      .getElementById("dest-address-input")
      .removeAttribute("placeholder");
    document.getElementById("send-wrapper").style.display = "flex";
    // document.getElementById("swipe").style.top = "21.1rem";
    document.getElementById("view-all-trx").style.top = "355px";
    document.getElementById("view-all-trx").style.height = "0rem";

    curr = true;
  }
});

recBtn.addEventListener("click", function () {
  if (curr == true) {
    document.getElementById("amount").style.display = "none";
    document.getElementById("send-btn").style.color = "grey";
    document.getElementById("rec-btn").style.color = "white";
    // document.getElementById("dest-address-input").setAttribute("placeholder", "Address");
    document.getElementById("send-wrapper").style.display = "none";
    // document.getElementById("swipe").style.top = "13.1rem";
    document.getElementById("view-all-trx").style.top = "115px";
    document.getElementById("view-all-trx").style.height = "16rem";

    curr = false;
  }
});

function getOption() {
  // Get selected coin option
  let selectElement = document.querySelector("#coins");
  let output = selectElement.value;
  document.querySelector("#avail-type").textContent = output;

  // AJAX request to fetch wallet address based on selected coin
  fetch("/home", {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let walletAddress = "";

      // Set wallet address based on selected coin
      if (output === "BTC") {
        walletAddress = data.Wallet_AddressBTC;
      } else if (output === "LTC") {
        walletAddress = data.Wallet_AddressLTC;
      } else if (output === "JUP") {
        walletAddress = data.Wallet_Address;
      } else if (output === "USDT") {
        walletAddress = data.Wallet_Address;
      }

      // Update placeholder attribute of dest-address-input
      document.getElementById("dest-address-input").value = walletAddress;
      document
        .getElementById("dest-address-input")
        .addEventListener("click", function () {
          // Select the text in the input box
          this.select();

          // Copy the selected text to the clipboard
          document.execCommand("copy");
        });
    })
    .catch((error) => {
      console.error("Error fetching wallet address:", error);
      document
        .getElementById("dest-address-input")
        .setAttribute("placeholder", "Address");
    });
}
//----------------------------------balance------------------------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  // Fetch user data if needed via AJAX
  fetch("/home", {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Check if balance exists and update the span with id="avail-amt" with the balance
      if (data.balance !== undefined) {
        document.getElementById("avail-amt").textContent = data.balance;
      } else {
        document.getElementById("avail-amt").textContent = "Error";
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      document.getElementById("avail-amt").textContent = "Error";
    });
});

// ----------------------------------Transaction-----------------------------------------------

let view = document.querySelector("#view-all");
let track = false;

view.addEventListener("click", function () {
  if (track == true) {
    document.getElementById("show-trx").style.display = "none";
    document.getElementById("select-display").style.display = "block";
    document.getElementById("dest-display").style.display = "block";
    document.getElementById("amount").style.display = "block";
    document.getElementById("send-btn").style.display = "block";
    document.getElementById("rec-btn").style.display = "block";
    document.getElementById("hr-display").style.display = "block";
    document.getElementById("send-wrapper").style.display = "flex";
    document.getElementById("view-all-trx").style.top = "355px";
    document.getElementById("view-all").innerText = "View All Transactions";
    document.getElementById("send-btn").style.color = "white";
    document.getElementById("rec-btn").style.color = "grey";
    document.getElementById("view-all-trx").style.height = "0rem";
    curr = true;
    track = false;
  } else {
    document.getElementById("show-trx").style.display = "inline-block";
    document.getElementById("select-display").style.display = "none";
    document.getElementById("dest-display").style.display = "none";
    document.getElementById("amount").style.display = "none";
    document.getElementById("send-btn").style.display = "none";
    document.getElementById("rec-btn").style.display = "none";
    document.getElementById("hr-display").style.display = "none";
    document.getElementById("send-wrapper").style.display = "none";
    document.getElementById("view-all-trx").style.top = "-6rem";
    document.getElementById("view-all").innerText = "Go Back";
    document.getElementById("view-all-trx").style.height = "100%";

    track = true;
  }
});
