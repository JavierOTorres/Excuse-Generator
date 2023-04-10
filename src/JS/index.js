import '../style/index.scss';

window.onload = () =>  {

    document.querySelector('#btn').addEventListener("click", () => {
        document.querySelector('#the-excuse').innerHTML = generateExcuse;
    });
    
console.log('Hello Rigo from the console!');
};


let generateExcuse = () => {
    let pronoun = ['A','The'];
    let subject= ['jogger', 'racoon','dog','driver', 'comedian','pincone'];
    let action= ['took my','threw my','yelled at my','stole my','bit my'];
    let possession = ['homework', 'toe', 'car', 'shoe'];
    let where = ['on the street','in my house','in my driveway'];

    let proIndx = math.floor(math.random() * pronoun.length);
    let subIndx = math.floor(math.random() * subject.length);
    let actIndx = math.floor(math.random() * action.length);
    let possIndx = math.floor(math.random() * possesion.length);
    let whereIndx = math.floor(math.random() * where.length);


    return pronoun[proIndx]+ '' + subject[subIndx] + '' + action[actIndx] + '' + possession[possIndx] + '' + where[whereIndx];
}