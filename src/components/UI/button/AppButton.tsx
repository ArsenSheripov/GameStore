import React, { FC } from "react";
import cl from "./appButton.module.scss";

interface AppButtonProps {
    children?: any;
    props?: any;
    type?: string;
    onClick?: any;
}

const AppButton: FC<AppButtonProps> = ({ children, type, ...props }) => {
    return (
        <button
            {...props}
            className={type === "primary" ? cl.appBtnPrimary : cl.appBtn}
        >
            {children}
        </button>
    );
};

export default AppButton;
