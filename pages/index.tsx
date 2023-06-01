import { Box, Container, Button } from "@mui/material"
import Head from "next/head"
import { useTheme } from "@mui/material/styles"
import { Grid } from "@mui/material"
import Image from "next/image"
import LandingForm from "../src/components/LandingForm"

import Product from "../src/components/Product"
import TitleImage from "public/images/rebecca-peterson-hall-aN-zGYlxiCI-unsplash.jpg"

type Products = {
  id: number
  title: string
  price: string
  description: string
  image: string
}

type MainPageProductProps = {
  data: Products[]
}

export default function Home({ data }: MainPageProductProps) {
  const theme = useTheme()

  return (
    <Box>
      <Head>
        <title>Aroma&Vela</title>
      </Head>

      <Box
        sx={{
          height: "40vh",
          position: "relative",
          overflow: "hidden",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={TitleImage}
          alt="title image"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
              lg: "3rem",
            },
            fontWeight: "bold",
          }}
        >
          Aroma&Vela
        </Box>
      </Box>

      <Container
        sx={{
          py: 8,
          textAlign: "center",
        }}
      >
        <LandingForm />
      </Container>
      <Grid container spacing={[5, 15]}>
        <Product data={data} />
      </Grid>
    </Box>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    "https://6477d248362560649a2cfd87.mockapi.io/vela/v1/products"
  )
  const data = await response.json()

  // Return the data as props
  return {
    props: {
      data,
    },
  }
}
