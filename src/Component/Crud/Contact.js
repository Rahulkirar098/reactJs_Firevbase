import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import firebase from "../../firebase";


const Contact = () => {
    const initialfieldvalue = {
        fullname: '',
        email: '',
        message: '',
    }

    const [values, setValues] = useState(initialfieldvalue)

    const handleonchange = (e) => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(values)
        const contactRef = firebase.database().ref('contact');
        const contact = {
            values,
        }
        contactRef.push(contact)
    }

    return (
        <Box style={{
            width: '500px',
            border: '2px solid black',
            textAlign: 'center'
        }}>
            <Typography variant="h2" style={{ color: 'orange' }}>
                Firebase <span style={{ color: 'green' }}>CRUD</span>
            </Typography >
            <form onSubmit={handlesubmit}>
                <br />
                <TextField label="Full Name"
                    style={{ width: '90%' }}
                    name="fullname"
                    value={values.fullname}
                    onChange={handleonchange}
                />

                <br /><br /><br />
                <TextField label="Email"
                    style={{ width: '90%' }}
                    name="email"
                    value={values.email}
                    onChange={handleonchange}
                />

                <br /><br /><br />
                <TextField label="Message"
                    style={{ width: '90%' }}
                    name="message"
                    value={values.message}
                    onChange={handleonchange}
                />

                <br /><br /><br />
                <Button type="Submit"> Submit </Button>
            </form>
        </Box>
    )
}

export default Contact
