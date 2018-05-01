function whatIsInAName(collection, source) {
  var sKeys = Object.keys(source);
//sKeys gives the list of keys in obj source.

//return any filtered objs which false both if checks.
  return collection.filter(function (obj) {
    for(var i = 0; i < sKeys.length; i++) {
      //both if checks check for negative statements.
      //first: if true that obj(currently being cycled through) DOESN'T have this property: false. Discard from filter.
      //second: if true that obj("" "") DOESNT match the source[same key[finds value of that key] then: false. Discard from filter]
      if(!obj.hasOwnProperty(sKeys[i]) || obj[sKeys[i]] !== source[sKeys[i]]) {
        return false;
      }
    }

    //if both if checks return false: meaning It DOES have the property and YES it is the same: true: add to filtered array
    return true;
  });
  //whole filtered version of collection is returned once for loop complete.
  //for loop cycling through source keys. Filter cycles through collection.
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
//
// if
// this item DOESNT have the property of [insertKey] = false then continue with OR
//                                                   true  then {code block}
//
// this item[key] IS NOT the same as source[key] = false then return true;
//                                                 true then {code block}

var randomObj = {"no1": "I'm number one value!", "no2": "I'm number two value!", "no3": "I'm number three value!", }

var sampleKeys = Object.keys(randomObj);
