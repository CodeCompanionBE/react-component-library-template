import { Children, cloneElement, isValidElement, useState } from 'react';
import type { HTMLAttributes, JSX } from 'react';

function Collapsible({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{Children.map(children, (child) => {
				if (isValidElement(child) && child.type === Collapsible.Toggle) {
					// @ts-expect-error - `child` is a valid element
					return cloneElement<typeof Collapsible.Toggle>(child, {
						onClick: () => setIsOpen(!isOpen),
					});
				}

				return child;
			})}
		</div>
	);
}

Collapsible.Toggle = function CollapsibleToggle({
	children,
	onClick,
}: {
	children: React.ReactNode;
	onClick: HTMLAttributes<HTMLButtonElement>['onClick'];
}): JSX.Element {
	return (
		<button type="button" onClick={onClick}>
			{children}
		</button>
	);
};

Collapsible.Content = function CollapsibleContent({
	children,
}: { children: React.ReactNode }) {
	return <div>{children}</div>;
};

export default Collapsible;
