// Import the commentItems array from commentItems.js using ES module syntax
const commentItems = [
	{
		name: 'นันทภัทร',
		comment:
			'เครื่องรางชิ้นนี้สวยมากครับ เพิ่งได้รับพัสดุมาเองครับ ยังไม่ทันใดผมก็โชคดีตั้งแต่หัววันเลยครับ ผมถูกหวยครับ ครั้งแรกของผมเลย',
	},
	{
		name: 'พรทิพย์',
		comment:
			'เครื่องรางชิ้นนี้สวยมากๆค่ะ ดิฉันเพิ่งได้รับมา รู้สึกถึงพลังงานบวกที่แผ่ไปตามร่างกาย แถมดิฉันยังถูกลอตเตอรี่ด้วยค่ะ นี่เป็นครั้งแรกของดิฉันเลย',
	},
	{
		name: 'พงษ์เทพ',
		comment:
			'ผมอยากมาแชร์ประสบการณ์ชีวิตของผมบ้าง และให้ทุกคนพิจารณาเอาเอง เมื่อก่อนนี้ชีวิตของผมเต็มไปด้วยปัญหา ผมเครียดมากๆและติดเหล้ามาเกือบปี แต่หลังจากที่ผมได้ทำตามคำแนะนำของแม่หมอ ชีวิตของผมก็ค่อยๆดีขึ้น หลังจากนั้นผมก็ได้อธิษฐานทุกวันในขณะที่กำลังสวมเครื่องราง ตอนนี้ผมมีร้านก๋วยเตี๋ยวอยู่แถวๆปทุมธานี ลูกค้าเข้าตลอดจนผมแทบไม่มีเวลาว่าง อีกไม่นานผมก็จะใช้หนี้หมด แล้วผมก็ยังอธิษฐานตลอดให้ผมมีโชคลาภทางการเงิน ให้เงินไหลมาเทมา',
	},
	{
		name: 'รัฐภูมิ',
		comment:
			'ตอนเด็กๆผมเคยไปปฏิบัติธรรมที่ทิเบต ผมจำได้ว่าพวกนักธุรกิจต่างชาติที่นั่นใส่เครื่องรางชิ้นนี้กันแทบทุกคน',
	},
	{
		name: 'ดารารัตน์',
		comment:
			'หนูกับสามีหย่ากันเมื่อไม่กี่ปีที่ผ่านมา เรามีลูกด้วยกัน 1 คน หนูได้ลองทำตามคำแนะนำของคุณ หนูตัดสินใจสวมเครื่องรางนี้เอาไว้กับตัวตลอดเวลา หลังจากนั้น 2-3 สัปดาห์ สามีของหนูที่หย่าร้างกันไปก็ก่อตั้งธุรกิจของเขา แถมยังขายของดีกว่าเมื่อก่อนมาก ได้เดือนละหลายแสนบาทเลยค่ะ หลังจากที่ชำระหนี้ที่กู้ร่วมกันกับสามีเรียบร้อย หนูกับสามีก็กลับมาอยู่ด้วยกัน และมีแผนที่จะแต่งงานใหม่ในไม่ช้า ',
	},
	{
		name: 'ตั๊กแตน',
		comment:
			'เครื่องรางนี้สุดยอดไปเลยค่ะ รู้สึกถึงพลังบวก ใครที่ตั้งใจเปลี่ยนชีวิตตัวเองจะพบแต่ความเจริญรุ่งเรือง',
	},
	{
		name: 'วิทยา',
		comment:
			'ผมเพิ่งสั่งไปเมื่อวานนี้ แล้วเมื่อเช้านี้ผมก็ได้รับเครื่องรางแล้ว มันสวยมากๆครับ แค่มองดูก็รู้สึกได้ถึงพลังงานบวก',
	},
	{
		name: 'พรพิมล',
		comment:
			'ดิฉันขอเล่าประสบการณ์ตรงเกี่ยวกับเครื่องรางชิ้นนี้ค่ะ ลูกสาวของดิฉันเป็นคนที่ขยันเรียนเก่ง แต่ไม่ค่อยมีดวงเรื่องความรักและการงานสักเท่าไหร่ ดิฉันจึงตัดสินใจสั่งซื้อเครื่องรางชิ้นนี้ จากเว็บนี้ ตอนแรกดิฉันก็ไม่เชื่อว่ามันจะเปลี่ยนชีวิตของฉันและลูกสาวไปตลอดกาล แต่ก็คิดว่าซื้อมาลองก็ไม่เสียหาย ผ่านไปไม่ถึงเดือน ลูกสาวของดิฉันก็ได้งานใหม่ในบริษัทต่างชาติ เงินเดือน 50,000 บาท และเธอก็มีแฟนหนุ่มที่มีชีวิตมั่นคงและกำลังจะวางแผนแต่งงานกันในไม่ช้า นี่คือประสบการณ์ตรงจากดิฉันที่อยากแบ่งปันกับคนที่กำลังลังเลที่จะตัดสินใจซื้อเครื่องรางชิ้นนี้ สำหรับที่ฉันแล้วเครื่องรางชิ้นนี้ถือเป็นของขวัญล้ำค่ามากๆค่ะ',
	},
	{
		name: 'ชุติมา',
		comment: 'หนูชอบเครื่องรางชิ้นนี้มากๆค่ะ',
	},
	{
		name: 'กาญจนา',
		comment:
			'สั่งไปแล้วค่ะ พนักงานแนะนำดีมากๆ แถมยังมีส่วนลดด้วย รอพัสดุถึงเลยค่ะ',
	},
	{
		name: 'ณัฐณิชา',
		comment:
			'ดิฉันสั่งเครื่องรางมาจากเว็บไซต์นี้เหมือนกันค่ะ ลูกๆของดิฉันต่างแยกทางกันไปเติบโตแล้ว และสามีของดิฉันก็เสียชีวิตไปเมื่อไม่กี่ปีที่ผ่านมา มันยากมากๆสำหรับดิฉันที่จะต้องรับมือกับงานบ้านและทำงานไปด้วยในเวลาเดียวกัน แต่หลังจากที่ดิฉันได้สั่งซื้อเครื่องรางชิ้นนี้มาและได้สวมใส่อยู่ตลอดเวลา ก็ได้มีผู้ชายคนหนึ่งปรากฏตัวขึ้น เขาดีกับดิฉันมากๆ และดิฉันตกหลุมรักเขา พวกเราอยู่ด้วยกันอย่างมีความสุข ดิฉันไม่ต้องทำงานงกๆอยู่คนเดียวอีกต่อไป ขอสามีคนใหม่ของดิฉันมีรายได้เพียงพอจนพวกเราไม่จำเป็นต้องกังวลเรื่องการใช้จ่ายเลยค่ะ',
	},
]
const field = document.querySelector('.textarea-com')
const feild = document.querySelector('.textarea-name')
const btn = document.querySelector('.btn')
const clear = document.getElementById('clear')
const commentsContainer = document.querySelector('.comments-container')
const commentForm = document.getElementById('commentForm')

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function createElementMarkup(markup) {
	return markup
		.map(({ name, comment }, index) => {
			const randlike = getRandomInt(1, 20) // Генерация случайного числа лайков
			return `
        <li class="gallery__item">
          <div class="comment__content">
            <h2 class="comment__name">${name}</h2>
            <div class="comment__text">
              ${comment}
            </div>
            <p class="comment__details">
              <button class="comments__like" id="like-${index}">
                <img src="images/like-btn.svg" alt="">
                <span class="likes">${randlike}</span>
                ชอบ
              </button>
              <button class="comments__dislike" id="dislike-${index}">
                <img src="images/dislike-btn.svg" alt="">
                <span class="dislikes">0</span>
                ฉันไม่ชอบ
              </button>
            </p>
          </div>
        </li>`
		})
		.join('')
}

function updateComments() {
	commentsContainer.innerHTML = createElementMarkup(commentItems)
}

updateComments() // Инициализация комментариев

field.addEventListener('focus', function () {
	this.placeholder = ''
	this.style.borderColor = '#333'
	btn.style.display = 'block'
})

feild.addEventListener('focus', function () {
	this.placeholder = ''
	this.style.borderColor = '#333'
	btn.style.display = 'block'
})

field.addEventListener('blur', function () {
	this.placeholder = backUp
	this.style.borderColor = '#aaa'
})

clear.addEventListener('click', function () {
	btn.style.display = 'none'
	field.value = ''
	feild.value = ''
})

commentsContainer.addEventListener('click', function (event) {
	const targetButton = event.target.closest('button')
	event.preventDefault()
	if (!targetButton) return

	const isLikeButton = targetButton.classList.contains('comments__like')
	const isDislikeButton = targetButton.classList.contains('comments__dislike')

	if (isLikeButton || isDislikeButton) {
		const commentDetails = targetButton.closest('.comment__details')

		if (commentDetails.classList.contains('disabled')) {
			return
		}

		const likesSpan = commentDetails.querySelector('.likes')
		const dislikesSpan = commentDetails.querySelector('.dislikes')

		if (isLikeButton) {
			const currentLikes = parseInt(likesSpan.textContent, 10)
			likesSpan.textContent = currentLikes + 1
		} else if (isDislikeButton) {
			const currentDislikes = parseInt(dislikesSpan.textContent, 10)
			dislikesSpan.textContent = currentDislikes + 1
		}

		commentDetails.classList.add('disabled')
	}
})

commentForm.addEventListener('submit', function (event) {
	event.preventDefault()

	const textareaCom = this.querySelector('.textarea-com')
	const textareaName = this.querySelector('.textarea-name')
	const comment = textareaCom.value.trim()
	const name = textareaName.value.trim()
	if (comment === '') {
		return
	}

	const newComment = {
		name: name,
		comment: comment,
	}

	commentItems.unshift(newComment)

	updateComments()

	textarea.value = ''
	btn.style.display = 'none'
})
