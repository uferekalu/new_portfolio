import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      subject: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('This field is required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('This field is required'),
      subject: Yup.string().required('This field is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
      message: Yup.string().required('This field is required'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className="flex flex-col w-full min-h-screen bg-[rgb(1,130,210)]">
      <div className="flex flex-col w-full max-w-[1240px] mx-auto p-4">
        <h3 className="mt-16 md:mt-24 text-lg bg-slate-300 p-3 rounded-md w-fit">
          Contact Me
        </h3>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col py-4 w-full mt-5 gap-8"
        >
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="p-3 w-full rounded-md"
                placeholder="First name"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="flex text-red-400 bg-white p-2 rounded-md ml-auto mt-2 italic w-fit">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col w-full md:w-1/2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="p-3 w-full rounded-md"
                placeholder="Last name"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="flex text-red-400 bg-white p-2 rounded-md ml-auto mt-2 italic w-fit">
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <input
                id="subject"
                name="subject"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className="p-3 w-full rounded-md"
                placeholder="Subject"
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className="flex text-red-400 bg-white p-2 rounded-md ml-auto mt-2 italic w-fit">
                  {formik.errors.subject}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col w-full md:w-1/2">
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="p-3 w-full rounded-md"
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="flex text-red-400 bg-white p-2 rounded-md ml-auto mt-2 italic w-fit">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <textarea
            rows={5}
            cols={5}
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="p-3 w-full rounded-md"
            placeholder="Message"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="flex text-red-400 bg-white p-2 rounded-md ml-auto italic w-fit -mt-5">
              {formik.errors.message}
            </div>
          ) : null}

          <button
            className="my-3 flex justify-center items-center p-3 bg-red-950 text-white rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
