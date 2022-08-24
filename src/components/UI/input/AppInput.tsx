import React, { FC } from 'react';
import cl from './appInput.module.scss';

const AppInput: FC = (props) => {
	return (
		<input className={cl.appInput} {...props} />
	)
}

export default AppInput;
