/*const freelancers = [
    {name: "Alice",
    occupation: "Writer",
    startingPrice: 30},
    {name:"Bob",
    occupation: "Teacher",
    startingPrice: 50 }];
    */

const nameOfFreelancer = ["Alice", "Bob", "Carol", "Jon"];
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
const freelancersList = [];

// `setInterval` will call `freelancers` every 2000 milliseconds (2 second)
 const freelancersIntervalId = setInterval(addfreelancers, 2000);

 render(); // We call this function once to render the initial state
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
    render();
    averagePrice(); // Call the averagePrice function

    render();
      // TODO: Stop adding shapes if we've reached the maximum number of shapes
    if (freelancersList.length >= allFreelancers.length) {
     clearInterval(freelancersIntervalId);
    }

}
function averagePrice (){
    let sum = 0;
    for (let i = 0; i < startingPrice.length; i++ ){
     sum += startingPrice[i];
    }
    const avg = sum / startingPrice.length;
    const averagePriceElement = document.querySelector("#averagePrice");
    averagePriceElement.innerText = `Average Price of All Freelancers: $${avg.toFixed(2)}`;
}
// The result will displayed in the averagePriceElement with two decimal places 