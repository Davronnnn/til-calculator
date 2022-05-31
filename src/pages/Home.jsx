import React from 'react';

import Card from '../components/Card/Card';
import logo from '../assets/images/logo.svg';

import styles from './Home.module.scss';

const Home = () => {
	return (
		<section className={styles.home__page}>
			<div className={styles.home__page_logo}>
				<img src={logo} alt='spliter logo' width='' height='' />
			</div>
			<Card />
		</section>
	);
};

export default Home;
