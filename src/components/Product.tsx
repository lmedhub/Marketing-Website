import React from "react"
import mockProducts from "../mockdata"
import { Grid, Box, Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import theme from "../theme"

export default function Product(props) {
  return (
    <>
      {props.data.map((product) => (
        <Grid item key={product.id} xs={12} sm={4}>
          <Box
            sx={{
              width: "100%",
              paddingBottom: "100%",
              position: "relative",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <Link href={`/productPage?id=${product.id}`} passHref>
              {" "}
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="feature image"
                src={product.image}
              />
            </Link>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5">{product.title}</Typography>
            <Typography variant="h6">{product.price}</Typography>
            <Typography>{product.description}</Typography>
          </Box>
        </Grid>
      ))}
    </>
  )
}
