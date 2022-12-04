import { Grid } from '@mui/material'
import React from 'react'
import ManImg from "../../Assets/Peao.jpeg"
import WomanImg from "../../Assets/Prenda.jpeg"
import styles from "./CardGender.module.css"

export default function CardGender(props) {
    return (
        <Grid
            item
            xs={10}
            lg={3}
            md={3}
        >
            <div className={styles.imageHoverZoom}>
                <img
                    className={styles.genderSelectImg}
                    src={props.gender == "male"
                        ? ManImg
                        : WomanImg
                    }
                />
            </div>

        </Grid>
    )
}
