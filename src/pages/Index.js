import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyInput from "../components/MyInput";

export default function Index() {
  return (
    <div className='flex flex-col gap-10 min-h-screen justify-center items-center'>
      <h1 className=''>Bienvenido</h1>
      <Formik
        initialValues={{
          name: "",
          address: "",
          nit: "",
          phone: "",
        }}
        validationSchema={Yup.object({
          //   name: Yup.string()
          //     .max(15, "Must be 15 characters or less")
          //     .required("Required"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className='flex flex-col'>
          <MyInput
            label='Nombre de la empresa'
            name='name'
            type='text'
            placeholder='Nombre de la empresa'
          />

          <MyInput
            label='Dirección'
            name='address'
            type='text'
            placeholder='Dirección'
          />

          <MyInput label='NIT' name='address' type='text' placeholder='NIT' />

          <MyInput
            label='Teléfono'
            name='phone'
            type='text'
            placeholder='Teléfono'
          />

          <button type='submit'>Registrar</button>
        </Form>
      </Formik>
    </div>
  );
}
