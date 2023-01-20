import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Contact from "./Contact";
import styles from "./homepage.module.css"
import ContactDetails from "./ContactDetails";
import MainPage from "./MainPage";

function Homepage() {

    let keys = [];

    var contacts = [];
    let theContacts = [];
    let favoriteContacts = [];
    let unfavoriteContacts = [];
    const [unfavoriteState, setunfavoriteState] = useState([]);
    const [favoriteState, setfavoriteState] = useState([]);

    const [contactDetails, setContactDetails] = useState([]);

    const [show, setShow] = useState(true);
    const [hide, setHide] = useState(false);

    const callbackHandle = (payload) => {
        setContactDetails(payload);
    }

    const [searchItem, setSearchItem] = useState({
        text: ""
    });



    useEffect(() => {

        for (let i = 0; i < localStorage.length; i++) {

            keys[i] = localStorage.key(i);
            keys.sort()

        }
        for (let i = 0; i < localStorage.length; i++) {

            contacts.push(JSON.parse(localStorage.getItem(keys[i])))

            if (contacts[i].favorite) {

                favoriteContacts.push(contacts[i])
                setfavoriteState(favoriteContacts)
            } else {
                unfavoriteContacts.push(contacts[i])
                setunfavoriteState(unfavoriteContacts)
            }

        }

    }, []);

    const changeHanddler = (e) => {

        for (let i = 0; i < localStorage.length; i++) {

            keys[i] = localStorage.key(i);
            keys.sort()

        }

        for (let i = 0; i < localStorage.length; i++) {

            contacts.push(JSON.parse(localStorage.getItem(keys[i])))

        }
        
        setSearchItem({ ...searchItem, text: e.target.value });
        theContacts = contacts.filter(contact => {
            return contact.fullName.toLowerCase().includes(e.target.value);
        })
        setfavoriteState([])
        setunfavoriteState([])
        contacts = theContacts;


        for (let i = 0; i < contacts.length; i++) {

            if (contacts[i].favorite) {
                favoriteContacts.push(contacts[i])
                setfavoriteState(favoriteContacts)
            } else {
                unfavoriteContacts.push(contacts[i])
                setunfavoriteState(unfavoriteContacts)
            }
        }


    }

    return (
        <div className={styles.all}>
            <div className={styles.contacts}>
                <div className={styles.logo}>
                    <h1 className={styles.title}>Contacts</h1>
                </div>
                <div className={styles.searchBox}>
                    <input placeholder="Search ..." className={styles.search} value={searchItem.text} name="text" onChange={changeHanddler} />
                    <p> {theContacts} </p>
                    <Link to="/addContact" className={styles.addContact}>+</Link>
                </div>
                <div className={styles.contactNames}>
                    <h4 className={styles.myContacts}>My Contacts</h4>
                    <div onClick={() => { setShow(false); setHide(true); }}>
                        {
                            favoriteState.map((item) =>
                                <Contact
                                    key={item.fullName}
                                    contactData={item}
                                    callbackHandle={callbackHandle} />
                            )
                        }
                    </div>
                    <div onClick={() => { setShow(false); setHide(true); }}>
                        {
                            unfavoriteState.map((contact) =>
                                <Contact
                                    key={contact.fullName}
                                    contactData={contact}
                                    callbackHandle={callbackHandle}
                                />
                            )

                        }
                    </div>
                </div>
            </div>
            <div className={show ? styles.show : styles.hide}>
                <MainPage />
            </div>
            <div className={hide ? styles.show : styles.hide}>
                <ContactDetails contactDetails={contactDetails} />
            </div>
        </div>
    );
}

export default Homepage;