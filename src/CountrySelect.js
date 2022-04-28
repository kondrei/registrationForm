// import { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function CountrySelect({ onChange, value }) {
    return (
        <PhoneInput
            international
            defaultCountry='SE'
            placeholder="Enter phone number"
            value={value}
            id="phone"
            onChange={onChange} />
    )
}