// import './ControlledForm.css'
import { useEffect, useRef, useState } from 'react';
import styles from './UncontrolledForm.module.css'


export default function ControlledForm() {

    const [userInfo,  setUserInfo] = useState({});
    const [isFormSubmitted, setFormSubmitted] = useState(false)
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const pwdRef = useRef(null);

    // const handleSubmitForm = (event) => {
    //     event.preventDefult();
    //     console.log('Called on submit!');
    // }

    useEffect(() => {
        console.log('App loading')

        return () => {
            console.log('Component is destroyed');
        } 
    }, [isFormSubmitted]) 

    const handleSubmitForm = (event) => {
        event.preventDefult();
        setUserInfo({
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: pwdRef.current.vale

        })

        setFormSubmitted((prevState) => {
            !prevState
        })
    }

    useEffect(() => {
        console.log('App ascascasc...')

    },[]) 

    return (
        <>
            <h1>Uncontrolled Form</h1>
            <form action="" className={styles.formContainer} onSubmit={handleSubmitForm}>
                <h1>SIGNUP FORM</h1>

                <div className={styles.formControl}>
                    <label htmlFor="">Name</label>
                    <input ref={nameRef} type="text" placeholder="Enter Name" />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="email">Email</label>
                    <input ref={emailRef} type="email" placeholder="Enter Email" />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="password">Email</label>
                    <input ref={pwdRef} type="password" placeholder="Enter Password" />
                </div>
                <button className="signupBtn">Submit</button>
            </form>
            <p>
                Name:{userInfo.name} Email:{userInfo.email} Pwd:{userInfo.password}
            </p>
        </>


    )
}
