import React, { FC } from "react";
import cl from "./appInput.module.scss";

interface AppInputProps {
	props: any;
}

const AppInput: FC<AppInputProps> = (props: any) => {
	return <input className={cl.appInput} {...props} />;
};

export default AppInput;
