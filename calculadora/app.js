let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

let realTimeScreenValue = [];

function calculateExpression(expr) {
  try {
    expr = expr.replace(/X/g, '*').replace(/%/g, '/100').replace(/\s+/g, '');
    if (!/^[0-9.+\-*/()]+$/.test(expr)) return 0;
    return new Function(`return ${expr}`)();
  } catch {
    return 0;
  }
}

clearbtn.addEventListener("click", () => {
  realTimeScreenValue = [''];
  answerScreen.innerHTML = 0;
  currentInput.className = 'currentInput';
  answerScreen.className = 'answerScreen';
  answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.id.match('erase') && !btn.id.match('evaluate') && !btn.id.match('clear')) {
      realTimeScreenValue.push(btn.value);
      currentInput.innerHTML = realTimeScreenValue.join('');
      if (btn.classList.contains('num_btn')) {
        answerScreen.innerHTML = calculateExpression(realTimeScreenValue.join(''));
      }
    }

    if (btn.id.match('erase')) {
      realTimeScreenValue.pop();
      currentInput.innerHTML = realTimeScreenValue.join('');
      answerScreen.innerHTML = calculateExpression(realTimeScreenValue.join(''));
    }

    if (btn.id.match('evaluate')) {
      currentInput.className = 'answerScreen';
      answerScreen.className = 'currentInput';
      answerScreen.style.color = "white";
    }
  });
});
