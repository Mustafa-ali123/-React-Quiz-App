import React from 'react'
// import * as React from 'react';
import "./App.css";
import { Button } from '@mui/material'
// import { click } from '@testing-library/user-event/dist/click';
function Buttons(props) {

    const { data, alert } = props


    return (
        <div className='container '>

            {data.map((x, i) => {
                return <Button key={i} variant='contained' onClick={() => alert(x)} className='btn mx-1  my-1'>{x}</Button>
            })
            }

        </div>
    )
}


export default Buttons;