import styles from './Button.module.scss';

const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			className={styles.button}
			style={props.width ? { width: props.width } : {}}>
			<span className={styles.button__text}>{props.text}</span>
		</button>
	);
};

export default Button;
