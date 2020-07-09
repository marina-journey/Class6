const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// const generateNumbers = (amount, from, to) => {
//   for (let i = 0; i < amount; i++) {
//     console.log(random(from, to));
//     break; //работает только внутри
//   }
// }

const generateNumbers = (amount, from, to) => {
  let str = '';
  for (let i = 0; i < amount; i++) {
      str += (!str ? '' : ',') + random(from, to);
  }
  return str;
};

// generateNumbers(10, 50, 100);

const listOfNumbers = generateNumbers(10, 50, 100);

console.log(listOfNumbers);

const fewWords = "number of colors"

const cat = {
  gender: "Male",
  name: "Timon",
  'number of colors': 3,
  //[fewWords]: 3,
};

cat.area = 'Home';

console.log(cat);

// let globalId = 1;

// const createCat = (gender, name, colors) => {
//   return {
//     id: globalId++,
//     gender: gender,
//     name: name,
//     colors: colors,
//   };
// };

// console.log(createCat(1, 'Male', 'Timon', '3 colors'));
// console.log(createCat(2, 'Female', 'Sonya', '3 colors'));

let globalId = 1;

const createCat = (id, gender, name, colors) => ({
    id: globalId++,
    userId: id,
    gender,
    name,
    colors,
});

const timon = createCat(1, 'Male', 'Timon', '3 colors');
const sonya = createCat(2, 'Female', 'Sonya', '3 colors');

// console.log(timon.gender);

// for (const key in timon) {
//   if (timon.hasOwnProperty(key)) {
//     const value = timon[key];
//     console.log(value, key);
//  }
// }

const timon2 = timon;

timon2.ability = 'chmok';

delete timon2.ability;

console.log(timon, timon2);

