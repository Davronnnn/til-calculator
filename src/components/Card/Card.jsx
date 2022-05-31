import React from 'react';
import styles from './Card.module.scss';

const Card = () => {
	return (
		<div className={styles.card}>
			<section className={styles.card__leftside}></section>
			<section className={styles.card__rightside}></section>
		</div>
	);
};

export default Card;
