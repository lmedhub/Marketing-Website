import { Box, Typography, Button } from "@mui/material"
import Link from "next/link"

export default function Footer() {
  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      <Typography>Vitória-ES, todos os direitos reservados, 2023.</Typography>
      <Link href="/contact">
        <Button variant="contained">Entre em contato</Button>
      </Link>
    </Box>
  )
}
