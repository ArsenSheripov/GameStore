import React, { FC } from 'react'
import cl from './appButton.module.scss';

interface AppButtonProps {
	children: any
}

const AppButton: FC<AppButtonProps> = ({ children, ...props }) => {
	return (
		<button {...props} className={cl.appBtn}>
			{children}
		</button>
	)
}

export default AppButton;
