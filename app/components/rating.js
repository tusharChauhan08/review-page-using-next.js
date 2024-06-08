'use client'
import * as React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function RatingComponent(props) {
    const [value, setValue] = React.useState(props.ratingValue);
    return (
        <>
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                style={{ fontSize: '3rem'}}
            />
        </>
    )
}
