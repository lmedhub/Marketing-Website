import { Box, Typography, Button } from "@mui/material"
import Link from "next/link"

export default function Footer() {
  return (
    <Box
      sx={{
        py: 5,
        textAlign: "center",
        left: 0,
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Link href="/contact" passHref>
          <Button variant="contained">Entre em contato</Button>
        </Link>
        <Typography variant="body2">
          Vitória-ES, todos os direitos reservados, 2023.
        </Typography>
      </Box>
    </Box>
  )
}
