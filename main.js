window.onload = function() {
	// Массив гласных букв
	const letters = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"]
	// Текст ошибки
	const errorMessage = 'Поставьте восклицательный знак в конец строки!'
	 
	// Слушаем событие клика
	$("#searchButton").on("click", findValue())

	// Текст, введенный пользователем
	function findValue() {
		const val = $("#input").val().split("")
		searching(val)
	}

	// Перебор введенного текста пользователем
	function searching(string) { 
		let count = 0
		
		if (string[string.length - 1] === '!') {
			
			string.forEach(item => {
				item.toLowerCase()
				if (letters.includes(item)) { 
					count++ 
				} 
			}) 
		  
			success(count)
		} else {
			showAlert()
		}
	}

	// Отображение ошибки
	function showAlert() {
		alert(errorMessage)
	}

	// Заполнение поля количеством найденных гласных
	function success(count) {
		$("#output").html(count)
	}
}