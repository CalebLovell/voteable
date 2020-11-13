import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	style?: string;
}

export const Container: React.FC<Props> = ({ children, style = `` }) => {
	return <div className={`px-6 md:px-20 ${style}`}>{children}</div>;
};
