import React from 'react';
import styles from "./mainpage.module.css"
import pic from "../images/home.png"

const MainPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h4 className={styles.title}>saEd Contact</h4>
                <img src={pic} alt="pic" className={styles.pic} />
            </div>
        </div>
    );
};

export default MainPage;