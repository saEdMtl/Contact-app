import { useEffect, useReducer, useState } from "react";
import styles from "./contact.module.css"

import favoritestar from "../images/favorite.png"
import unfavoritestar from "../images/unfavorite.png"

const Contact = ({ contactData, callbackHandle }) => {

    const favoriteHandler = () => {

        contactData.favorite = !contactData.favorite;
        localStorage.setItem(`${contactData.name} ${contactData.lastName}`, JSON.stringify(contactData))
        window.location.reload(false);

    }

    let sag = [];
    const [showContact, setShowContact] = useState([]);

    useEffect(() => {
        sag = JSON.parse(localStorage.getItem(`${contactData.name} ${contactData.lastName}`));
        setShowContact(sag);

        contactData.fullName = `${contactData.name}${contactData.lastName}`;
        localStorage.setItem(`${contactData.name} ${contactData.lastName}`, JSON.stringify(contactData))

    }, [])

    return (
        <div onClick={() => callbackHandle(showContact)} className={styles.item}>
            <div className={styles.container} >
                <h3>{contactData.name} {contactData.lastName}</h3>
                <button onClick={favoriteHandler}>
                    {contactData.favorite ? <img src={favoritestar} alt="favorite"/> : <img src={unfavoritestar} alt="unfavorite"/>}
                </button>
            </div>
        </div>
    );
};

export default Contact;