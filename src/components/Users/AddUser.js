import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    //

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please entere a valid name and age non-empty values).'
            })
        }
        if (+enteredAge < 1){
            setError({
                title: 'Invalid input',
                message: 'Please entere a valid '
            });
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) =>  {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) =>  {
        setEnteredAge(event.target.value);
    }

    return (
        <div>
            {/* {error  && <ErrorModal title="An error occured!" message="Something went wrong!" />} */}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username"> Username </label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />

                    <label htmlFor="age"> Age (Years) </label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />

                    <Button type="submit"> Add User</Button>

                </form>
            </Card>

        </div>
    );
};

export default AddUser;