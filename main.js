// Your code goes below:

const makeParagraph = (paragraph) => {
  return paragraph.join(' ')
}

const totalScore = (level, bonus = 0) => {
  let total = 0;

  for (let i = 0; i < level.length; i++) {
    if(level[i].multiplier === undefined) {
    total += Number(level[i].score * 1);
    } else {
      total += (level[i].score * level[i].multiplier) 
    }
  }
  return total + bonus;
};

const cipher = function(str){
  const strArr = [a, b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z,];
    for (let i = 0; i < str.length; i++) {
    }
    return str;
}

const womensAverageSalary = (peopleArr) => {
  let femaleArr = 0;
  let salary = 0;
  for (person of peopleArr) {
    if(person.gender === 'female') {
      femaleArr += person.salary;
      salary++
    }
  }
    return femaleArr / salary;
}
  
const notMarried = (people) => {
  return people.filter((person) => {
    return (person.status !== 'married')
  })
}

const addToMultiDigitNumbers = (num, arr) => {
  return arr.map((number) => {
    
    })
  
}

const Faqtory =  () => {
  return {
    questions: [],

    addQuestion: function(question) {
      
    question = {
      text: question,
      answered: false,
      id: 0,
    }
      this.questions.push(question);
    } 
  }
}

// Our code goes below... DO NOT TOUCH.


if (typeof makeParagraph === 'undefined') {
  makeParagraph = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof womensAverageSalary === 'undefined') {
  womensAverageSalary = undefined;
}

if (typeof notMarried === 'undefined') {
  notMarried = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}


module.exports = {
  makeParagraph,
  totalScore,
  cipher,
  womensAverageSalary,
  notMarried,
  addToMultiDigitNumbers,
  Faqtory,
}
