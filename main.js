window.onload = function () {
	// Массив гласных букв
	const letters = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"]
	// Текст ошибки
	const errorMessage = 'Необходимо поставить восклицательный знак в конце строки!'
	// Кнопка "Поиск"
	const btn = document.getElementById('searchButton')

	btn.onclick = function() {
		// Текстовый блок для записи количества гласных
		const output = document.getElementById('output')
		// Текстовый блок для записи ошибки
		const errorDiv = document.getElementById('errorBlock')
		// Буквы, введенные пользователем
		const val = document.getElementById('input').value
		// Количество гласных
		const count = searching(val)
		
		if (count > -1) {
			errorDiv.innerHTML = ''
			success(count, output)
		} else {
			failure(errorDiv)
		}
	}
	
	// Заполнение поля количеством найденных гласных
	function success(count, output) {
		output.innerHTML = count
	}
	
	// Исключение (некорректный ввод)
	function failure(errorDiv) {
		output.innerHTML = ''
		errorDiv.innerHTML = errorMessage
	}
	
	// Перебор введенного текста пользователем
	function searching(string) { 
		let count = 0
		array = string.split('')
		
		if (array[array.length - 1] === '!') { // Проверка на обязательный символ '!' в конце строки
			
			array.forEach(item => { // Перебор всех букв в введенной строке
				item.toLowerCase()
				
				if (letters.includes(item)) { 
					count++ 
				} 
			})
		  
			return count
		} else {
			return -1
		}
	}
}


	
	