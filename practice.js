function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you please explain what UX designer is?');
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log(name + ' , what subject do you teach?')
    }
  } else {
    return function (name) {
      console.log(name + ' , what do you do??')
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('Amy');
designerQuestion('Brenda');
designerQuestion('Carl');

function shape(stuff) {
  if (stuff === 'red') {
    return function (area) {
      console.log(`The area is ${area * area}`)
    }
  } else if (stuff === 'blue') {
    return function (area) {
      console.log(`The area is ${area * area / 2}`)
    }
  } else if (stuff === 'yellow') {
    return function (area) {
      console.log(`The area is ${area * 2 * 3.14}`)
    }
  }
}

var square = shape('red');
var triangle = shape('blue');
var circle = shape('yellow')
square(10)
triangle(9)
circle(2)