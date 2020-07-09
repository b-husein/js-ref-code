let myName = 'Bruce Wayne';
let myAge = 28;
let myButler = 'Alfred';
let myCity = 'Gotham';
let myCar = 'Batmobile';

let html;

html = `
    <ul>
        <li>Name: ${myName}</li>
        <li>Age: ${myAge}</li>
        <li>Butler: ${myButler}</li>
        <li>City: ${myCity}</li>
        <li>Car: ${myCar}</li>
        <li>About me: ${
          'Hi there, my name is ' +
          myName +
          ' and I like to drive my ' +
          myCar +
          ' in my ' +
          myCity +
          '.'
        }</li>
    </ul>
`;

document.body.innerHTML = html;
