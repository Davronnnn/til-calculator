import styles from './Input.module.scss';
const Input = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.label_wrapper}>
				<label htmlFor={props.id}>{props.label}</label>
				{props.error && <p>Can't be zero</p>}
			</div>
			<div className={styles.input_wrapper}>
				<input
					onChange={props.onChange}
					value={props.value}
					type={props.type ? props.type : 'text'}
					id={props.id}
					name={props.id}
					placeholder={props.placeholder}
					min='0'
					step='0.01'
				/>
				{!props.custom && <img src={props.img} alt={props.alt} />}
			</div>
		</div>
	);
};

export default Input;
