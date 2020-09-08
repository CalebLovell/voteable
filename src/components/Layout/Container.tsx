import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	outerStyle?: string;
	innerStyle?: string;
}

export const Container: React.FC<Props> = ({ children, outerStyle = ``, innerStyle = `` }) => {
	return (
		<div className={`w-full flex justify-center ${outerStyle}`}>
			<div className={`w-11/12 ${innerStyle}`}>{children}</div>
		</div>
	);
};
