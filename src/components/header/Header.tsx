import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, STORE_ROUTE } from '../../router/consts';
import cl from './header.module.scss';

const Header: FC = () => {
	return (
		<header className={cl.header}>
			<div className={`${cl.header__container} container`}>
				<div>Game Store</div>
				<div>Search</div>
				<div className={cl.header__nav}>
					<Link to={HOME_ROUTE}>Home</Link>
					<Link to={STORE_ROUTE}>Store</Link>
				</div>
			</div>
		</header>
	)
}

export default Header;