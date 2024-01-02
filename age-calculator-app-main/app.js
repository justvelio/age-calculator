document.addEventListener("DOMContentLoaded", function () {
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
  
    const dayOutput = document.getElementById("DD");
    const monthOutput = document.getElementById("MM");
    const yearOutput = document.getElementById("YY");
  
    const form = document.getElementById("form");
  
    form.addEventListener("submit", handleSubmit);
  
    const date = new Date();
    let currentDay = date.getDate();
    let currentMonth = 1 + date.getMonth();
    let currentYear = date.getFullYear();
  
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    dayInput.addEventListener("input", function () {
      const inputValue = parseInt(dayInput.value);
      if (isNaN(inputValue) || inputValue < 0) {
        dayInput.value = 0;
      }
    });

    monthInput.addEventListener("input", function () {
        const inputValue = parseInt(monthInput.value);
        if (isNaN(inputValue) || inputValue < 0) {
          monthInput.value = 0;
        }
      });

      yearInput.addEventListener("input", function () {
        const inputValue = parseInt(yearInput.value);
        if (isNaN(inputValue) || inputValue < 0) {
          yearInput.value = 0;
        }
      });
  
    function validate() {
      const inputs = document.querySelectorAll("input");
      let validator = true;
      inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
          i.style.borderColor = "red";
          parent.querySelector("small").innerText = "This field is required!";
          validator = false;
        } else if (i === monthInput && parseInt(i.value) > 12) {
          i.style.borderColor = "red";
          parent.querySelector("small").innerText = "Must be a valid month!";
          validator = false;
        } else if (i === dayInput && parseInt(i.value) > 31) {
          i.style.borderColor = "red";
          parent.querySelector("small").innerText = "Must be a valid day!";
          validator = false;
        } else {
          i.style.borderColor = "black";
          parent.querySelector("small").innerText = "";
          validator = true;
        }
      });
      return validator;
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (validate()) {
        let inputDay = parseInt(dayInput.value);
        let inputMonth = parseInt(monthInput.value);
        let inputYear = parseInt(yearInput.value);
  
        if (inputDay > currentDay) {
          inputDay = inputDay - months[currentMonth - 1];
          inputMonth = inputMonth + 1;
        }
  
        if (inputMonth > currentMonth) {
          inputMonth = inputMonth - 12;
          inputYear = inputYear + 1;
        }
  
        const d = Math.max(0, currentDay - inputDay);
        const m = Math.max(0, currentMonth - inputMonth);
        const y = Math.max(0, currentYear - inputYear);
  
        dayOutput.innerHTML = d;
        monthOutput.innerHTML = m;
        yearOutput.innerHTML = y;
      }
    }
  });
  