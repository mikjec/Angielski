import { studies_pl, studies_eng, gps_pl, gps_eng, sp_el_pl, sp_el_eng, otis_el_pl, otis_el_eng } from './tabs.js'

const menu = document.querySelector('.menu')
const buttons = document.querySelectorAll('.menu__button')
const body = document.querySelector('body')
const questions = document.querySelector('.questions')
const question_q = document.querySelector('.questions__question')
const question_an = document.querySelector('.questions__answer')
const button_next = document.querySelector('.buttons__next')
let tab_pl = []
let tab_eng = []
let i = 0
let counter = 0
let h = []

buttons[0].addEventListener('click', () => {
	tab_pl = studies_pl
	tab_eng = studies_eng
	console.log(tab_eng)
})

buttons[1].addEventListener('click', () => {
	tab_pl = gps_pl
	tab_eng = gps_eng
})

buttons[2].addEventListener('click', () => {
	tab_pl = otis_el_pl
	tab_eng = otis_el_eng
})

buttons[3].addEventListener('click', () => {
	tab_pl = sp_el_pl
	tab_eng = sp_el_eng
})

buttons[4].addEventListener('click', () => {
	tab_pl = [...studies_pl, ...otis_el_pl, ...gps_pl, ...sp_el_pl]
	tab_eng = [...studies_eng, ...otis_el_eng, ...gps_eng, ...sp_el_eng]
})

function appear(element) {
	let rnd = Math.floor(Math.random() * (tab_eng.length - 1 - 0 + 1)) + 0
	h.push(rnd)
	question_q.textContent = `${tab_eng[rnd]}`
	question_an.textContent = `${tab_pl[rnd]}`
	element.style.top = '100%'
	element.style.display = 'inline-block'
	element.style.top = '50%'
	setTimeout(() => {
		element.style.top = '50%'
	}, 200)
}

function dissapear(element) {
	setTimeout(() => {
		element.style.top = '-100%'
		appear(questions)
	}, 200)

	setTimeout(() => {
		element.style.display = 'none'
	}, 500)
}

buttons.forEach(button => {
	button.addEventListener('click', () => dissapear(menu))
})

function nextQ() {
	counter += 1
	question_an.style.color = 'black'
	if (i < tab_eng.length - 1 && counter == 2) {
		i += 1
		let rnd = Math.floor(Math.random() * (tab_eng.length - 1 - 0 + 1)) + 0
		while (h.includes(rnd)) rnd = Math.floor(Math.random() * (tab_eng.length - 1 - 0 + 1)) + 0
		if (!h.includes(rnd)) {
			h.push(rnd)
			question_q.textContent = `${tab_eng[rnd]}`
			question_an.textContent = `${tab_pl[rnd]}`
			question_an.style.color = '#9e9d9d'
			counter = 0
		}
	} else {
		if (counter >= 2) {
			question_q.textContent = `Koniec`
			question_an.textContent = `Koniec`
		}
	}
}

button_next.addEventListener('click', () => nextQ())
