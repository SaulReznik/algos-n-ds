function checkIsObject(obj) {
    return !!obj && obj.constructor === Object;
  }
  
  // This is working, but udemy's editor was throwing errors on me
  function stringifyNumbers(obj) {
      const newObj = {}
      for (let key in obj) {
          if (checkIsObject(obj[key])) {
            return { ...newObj, [key]: stringifyNumbers(obj[key])};
          }
          newObj[key] = obj[key] === Number(obj[key]) ? `${obj[key]}`: obj[key];  
      }
  
      return newObj;
  }
  
  // That's my another solution
  function stringifyNumbers(obj) {
      const newObj = {}
      for (let key in obj) {
          if (checkIsObject(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
          } else if (obj[key] === Number(obj[key])) {
            newObj[key] = `${obj[key]}`;
          } else {
            newObj[key] = obj[key]; 
          }
      }
  
      return newObj;
  }
  
  // Course solution
  function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }
  
  let obj = {
      num: 1,
      test: [],
      data: {
          val: 4,
          info: {
              isRight: true,
              random: 66
          }
      }
  }
  
  console.log(stringifyNumbers(obj));
  