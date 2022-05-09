const warnTheSheep = ['sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'];

const exerciseEight = (array) => {

    console.log(array);

    let wolf = array.indexOf('wolf');
    console.log('wolf: ' + wolf);

    let length = array.length;
    let sheepId = length - wolf;
    let laps = sheepId-1;

    for(let i = 0; i < laps; i++){

        if(array[wolf] == 'wolf' && sheepId > 1) {
            
            sheepId--;
            console.log('Hey! Oveja numero ' + sheepId + '! El lobo esta cerca!"');
            array.splice(wolf+1, 1);
        }

        if(array[array.length - 1] == 'wolf')  {

            console.log('No sigas comiendo ovejas!');
        }

    }

    console.log(array);
}

exerciseEight(warnTheSheep);

exerciseEight(warnTheSheep);

