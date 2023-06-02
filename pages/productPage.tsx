import { useRouter } from "next/router"
import { Box, Container, Card, Grid } from "@mui/material"
import Image from "next/image"

import ProductImage from "/public/images/hanna-balan-zQwuQ59-xnI-unsplash.jpg"

type ProductDetails = {
  id: number
  details: string
  image: string
}

type ProductPageProps = {
  data: ProductDetails[]
}

export default function ProductPage({ data }: ProductPageProps) {
  const router = useRouter()
  const { id } = router.query

  const product = data.find((item) => item.id === Number(id))

  return (
    <Container>
      <Card sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {product && (
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  paddingBottom: "100%",
                }}
              >
                <Image
                  src={product.image}
                  alt="product-image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "center",
                margin: 4,
              }}
            >
              {product ? product.details : "Produto não encontrado"}
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    "https://6477d248362560649a2cfd87.mockapi.io/vela/v1/mockProductDetails"
  )
  const data = await response.json()

  // Return the data as props
  return {
    props: {
      data,
    },
  }
}
