"use strict";

let name = prompt('Введіть ваше імя'); {

	if (name == 'Імя') {

		let password = prompt('Введіть пароль'); {

			if (password == '') {
				let passwordCod = prompt('Ви нічого не ввели');
			}
			else if (password === 'LOGOS') {
				let passwordCod = prompt('Ласкаво просимо');
			}
			else if (password == null) {
				let passwordCod = prompt('Вхід скасований');
			}
			else {
			 let passwordCod = prompt('Пароль не правильний!');
			}
		}
	}

	else if (name == null) {
		let password = prompt('Вхід скасований');
	}
	else if (name == '') {
		let password = prompt('Ви нічого не ввели');
	}
	else {
		let password = prompt('Я вас не знаю');
	}
}
