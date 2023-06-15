// import './ControlledForm.css'
import { useState } from 'react';
import styles from './ControlledForm.module.css'


export default function ControlledForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitForm = (event) => {
        event.preventDefult();
        console.log('Called on submit!');
    }

    return (
        <>
            <h1>Controlled Form</h1>
            <form action="" className={styles.formContainer} onSubmit={handleSubmitForm}>
                <h1>SIGNUP FORM</h1>
                <div className={styles.formControl}>
                    <label htmlFor="">Name</label>
                    <input onChange={(event) => setName(event.target.value)} value={name} type="text" placeholder="Enter Name" />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="email">Email</label>
                    <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" placeholder="Enter Email" />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="password">Email</label>
                    <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" placeholder="Enter Password" />
                </div>
            </form>
        </>


    )
}
