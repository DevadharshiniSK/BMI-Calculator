const height = document.getElementById("height");
const weight = document.getElementById("weight");
const BMI = document.getElementById("bmi");
const calculate = document.getElementById("calculate");
let Status=document.getElementById("status");
let Comment=document.getElementById("comment");

 calculate.addEventListener("click", () => {
    let metre =height.value;
    let kg = weight.value;
    let bmi = (kg / (metre * metre)).toFixed(1);
    
    BMI.textContent = bmi;

    height.value = "";
    weight.value = "";
    if(bmi < 16){
        Status.innerHTML = "You're BMI is underweight";
        Comment.innerHTML= "The first wealth is health.So Eat Plenty of Fruits and Vegetables";
        Status.classlist.add("border");
        Comment.classlist.add("border");
    }
    else if(bmi < 18){
        Status.innerHTML = "Healthy weight";
        Comment.innerHTML= "yes! you're in a healthy weight.Live a Happy and Healthy Life.";
        Status.classlist.add("border");
        Comment.classlist.add("border");
    }
    else if(bmi < 25){
        Status.innerHTML = "You're in a overweight category";
        Comment.innerHTML= "Consume less 'bad' fat and more 'good' fat and eat plenty of dietary food";
        Status.classlist.add("border");
        Comment.classlist.add("border");
    }
    else if(bmi > 25){
        Status.innerHTML = "Obesity";
        Comment.innerHTML= "Say 'NO' to Junk Food and Sugar and Say 'YES' to Regular Exercise";
        Status.classlist.add("border");
        Comment.classlist.add("border");
    }
 });