import React, { useEffect, useState } from 'react';
import styles from "./contactDetails.module.css"

import phone from "../images/phone.png"
import email from "../images/email.png"
import location from "../images/location.png"
import gender from "../images/gender.png"
import age from "../images/age.png"
import bin from "../images/bin.png"
import pencil from "../images/pencil.png"
import { useNavigate } from 'react-router-dom';

import { validate } from './Validate';


const ContactDetails = ({ contactDetails }) => {

    const [data, setData] = useState({
        name: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        age: "",
        gender: "male",
        adress: "",
        favorite: false,
        show: false
    });

    useEffect(() => {


    }, [])

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {

        setErrors(validate(data));

    }, [data])

    const changeHandler = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })

    }

    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();


        if (!Object.keys(errors).length) {

            localStorage.setItem(`${data.name} ${data.lastName}`, JSON.stringify(data))
            navigate("/")
            window.location.reload(false);
            localStorage.removeItem(`${contactDetails.name} ${contactDetails.lastName}`)


        }

    }

    const [edit, setEdit] = useState(false);
    const [details, setDetails] = useState(true);

    const deleteHandler = () => {

        localStorage.removeItem(`${contactDetails.name} ${contactDetails.lastName}`);
        window.location.reload(false);

    }

    const editHandler = () => {
        setEdit(true);
        setDetails(false);
        setData({
            name: contactDetails.name,
            lastName: contactDetails.lastName,
            phoneNumber: contactDetails.phoneNumber,
            email: contactDetails.email,
            age: contactDetails.age,
            gender: contactDetails.gender,
            adress: contactDetails.adress,
            favorite: contactDetails.favorite,
            show: false
        })
    }

    return (
        <div>
            <div className={details ? styles.show : styles.hide}>
                <div className={styles.container}>
                    <div className={styles.icon}>
                        <img src={pencil} alt="edit" onClick={editHandler} />
                        <button onClick={deleteHandler}><img src={bin} alt="trash" /></button>
                    </div>
                    <h3>{contactDetails.name} {contactDetails.lastName}</h3>
                    <div className={styles.detail}>
                        <div className={styles.list}>
                            <ul>
                                <li className={styles.contactInfo}><img src={phone} /><div className={styles.contactDetail}><h4><a href={`tel: ${contactDetails.phoneNumber}`}>{contactDetails.phoneNumber}</a></h4><p>PHONE NUMBER</p></div>
                                </li>
                                <li className={styles.contactInfo}><img src={location} /><div><h4>{contactDetails.adress}</h4><p>ADRESS</p></div>
                                </li>
                            </ul>
                            <ul>
                                <li className={styles.contactInfo}><img src={email} /><div><h4><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></h4><p>EMAIL</p></div>
                                </li>
                                <li className={styles.contactInfo}><img src={age} /><div><h4>{contactDetails.age}</h4><p>AGE</p></div>
                                </li>
                                <li className={styles.contactInfo}><img src={gender} /><div><h4>{contactDetails.gender}</h4><p>GENDER</p></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={edit ? styles.show : styles.hide}>
                <form onSubmit={submitHandler} className={styles.editContainer}>
                    <h3>Edit contact</h3>
                    <div className={styles.formFeild}>
                        <label>Name:</label>
                        <input type="text" name="name" value={data.name} onChange={changeHandler} />
                        {errors.name && <div><span>{errors.name}</span></div>}
                    </div>
                    <div className={styles.formFeild}>
                        <label>Last name:</label>
                        <input type="text" name="lastName" value={data.lastName} onChange={changeHandler} />
                        {errors.lastName && <div><span>{errors.lastName}</span></div>}
                    </div>
                    <div className={styles.formFeild}>
                        <label>Phoe number:</label>
                        <input type="number" name="phoneNumber" value={data.phoneNumber} onChange={changeHandler} />
                        {errors.phoneNumber && <div><span>{errors.phoneNumber}</span></div>}
                    </div>
                    <div className={styles.formFeild}>
                        <label>Email:</label>
                        <input type="email" name="email" value={data.email} onChange={changeHandler} />
                        {errors.email && <div><span>{errors.email}</span></div>}
                    </div>
                    <div className={styles.formFeild}>
                        <label>Age:</label>
                        <input type="number" name="age" value={data.age} onChange={changeHandler} />
                        {errors.age && <div><span>{errors.age}</span></div>}
                    </div>
                    <div className={styles.selectFeild}>
                        <label>Gender:</label>

                        <select name="gender" value={data.gender} onChange={changeHandler}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </div>
                    <div className={styles.formFeild}>
                        <label>Adress:</label>
                        <input type="text" name="adress" value={data.adress} onChange={changeHandler} />
                        {errors.adress && <div><span>{errors.adress}</span></div>}
                    </div>
                    <div>
                        <button type='submit' className={styles.save}>Save</button>
                        <a onClick={() => { window.location.reload(false); }} className={styles.cancel}>Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactDetails;