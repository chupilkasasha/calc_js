/**
 * Created by O.Chupilka
 * 2019-04-20
 */
var numbers = document.querySelectorAll('.number');
var operators = document.querySelectorAll('.operator');
var decimal = document.getElementById('decimal');
var disply = document.getElementById('display');
var clearbtns = document.querySelectorAll('.clearBtn');
var res = document.getElementById('result');
var rate = document.getElementById('rate');
var MemoryCarrentNumber = 0;
var MemoryNewNumber = false;
var MemoryPendingOperation = '';


for (var i = 0; i < numbers.length; i++) {
	var number = numbers[i];
	number.addEventListener('click', function (e) {
		numPress(e.target.textContent);
	})
};

for (var i = 0; i < operators.length; i++) {
	var oper = operators[i];
	oper.addEventListener('click', function (e) {
		operFunc(e.target.textContent);
		//console.log('клик по кнопкам с операциями')
	})
};

for (var i = 0; i < clearbtns.length; i++) {
	var clr = clearbtns[i];
	clr.addEventListener('click', function (e) {
		clearFun(e.srcElement.id);
		//console.log('клик по с или се')

	});
};

res.addEventListener('click', result);
decimal.addEventListener('click', decimaL);
rate.addEventListener('click', fRate);
//нажатие на кнопку
function numPress(num) {
	if (MemoryNewNumber) {
		display.value = num;
		MemoryNewNumber = false;
	} else {
		if (display.value == '0') {
			display.value = num;
		} else {
			display.value += num;
		};

	};
	//console.log('клик по кн ' + num);
};

function operFunc(oper) {
	var localOperMemory = display.value;

	if (MemoryNewNumber && MemoryPendingOperation !== '=') {
		display.value = MemoryCarrentNumber;
	} else {
		MemoryNewNumber = true;
		if (MemoryPendingOperation === '+') {
			MemoryCarrentNumber += parseFloat(localOperMemory);
		} else if (MemoryPendingOperation === '-') {
			MemoryCarrentNumber -= parseFloat(localOperMemory);
		} else if (MemoryPendingOperation === '*') {
			MemoryCarrentNumber *= parseFloat(localOperMemory);
		} else if (MemoryPendingOperation === '/') {
			MemoryCarrentNumber /= parseFloat(localOperMemory);
		} else {
			MemoryCarrentNumber = parseFloat(localOperMemory);
		};
		display.value = MemoryCarrentNumber;
		MemoryPendingOperation = oper;
	}
	//console.log('клик по кн с операцией ' + oper);
};

function clearFun(id) {
	//console.log('click ' + id);
	if (id == 'ce') {
		display.value = '0';
		MemoryNewNumber = true;
	} else if (id === 'c') {
		display.value = '0';
		MemoryNewNumber = true;
		MemoryCarrentNumber = 0;
		MemoryPendingOperation = '';
	}
};

function decimaL(arg) {

	var localDecimalMemory = display.value;
	if (MemoryNewNumber) {
		localDecimalMemory = '0. ';
		MemoryNewNumber = false;
	} else {
		if (localDecimalMemory.indexOf('.') === -1) {
			localDecimalMemory += '.';
		}
	};
	display.value = localDecimalMemory;
	//console.log('клик по decimal');
};

// function fRate(e) {
// 	console.log(e.target.textContent);
// 	var localRate = disply.value;
// 	if (MemoryNewNumber) {
// 		localRate *= MemoryNewNumber;
// 	} else {
// 		localRate = false;
// 	};
// };