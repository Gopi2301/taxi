import React, { useState } from 'react'
import { Button, FormControl, TextField, ThemeProvider, createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';
// import { makeStyles } from '@material-ui/core/styles';

const Hero = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const handleSubmit = () => {
        console.log(from, to)
    }
    const handleFromChange = () => {
        setFrom(event.target.value)
    }
    const handleToChange = () => {
        setTo(event.target.value)
    }
    return (
        <section className='hero container bg-img'>
            <div className='hero__form'>
                <h1 className='title'>Book One Way taxi service</h1>
                <h3 className='desc'>We are providing one way taxi, Outstation cabs, drop taxi and Airport Taxi service</h3>
                <FormControl>
                    <TextField InputProps={{ className: 'hero__form-field' }} margin="dense" id="outlined-basic" label="From" variant="outlined" onChange={handleFromChange} />
                    <TextField color="primary" InputProps={{ className: 'hero__form-field' }} margin="dense" id="outlined-basic" label="To" onChange={handleToChange} variant="outlined" />
                    <button className="form-button btn-text" onClick={handleSubmit}>Get Estimate</button>
                </FormControl>
            </div>
            <div className='hero__image-wrapper'>
                <img src="/hero.svg" alt="" srcset="" />
            </div>
        </section>
    )
}

export default Hero
