import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { validate } from './Validate';

import styles from "./addContact.module.css";

function AddContact() {

    const [data, setData] = useState({
        name: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        age: "",
        gender: "male",
        adress: "",
        favorite: false,
        show: false,
        fullName: ""
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {

        setErrors(validate(data));


    }, [data, touched])

    const changeHandler = (e) => {


        setData({ ...data, [e.target.name]: e.target.value })


    }

    const focusHandler = (e) => {

        setTouched({ ...touched, [e.target.name]: true })

    }

    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();


        if (!Object.keys(errors).length) {

            localStorage.setItem(`${data.name} ${data.lastName}`, JSON.stringify(data))
            navigate("/")
            window.location.reload(false);


        } else {
            setTouched({
                name: true,
                lastName: true,
                phoneNumber: true,
                email: true,
                age: true,
                female: true,
                male: true,
                adress: true,
            })
        }

    }




    return (
        <div className={styles.main}>
            <div className={styles.banana}>
                <div className={styles.logo}>
                    <h1>Contact Form</h1>
                    <p>with</p>
                    <strong>saEd App</strong>
                </div>
                <form onSubmit={submitHandler} className={styles.container}>
                    <h3>Add new contact</h3>
                    <div className={styles.formFeild}>
                        <label>Name:</label>
                        <input type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler} />
                        {errors.name && touched.name && <div><span>{errors.name}</span></div>}
                    </div>
                    <div className={styles.formFeild}>
                        <label>Last name:</label>
                        <input type="text" name="lastName" value={data.lastName} onChange={changeHandler} onFocus={focusHandler} />
                        {errors.lastName && touched.lastName && <div><span>{errors.lastName}</span></div>}
                    </div>
                    <div className={styles.formFeild}>
                        <label>Phoe number:</label>
                        <input type="number" name="phoneNumber" value={data.phoneNumber} onChange={changeHandler} onFocus={focusHandler} />
                        {errors.phoneNumber && touched.phoneNumber && <div><span>{errors.phoneNumber}</span></div>}
                    </div>
                    <div className={styles.formFeild}>
                        <label>Email:</label>
                        <input type="email" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler} />
                        {errors.email && touched.email && <div><span>{errors.email}</span></div>}
                    </div>
                    <div className={styles.formFeild}>
                        <label>Age:</label>
                        <input type="number" name="age" value={data.age} onChange={changeHandler} onFocus={focusHandler} />
                        {errors.age && touched.age && <div><span>{errors.age}</span></div>}
                    </div>
                    <div className={styles.selectFeild}>
                        <label>Gender:</label>

                        <select name="gender" value={data.gender} onChange={changeHandler} onFocus={focusHandler}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </div>
                    <div className={styles.formFeild}>
                        <label>Adress:</label>
                        <input type="text" name="adress" value={data.adress} onChange={changeHandler} onFocus={focusHandler} />
                        {errors.adress && touched.adress && <div><span>{errors.adress}</span></div>}
                    </div>
                    <div>
                        <button type='submit' >Save</button>
                        <Link to="/" className={styles.cancel}>Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddContact;