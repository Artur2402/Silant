import React from 'react'
import '../styles/Contacts.css'
import PhoneIcon from '../assets/images/Telephone-icon.png'
import TelegramIcon from '../assets/images/Telegram-icon.png'

const Contacts = () => {
	return (
		<div className='contacts'>
			<img className='icon' src={PhoneIcon} alt='Telephone' />
			<a href='tel: +78007005265'>+7 (800) 700-52-65</a>
			<img className='icon' src={TelegramIcon} alt='Telegram' />
			<a href='https://t.me/chzsa21/' target='_blank'>
				<div>https://t.me/chzsa21/</div>
			</a>
		</div>
	)
}

export default Contacts