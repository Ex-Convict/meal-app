
// import CustomButton from "@/components/Button";

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to My Next.js App</h1>
//       <CustomButton label="Click Me" />
//     </div>
//   );
// }

// src/pages/MyFormPage.tsx
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "@/components/Input";
import Button from "@mui/material/Button";

const MyFormPage: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Input label="Name" name="name" type="text" sx={{}} />
          <Input label="Email" name="email" type="email" />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MyFormPage;
