import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

export type ButtonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	variant?: 'primary' | 'secondary';
};

export default function Button({
	children,
	className,
	type = 'button',
	variant = 'primary',
	...props
}: ButtonProps) {
	return (
		<button
			className={clsx(className, {
				[styles.button]: true,
				[styles.primary]: variant === 'primary',
				[styles.secondary]: variant === 'secondary',
			})}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
}
