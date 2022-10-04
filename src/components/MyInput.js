import { useField } from "formik";

export default function MyInput({ label, ...props }) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div className='flex flex-col'>
      <input
        className='text-[#3c3c3b] rounded-md py-1 px-2'
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className='text-sm'>* {meta.error}</div>
      ) : null}
    </div>
  );
}
