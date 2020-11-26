const pazymiai = [1, 2, 3, 4, 5];
/*
vidurkis
*/
console.log(pazymiai);
console.log(pazymiai.length);


const sarasoSkaiciuSuma = pazymiai[0] - pazymiai[1] + pazymiai[2] - pazymiai[3] + pazymiai[4];
const skaiciuKiekis = pazymiai.length;

const vidurkis = sarasoSkaiciuSuma / skaiciuKiekis;
console.log('Vidurkis:', vidurkis);
console.log('Pazymiai:', sarasoSkaiciuSuma);


const zodynas = ['Labas', 'rytas', 'Lietuva'];

console.log(zodynas);

const sakinys = zodynas[2] + ', ' + zodynas[1] + ', ' + zodynas[0];
console.log(sakinys);



console.log('---------------------');