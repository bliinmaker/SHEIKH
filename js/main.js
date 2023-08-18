// timer
document.addEventListener('DOMContentLoaded', function () {
	// конечная дата
	const deadline = new Date(
		new Date().getFullYear(),
		new Date().getMonth() + 1,
		01
	)
	console.log(deadline - new Date())
	// id таймера
	let timerId = null
	// склонение числительных
	function declensionNum(num, words) {
		return words[
			num % 100 > 4 && num % 100 < 20
				? 2
				: [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
		]
	}
	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
	function countdownTimer() {
		const diff = deadline - new Date()
		if (diff <= 0) {
			clearInterval(timerId)
		}
		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0
		// const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0
		$days.textContent = days < 10 ? '0' + days : days
		$hours.textContent = hours < 10 ? '0' + hours : hours
		$minutes.textContent = minutes < 10 ? '0' + minutes : minutes
		// $seconds.textContent = seconds < 10 ? '0' + seconds : seconds
		$days.dataset.title = declensionNum(days, ['день', 'дня', 'дней'])
		$hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов'])
		$minutes.dataset.title = declensionNum(minutes, [
			'минута',
			'минуты',
			'минут',
		])
		// $seconds.dataset.title = declensionNum(seconds, [
		// 	'секунда',
		// 	'секунды',
		// 	'секунд',
		// ])
	}
	// получаем элементы, содержащие компоненты даты
	const $days = document.querySelector('.timer__days')
	const $hours = document.querySelector('.timer__hours')
	const $minutes = document.querySelector('.timer__minutes')
	// const $seconds = document.querySelector('.timer__seconds')
	// вызываем функцию countdownTimer
	countdownTimer()
	// вызываем функцию countdownTimer каждую секунду
	timerId = setInterval(countdownTimer, 1000)
})

// video
const video = document.getElementById('review__video')
const play_pause = document.getElementById('review__play')

play_pause.addEventListener('click', PlayPauseVideo)
video.addEventListener('click', PlayPauseVideo)
function PlayPauseVideo(){
	if(video.paused){
		// play_pause.innerHTML='⏸'
		play_pause.innerHTML=''
		video.play()
	} else{
		// play_pause.innerHTML='►'
		play_pause.innerHTML='<img src="./static/img/play.svg" alt="">'
		video.pause()
	}
}

// slider
