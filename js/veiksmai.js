const skaiciu1 = 5;
const skaiciu2 = 8;
const suma = skaiciu1 + skaiciu2;
console.log(skaiciu1, '+', skaiciu2, '=', suma);

const skaiciu3 = 88;
const skaiciu4 = 77;
const skirtumas = skaiciu3 - skaiciu4;
console.log(skaiciu3, skaiciu4, skirtumas);
console.log('------------------------');
const zodis1 = 'Labas';
const zodis2 = 'rytas';
const zodis3 = 'Lietuva';

const sakinys = zodis1 + ' ' + zodis2 +', ' + zodis3;
console.log(sakinys);
const txt1 = 'lorem';
const txt2 = 'ipsum';


const pilnasHTML = '<div>\
<h1>Lorem, ipsum dolor.</h1>\
<p>Lorem, ipsum.</p>\
</div>'
console.log(pilnasHTML);

const backtickHTML = 
`<div>
<h1>Lorem, ipsum dolor.</h1>
<p>Lorem, ipsum.</p>
</div>`;
console.log(backtickHTML);

const div = `<p>Lorem, ipsum.</p>
</div>`;
const div1 = `<div>
<h1>Lorem, ipsum dolor.</h1>`;
const kodas = `${div1} ${div}`;
console.log(kodas); 
/*    
<div>
<h1>Lorem, ipsum dolor.</h1>
<p>Lorem, ipsum.</p>
</div>
*/