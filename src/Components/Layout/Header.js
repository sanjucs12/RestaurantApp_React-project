import { Fragment } from "react";
import foodImage from '../../Assets/food.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

function Header (props){
    return <Fragment>
        <header className={classes.header}>
            <h1>React Foods</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={foodImage} alt="Delicious food on Table"></img>
        </div>
    </Fragment>
}

export default Header;