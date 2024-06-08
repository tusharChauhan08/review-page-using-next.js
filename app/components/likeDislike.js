'use client';
import styles from './likeDislike.module.css';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';
export default function LikeDislikeComponent() {
    const [value, setValue] = useState(-1)
    return (
        <>
            <div className={styles.likeDislikeSection}>
                <div className={`${value === 0 ? styles.disLike : ""} ${styles.likeDislikeButton}`} onClick={(e) => setValue(0)}>
                    <ThumbDownIcon style={{fontSize:"2rem"}} /> No
                </div>
                <div className={`${value === 1 ? styles.like : ""} ${styles.likeDislikeButton}`} onClick={(e) => setValue(1)}>
                    <ThumbUpIcon style={{fontSize:"2rem"}} /> Yes
                </div>
            </div>
        </>
    )
}