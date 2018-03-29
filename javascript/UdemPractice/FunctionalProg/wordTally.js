

"use strict"


// reads the contents of the file as one big string
let content = "The dog went up the tree because that's what a dog can do in this sentence, all crazy things like that. And more than that he could dance like Beyonce. Dogs are not known for their dancing abilities, but this dog was the master of all crazy stuff like that."

// splits the string into an array of words using a regular expression
let words = content.split(/[\s.,\/:\n]+/);


// tallies up the words
let tally = {};                           // use an object
                                          // keyed by word
                                          // to tally the counts
                                          // for each word
for (let i = 0; i < words.length; i++) {
  let word = words[i].toLowerCase();      // lowercase so
                                          // that we merge
                                          // different casing

  tally[word] = (tally[word] || 0) + 1;   // add one to the
                                          // tally for this word
                                          // we want to add 1 to
                                          // 0 in case the tally
                                          // for that word has
                                          // not been initialized
                                          // and is undefined
}

// to find the top 10, we have to convert the tally object
// to an array, sort it, and then take only the top 10
let tallyAsArray = [];
for (let word in tally) {
  tallyAsArray.push({ word: word, count: tally[word] });
}
tallyAsArray.sort(function(one, other) {
  return other.count - one.count;
});
  console.log(tallyAsArray);  
let top10 = tallyAsArray.slice(0, 10);

// print the top 10
console.log('The top 10 most frequently used:');
console.log('--------------------------------');
for (let i = 0; i < top10.length; i++) {
  let rank = i + 1;
  let entry = top10[i];
  console.log(rank + '. ' + entry.word + ': ' + entry.count);
}
