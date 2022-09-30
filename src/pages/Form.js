import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyInput from "../components/MyInput";

export default function Index({ setAdded }) {
  const addCompany = async (values) => {
    let url = `${process.env.REACT_APP_PROJECT_BACKEND_URI}/api/companies`;

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((data) => setAdded(data));
  };

  return (
    <div className='container flex flex-col gap-5'>
      <h1 className='text-4xl font-bold'>Agrega una empresa</h1>
      <Formik
        initialValues={{
          name: "",
          address: "",
          nit: "",
          phone: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(50, "Nombre demasiado largo")
            .min(3, "Nombre muy corto")
            .required("Obligatorio")
            .trim(),
          address: Yup.string()
            .max(100, "Intenta ser mas especifico")
            .min(5, "Dirección corta, danos más información")
            .trim(),
          nit: Yup.string()
            .max(12, "Máximo caracteres permitidos")
            .min(10, "El NIT debe tener al menos 10 caracteres")
            .trim(),
          phone: Yup.string().length(10, "Ingresa un numero de telefono"),
        })}
        onSubmit={(values, actions) => {
          addCompany(values);
          actions.resetForm();
        }}
      >
        <Form className='grid gap-5'>
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

          <MyInput label='NIT' name='nit' type='text' placeholder='NIT' />

          <MyInput
            label='Teléfono'
            name='phone'
            type='text'
            placeholder='Teléfono'
          />

          <button
            className='text-2xl bg-white text-[#720cd4] hover:bg-gradient-to-tr hover:to-[#c621e5] hover:from-[#720cd4] hover:text-white p-2'
            type='submit'
          >
            Registrar
          </button>
        </Form>
      </Formik>
    </div>
  );
}
