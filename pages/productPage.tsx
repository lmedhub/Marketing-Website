import { useRouter } from "next/router"
import { Box, Container } from "@mui/material"

type ProductDetails = {
  id: number
  details: string
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
      <Box sx={{ textAlign: "center" }}>
        {product ? product.details : "Produto não encontrado"}
      </Box>
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
