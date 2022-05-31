import React, { useState, useEffect } from 'react';
import styles from './Card.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import dollarSvg from '../../assets/images/icon-dollar.svg';
import personSvg from '../../assets/images/icon-person.svg';
const Card = () => {
	const [bill, setBill] = useState(0);
	const [tip, setTip] = useState(1);
	const [person, setPerson] = useState();
	const [tipResult, setTipResult] = useState();
	const [total, setTotal] = useState();
	const [personError, setPersonError] = useState(false);

	const regEx = /^[0-9]*\.?[0-9]*$/;
	const billHandler = (e) => {
		if (regEx.test(e.target.value)) {
			setBill(e.target.value);
		}
	};
	const tipInputHandler = (e) => {
		if (regEx.test(e.target.value)) {
			setTip(e.target.value);
		}
	};
	const personHandler = (e) => {
		console.log(e.target.value);
		if (e.target.value < 1) {
			setPerson(e.target.value);
			setPersonError(true);
		} else {
			setPersonError(false);
			setPerson(e.target.value);
		}
	};
	const resetHandler = () => {
		setBill('');
		setTip('');
		setPerson('');
		setTipResult('');
		setTotal('');
	};
	useEffect(() => {
		if (person >= 1) {
			setTipResult(((bill * tip) / 100 / person).toFixed(2));
			setTotal(((bill * (1 + tip / 100)) / person).toFixed(2));
		}
	}, [bill, tip, person]);

	return (
		<div className={styles.card}>
			<section className={styles.card__leftside}>
				<div className={styles.bill_input}>
					<Input
						onChange={billHandler}
						value={bill}
						id='bill'
						label='Bill Amount'
						placeholder='$0.00'
						img={dollarSvg}
						alt='dollar-symbol'
					/>
				</div>
				<div className={styles.tip_paragraph}>select tip</div>
				<div className={styles.tip_inputs}>
					<Button onClick={() => setTip(5)} text='5%' />
					<Button onClick={() => setTip(10)} text='10%' />
					<Button onClick={() => setTip(15)} text='15%' />
					<Button onClick={() => setTip(25)} text='25%' />
					<Button onClick={() => setTip(50)} text='50%' />
					<input
						type='text'
						placeholder='Custom'
						onChange={tipInputHandler}
					/>
				</div>
				<div className={styles.people_input}>
					<Input
						id='bill'
						label='Bill Amount'
						error={personError}
						img={personSvg}
						alt='dollar-symbol'
						onChange={personHandler}
						value={person}
					/>
				</div>
			</section>
			<section className={styles.card__rightside}>
				<div className={styles.card__rightside_info}>
					<div className={styles.card__rightside_info_title}>
						<div>
							<h4>Tip amount</h4>
							<span>/person</span>
						</div>
						<p>${tipResult || 0}</p>
					</div>
					<div className={styles.card__rightside_info_title}>
						<div>
							<h4>Tip amount</h4>
							<span>/person</span>
						</div>
						<p>${total || 0}</p>
					</div>
				</div>
				<Button onClick={resetHandler} text='reset' width='100%' />
			</section>
		</div>
	);
};

export default Card;
