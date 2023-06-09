import { Button, Grid, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
})

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            label="Nome"
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
            sx={{ width: { md: "50%", xs: "100%" } }}
            helperText={errors.name && String(errors.name?.message)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Telefone"
            variant="outlined"
            {...register("phone")}
            error={!!errors.phone}
            sx={{ width: { md: "50%", xs: "100%" } }}
            helperText={errors.phone && String(errors.phone?.message)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            {...register("email")}
            error={!!errors.email}
            sx={{ width: { md: "50%", xs: "100%" } }}
            helperText={errors.email && String(errors.email?.message)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Enviar!
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default function LandingForm() {
  return (
    <>
      <Typography variant="h3">Receba nossas ofertas!</Typography>
      <ContactForm />
    </>
  )
}
