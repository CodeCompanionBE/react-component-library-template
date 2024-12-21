export default function Button({
	children,
	...props
}: React.HTMLAttributes<HTMLButtonElement>) {
	return <button {...props}>{children}</button>;
}
