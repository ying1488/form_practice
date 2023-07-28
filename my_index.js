// if button pressed add to human list . 
const form = document.querySelector('#createHuman');
const list = document.querySelector('#humanCreated')
const InFName = document.querySelector('#firstName');
const InLName = document.querySelector('#lastName');
const InBYear = document.querySelector('#birthYear');


// get Full Name 
function HumanName(first_Name, last_Name) {
    const human = {
        "first_Name": first_Name,
        "last_Name": last_Name,
        full_Name() {
            return this.first_Name + ' ' + this.last_Name
        }
    };
    return human;
}

// function submitHandler(e){
//     e.preventDefault();
//     const humanFullName = HumanName(InFName, InLName);

//     //  const createFullName = HName.value;
//     // const newLI = document.createElement("LI");
//     // newLI.innerText = HName;
//     // list.append(newLI);

//     console.log(humanFullName);
// }

const d = new Date();
let year = d.getFullYear();

function onSubmit(e) {
    e.preventDefault();
    const humanFullName = HumanName(InFName.value, InLName.value);
    console.log(humanFullName.full_Name());
    // const humanFullName = InFName.value + ' ' + InLName.value;
    const birthyear = InBYear.value;
    const age = year - birthyear.slice(0, 4);
    const newLI = document.createElement("div");
    newLI.innerText = humanFullName.full_Name() + " , " + age;
    // process form info to add to array
    list.append(newLI);
    // clear form 
    InFName.value = " ";
    InLName.value = " ";
    InBYear.value = null;


    // style div with colours 



    const makeRandColor = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
    }
    const newDiv = newLI.innerText;
    const newColor = makeRandColor();
    document.body.div.style.div.background = newColor;
    newDiv.newColor


}


form.addEventListener("submit", onSubmit);



// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r},${g},${b})`;
// }




