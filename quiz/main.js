//check if answers are correct

//listeners
document.getElementById('mark-quiz').addEventListener('click', markQuiz);
document.getElementById('reset').addEventListener('click', resetQuiz);

//functions

function markQuiz() {

  //answer variables
  var total = 0;
  let answer1 = document.getElementById('moscow').value.toLowerCase();
  let answer2 = document.getElementById('umbrella').checked;
  let answer3 = document.getElementById('windows-xp').value.toLowerCase();
  let answer4 = document.getElementById('notch').value.toLowerCase();
  let answer5 = document.getElementById('heroine').value.toLowerCase();

  //scroll to top
  scroll(0, 0);

  //check answers
  // if=correct, else if= no answer, else=wrong

  //question 1
  if (answer1 == 'moscow') {
    document.getElementById('question-1').style.backgroundColor = 'rgba(144,238,144, 0.5)';
    document.getElementById('status1').innerHTML = 'Mother Russia would be proud.';
    document.getElementById('status1').style.color = 'darkgreen';
    total++;
  } else if (answer1 == null || answer1.match(/^ *$/) !== null) {
    document.getElementById('question-1').style.backgroundColor = 'rgba(144,144,238, 0.5)';
    document.getElementById('status1').innerHTML = 'No running away from communism.';
    document.getElementById('status1').style.color = 'darkblue';
  } else {
    document.getElementById('question-1').style.backgroundColor = 'rgba(238,144,144, 0.5)';
    document.getElementById('status1').innerHTML = 'The answer was MOSCOW. Due to your ignorance, the Commies are after you.';
    document.getElementById('status1').style.color = 'darkred';
  }

  //question 2
  if (answer2 == true) {
    document.getElementById('question-2').style.backgroundColor = 'rgba(144,238,144, 0.5)';
    document.getElementById('status2').innerHTML = 'If you know, you know.';
    document.getElementById('status2').style.color = 'darkgreen';
    total++;
  } else {
    document.getElementById('question-2').style.backgroundColor = 'rgba(238,144,144, 0.5)';
    document.getElementById('status2').innerHTML = 'You disgust me. UMBRELLA CORPORATION doesn\'t exist.';
    document.getElementById('status2').style.color = 'darkred';
  }

  //question 3
  if (answer3 == 'windows xp startup' || answer3 == 'windows xp start up' || answer3 == 'windows xp' || answer3 == 'windows xp start-up') {
    document.getElementById('question-3').style.backgroundColor = 'rgba(144,238,144, 0.5)';
    document.getElementById('status3').innerHTML = 'You shouldn\'t be proud you know this.';
    document.getElementById('status3').style.color = 'darkgreen';
    total++;
  } else if (answer3 == null || answer3.match(/^ *$/) !== null) {
    document.getElementById('question-3').style.backgroundColor = 'rgba(144,144,238, 0.5)';
    document.getElementById('status3').innerHTML = 'Do you fear the ultimate operating system?';
    document.getElementById('status3').style.color = 'darkblue';
  } else {
    document.getElementById('question-3').style.backgroundColor = 'rgba(238,144,144, 0.5)';
    document.getElementById('status3').innerHTML = 'You insolant fool! How could you not know this? Disgusting. This is the WINDOWS XP STARTUP!';
    document.getElementById('status3').style.color = 'darkred';
  }

  //question 4
  if (answer4 == 'notch' || answer4 == 'markus persson' || answer4 == 'markus notch persson' || answer4 == 'markus \'notch\' persson' || answer4 == 'markus \"notch\" persson') {
    document.getElementById('question-4').style.backgroundColor = 'rgba(144,238,144, 0.5)';
    document.getElementById('status4').innerHTML = 'Epic gamer gang.';
    total++;
    document.getElementById('status4').style.color = 'darkgreen';
  } else if (answer4 == null || answer4.match(/^ *$/) !== null) {
    document.getElementById('question-4').style.backgroundColor = 'rgba(144,144,238, 0.5)';
    document.getElementById('status4').innerHTML = 'Don\'t be shy, Endermen don\'t bite. They EAT YOUR FACE!';
    document.getElementById('status4').style.color = 'darkblue';
  } else {
    document.getElementById('question-4').style.backgroundColor = 'rgba(238,144,144, 0.5)';
    document.getElementById('status4').innerHTML = 'You are unworthy of living. He is the one and only MARKUS PERSSON aka NOTCH!';
    document.getElementById('status4').style.color = 'darkred';
  }

  //question 5
  if (answer5 == 'heroine') {
    document.getElementById('question-5').style.backgroundColor = 'rgba(144,238,144, 0.5)';
    document.getElementById('status5').innerHTML = 'This has been your only accomplishment in this quiz. Congrats.';
    document.getElementById('status5').style.color = 'darkgreen';
    total++;
  } else if (answer5 == null || answer5.match(/^ *$/) !== null) {
    document.getElementById('question-5').style.backgroundColor = 'rgba(144,144,238, 0.5)';
    document.getElementById('status5').innerHTML = 'Don\'t be weak-minded you weak-minded donkey!';
    document.getElementById('status5').style.color = 'darkblue';
  } else {
    document.getElementById('question-5').style.backgroundColor = 'rgba(238,144,144, 0.5)';
    document.getElementById('status5').innerHTML = 'I never expected you to get it right. The answer was HEROINE.';
    document.getElementById('status5').style.color = 'darkred';
  }

  //end messages
  if (total == 1) {
    document.getElementById('mark').innerHTML = '1';
    document.getElementById('percent').innerHTML = '20';
    document.getElementById('feedback').innerHTML = 'Your IQ is -213. My socks know more than you.';
  } else if (total == 2) {
    document.getElementById('mark').innerHTML = '2';
    document.getElementById('percent').innerHTML = '40';
    document.getElementById('feedback').innerHTML = 'Your IQ is 0. Congrats on having the lowest possible IQ for a human being.';
  } else if (total == 3) {
    document.getElementById('mark').innerHTML = '3';
    document.getElementById('percent').innerHTML = '60';
    document.getElementById('feedback').innerHTML = 'Your IQ is 42. You\'re smarter than most basic animals';
  } else if (total == 4) {
    document.getElementById('mark').innerHTML = '4';
    document.getElementById('percent').innerHTML = '80';
    document.getElementById('feedback').innerHTML = 'Your IQ is 134. I\'m impressed. Not many people have such a large brain.';
  } else if (total == 5) {
    document.getElementById('mark').innerHTML = '5';
    document.getElementById('percent').innerHTML = '100';
    document.getElementById('feedback').innerHTML = 'Your IQ is 10 000. You are a god.';
  } else if (total == 0) {
    document.getElementById('mark').innerHTML = '0';
    document.getElementById('percent').innerHTML = '0';
    document.getElementById('feedback').innerHTML = 'Your IQ is -42069. Is this a joke? Get your disabled brain outta here.';
  } else {
    document.getElementById('mark').innerHTML = '?';
    document.getElementById('percent').innerHTML = '??';
    document.getElementById('feedback').innerHTML = 'Your IQ is either too high or too low to be calculated. To be honest it\'s probably to low.';
  }
}

function resetQuiz() {
  //question 1
  document.getElementById('question-1').style.backgroundColor = 'rgba(0,0,0, 0)';
  document.getElementById('status1').innerHTML = '';

  //question 2
  document.getElementById('question-2').style.backgroundColor = 'rgba(0,0,0, 0)';
  document.getElementById('status2').innerHTML = '';

  //question 3
  document.getElementById('question-3').style.backgroundColor = 'rgba(0,0,0, 0)';
  document.getElementById('status3').innerHTML = '';

  //question 4
  document.getElementById('question-4').style.backgroundColor = 'rgba(0,0,0, 0)';
  document.getElementById('status4').innerHTML = '';

  //question 5
  document.getElementById('question-5').style.backgroundColor = 'rgba(0,0,0, 0)';
  document.getElementById('status5').innerHTML = '';

  //results
  document.getElementById('mark').innerHTML = '_';
  document.getElementById('percent').innerHTML = '__';
  document.getElementById('feedback').innerHTML = '';
}