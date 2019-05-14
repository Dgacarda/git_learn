window.onload = function () {
	// Массив гласных букв
	const letters = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"]
	// Текст ошибки
	const errorMessage = 'Поставьте восклицательный знак в конец строки!'
	// Кнопка "Поиск"
	const btn = document.getElementById('searchButton')

	btn.onclick = function() {
		// Текстовый блок для записи количества гласных
		const output = document.getElementById('output')
		// Буквы, введенные пользователем
		const val = document.getElementById('input').value
		// Количество гласных
		const count = searching(val)
		
		success(count, output)
	}
	
	// Заполнение поля количеством найденных гласных
	function success(count, output) {
		output.innerHTML = count
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
			showAlert()
			return ''
		}
	}
	
	// Отображение ошибки
	function showAlert() {
		alert(errorMessage)
	}
}


	
	