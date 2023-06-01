import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  FormHelperText,
} from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone number is required"),
  msg: yup.string().required("Message is required"),
})

function ContactForm() {
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
            label="Name"
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name && String(errors.name?.message)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone"
            variant="outlined"
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone && String(errors.phone?.message)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Message"
            variant="outlined"
            {...register("msg")}
            error={!!errors.msg}
            helperText={errors.msg && String(errors.msg?.message)}
            fullWidth
            multiline
            rows={5}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default function LandingForm() {
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h2">Entre em contato</Typography>
      <ContactForm />
    </Container>
  )
}
