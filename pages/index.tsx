import Typography from "@mui/material/Typography";
import { Box, Container, Button } from "@mui/material";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Image from "next/image";

import TitleImage from "public/images/rebecca-peterson-hall-aN-zGYlxiCI-unsplash.jpg";
import FeatureImage from "public/images/hanna-balan-zQwuQ59-xnI-unsplash.jpg";

export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 4 }}>
      <Head>
        <title>Aroma&Vela</title>
      </Head>

      <Box
        sx={{
          height: "40vh",
          backgroundColor: theme.palette.primary.main,
          position: "relative",
          overflow: "hidden",
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

      <Container sx={{ py: 8 }}>
        <Typography sx={{ textAlign: "center" }}>
          Welcome to Aroma&Vela, a haven of scented candles. Immerse yourself in
          a symphony of captivating fragrances that ignite your imagination and
          soothe your soul. Handcrafted with love, our candles transport you to
          faraway places, evoking cherished memories. From lavender fields to
          vanilla dreams, find the perfect scent for any occasion. Let our
          knowledgeable staff guide you through this olfactory wonderland.
          Illuminate your world with the transformative power of Aroma&Vela.
        </Typography>
      </Container>

      <Grid container spacing={[5, 20]}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>Vela de Lavanda</Box>

          <Box
            sx={{
              width: "100%",
              paddingBottom: "100%",
              backgroundColor: theme.palette.primary.main,
              position: "relative",
            }}
          >
            {" "}
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="feature image"
              src={FeatureImage}
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>Vela de Lavanda</Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              width: "100%",
              paddingBottom: "100%",
              backgroundColor: theme.palette.primary.main,
              position: "relative",
            }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={FeatureImage}
              alt="feature image"
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>Vela de Laranja</Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              width: "100%",
              paddingBottom: "100%",
              position: "relative",
            }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={FeatureImage}
              alt="feature image"
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>Vela de Baunilha</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
