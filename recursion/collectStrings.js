function checkIsObject(obj) {
    return !!obj && obj.constructor === Object;
  }
  
  function collectStrings(obj) {
      const strings = [];
  
      for(let key in obj) {
          if (typeof obj[key] === 'string') strings.push(obj[key]);
          if (checkIsObject(obj[key])) {
              return [...strings, ...collectStrings(obj[key])]
          }
      }
  
      return strings;
  };
  
  // Course solution
  function collectStrings(obj) {
      var stringsArr = [];
      for(var key in obj) {
          if(typeof obj[key] === 'string') {
              stringsArr.push(obj[key]);
          }
          else if(typeof obj[key] === 'object') {
              stringsArr = stringsArr.concat(collectStrings(obj[key]));
          }
      }
   
      return stringsArr;
  }
  
  const sample = {
      stuff: "foo",
      data: {
          val: {
              thing: {
                  info: "bar",
                  moreInfo: {
                      evenMoreInfo: {
                          weMadeIt: "baz"
                      }
                  }
              }
          }
      }
  }
  
  console.log(collectStrings(sample)) // ["foo", "bar", "baz"])