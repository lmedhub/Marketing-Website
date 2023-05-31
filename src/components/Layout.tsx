import { Box, Typography, Button } from "@mui/material";

export default function Layout({ children }: any) {
  return (
    <>
      {children};
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography>Vitória-ES, todos os direitos reservados, 2023.</Typography>
        <Button variant="contained">Entre em contato</Button>
      </Box>
    </>
  );
}
