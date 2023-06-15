import { useState } from 'react';
import styles from './EmployeeForm.module.css';


export default function EmployeeForm() {

    const [employeeInfo, setEmployeeInfo] = useState({});

    return (
        <>
            <form action="" className=''>
                <h1>SIGNUP FORM</h1>
                <div className={styles.formControl}>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="email">Email</label>
                    <input  type="email" placeholder="Enter Email" />
                </div>
                <div className=''>
                    <label htmlFor="date">Date</label>
                    <input type="date" />
                </div>
                <div>
                    <label htmlFor="experience">Has experience</label>
                    <select name="experience" id="">
                        <option value="">Select</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}
