var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];


// ---------------------------
// 1. Find largest number
// ---------------------------

function maxNum(){
var largest = 0;
for (i=0; i<numbers.length; i++){
  if (numbers[i] > largest){
    largest = numbers[i];
  }
}return largest;
}

// ---------------------------
// 2. Find longest string
// ---------------------------

function longString(){
  var longest = "";
  for (i=0; i<strings.length; i++){
    if (strings[i].length > longest.length){
     longest = strings[i];
  }
}   return longest;
}

// ---------------------------
// 3. Find even numbers
// ---------------------------

function evenNumbers(){
  var even = [];
  for (i=0; i<numbers.length; i++){
    if (numbers[i] % 2 === 0){
      even.push(numbers[i]);
    }
  }return even;
}

// ---------------------------
// 4. Find odd numbers
// ---------------------------

function oddNumbers(){
  var odd = [];
  for (i=0; i<numbers.length; i++){
    if (numbers[i] % 2 !== 0){
      odd.push(numbers[i]);
    }
  }return odd;
}

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function findIs(){
  var is = [];
  for ( i=0; i<strings[i].length; i++ ){
    var word = strings[i];
    for (count = 0; count < word.length; count++) {
      if (word[count] === "i" && word[count + 1] === "s"){
        is.push(word);
      }
    }
  }return is;
}

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

function together(strings, numbers){
  var answer = [];
  for ( i=0; i<numbers.length; i++){
    answer.push(numbers[i]);
  }
    for ( count=0; count<strings.length; count++ ){
      answer.push(strings[count]);
    }return answer;
  }



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------

var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

function whoTeachWhat(){
var teachesJS = [];
for (i=0; i < instructors.length; i++){
  if(instructors[i].teaches === "JavaScript"){
    teachesJS.push(instructors[i].firstname);
}
}return teachesJS.sort();
}
