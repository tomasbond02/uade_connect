'use client'

import { Button, FormControl, Input, InputLabel, TextField } from "@mui/material";
import React from "react";
import "./styles.css";

export default function LoginForm() {
    const [showPassword, setShowPassword] = React.useState(false);


    return (
        <div>
            <div className="loginFormStyle">
                <TextField
                    id="standard-required"
                    label="User"
                    variant="standard"
                    sx={{ width: '25ch' }}
                />
                <FormControl sx={{ width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                    />
                </FormControl>
                <Button variant="contained" sx={{width: '25ch', m: 2 }}>Contained</Button>
            </div>
        </div>
    );
}
