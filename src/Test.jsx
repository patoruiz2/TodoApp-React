import React, { useState } from 'react';
const Test = () => {
    const [values, setvalues] = useState({
        isGoing: false,
        numberOfGuests: 0
    });

    const handleInputChange = ({ target }) => {
        console.log(target.type);
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        console.log(name,value);
        setvalues({
            ...values,
            [name]: value
        })
    }
    return (
        <>
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing" type="checkbox"
                        checked={values.isGoing}
                        onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests" type="number"
                        value={values.numberOfGuests}
                        onChange={handleInputChange} />
                </label>
            </form>
        </>
    );
};


export default Test;
