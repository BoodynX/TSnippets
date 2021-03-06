function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 'keyof' constraint
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// My random example
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function rover<T>(panorama: T, newton: string) {
  return [panorama, newton]
}

console.log(rover<string>('pararam', 'something'))