
const day_Input = document.querySelector('#day');
const month_Input = document.querySelector('#month');
const year_Input = document.querySelector('#year');

const day_Output = document.querySelector('#dd');
const month_Output = document.querySelector('#mm');
const year_Output = document.querySelector('#yy');

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

const date = new Date();
let day = date.getDate();
let month =1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll('input');
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector('small').innerHTML = "This field is required";
            validator = false;
        } else if (month_Input.value > 12) {
            month_Input.style.borderColor = "red";
            month_Input.parentElement.querySelector('small').innerHTML = "must be a valid month.";
            validator = false;
        } else if (day_Input.value > 31) {
            day_Input.style.borderColor = "red";
            day_Input.parentElement.querySelector('small').innerHTML = "must be a valid day.";
            validator = false;
        } else {
            i.style.borderColor = "black";
            parent.querySelector('small').innerHTML = " ";
            validator = true;
        }
    })
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if (day_Input.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }

        if (month_Input.value > month) {
            month = month + 12;
            year = year - 1;
        }

        const d = day - day_Input.value;
        const m = month - month_Input.value;
        const y = year - year_Input.value;

        day_Output.innerHTML = d;
        month_Output.innerHTML = m;
        year_Output.innerHTML = y;
    }

 

}
