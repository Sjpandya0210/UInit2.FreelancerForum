/*const freelancers = [
    {name: "Alice",
    occupation: "Writer",
    startingPrice: 30},
    {name:"Bob",
    occupation: "Teacher",
    startingPrice: 50 }];
    */

const nameOfFreelancer = ["Alice", "Bob", "Carol", "Joe"];
const occupations = ["Writer", "Teacher","Programmer", "Musician"];
const startingPrice = [30, 50, 70, 30];
const allFreelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        startingPrice: 30,
    },
    {
        name: "Bob",
        occupation: "Teacher",
        startingPrice: 50,
    },
];
const MaxValue = nameOfFreelancer.length;
const freelancersList = [];


// `setInterval` will call `freelancers` every 2000 milliseconds (2 second)
 const freelancersIntervalId = setInterval(addfreelancers, 1000);

 //render(); // We call this function once to render the initial state
/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
    // Render the names, occupation and price
    const availableFreelancer = document.querySelector("#nameList");
    const nameElements = freelancersList.map((xyz) => {
      const element = document.createElement("li");
      element.innerText = `Name: ${xyz.name}, Occupation: ${xyz.occupation}, Starting Price $${xyz.startingPrice}`;
      return element;
    });
    availableFreelancer.replaceChildren(...nameElements);
}
function addfreelancers (){
    const randomIndex = Math.floor(Math.random() * nameOfFreelancer.length);
    const randomName = nameOfFreelancer[randomIndex];
    const randomOccupation = occupations[randomIndex];
    const randomPrice = startingPrice[randomIndex];

// this won't repeate the names :: when we have randomname and freelancer name, the while loop reasign the name using math. floor random
while (freelancersList.some((freelancer) => freelancer.name === randomName)) {
    randomIndex = Math.floor(Math.random() * nameOfFreelancer.length);
    randomName = nameOfFreelancer[randomIndex];
}

    freelancersList.push({ name: randomName, occupation: randomOccupation, startingPrice: randomPrice });

    // Call the averagePrice function
    render();
    averagePrice()
      // TODO: Stop adding shapes if we've reached the maximum number of shapes
    if (freelancersList.length >= MaxValue) {
     clearInterval(freelancersIntervalId);
    }

}
function averagePrice() {
    // Assuming countTotalPrice is defined somewhere in your code
   let countTotalPrice = freelancersList.map((freelancer) => freelancer.startingPrice);

    let sum = 0;
    for (let i = 0; i < countTotalPrice.length; i++) {
        sum += countTotalPrice[i];
    }

    const avg = sum / countTotalPrice.length;
    const averagePriceElement = document.querySelector("#averagePrice");
    averagePriceElement.innerText = `Average Price of All Freelancers: $${avg.toFixed(2)}`;
}

// Run the function after the document has fully loaded

/*
function averagePrice (){
    let  = 0;
    for (let i = 0; i < countTotalPrice.length; i++ ){
     sum += countTotalPrice[i];
    }
    const avg = sum / countTotalPrice.length;
    const averagePriceElement = document.querySelector("#averagePrice");
    averagePriceElement.innerText = `Average Price of All Freelancers: $${avg.toFixed(2)}`;
}
averagePrice(); */
// The result will displayed in the averagePriceElement with two decimal places 