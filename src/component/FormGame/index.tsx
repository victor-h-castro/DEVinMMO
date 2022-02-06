/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/require-default-props */
/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';
import {
  Card, Grid, Stack, TextField,
} from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { FormProps } from 'type/form';

type FormGameProps = {
setComments: (commentGame: FormProps) => void,
}

export function FormGame({ setComments } : FormGameProps) {
  const FormSchema = Yup.object().shape({
    fullName: Yup.string().required('Name is required'),
    emailAddress: Yup.string().email('Email must be a valid email address').required('Email is required'),
    comment: Yup.string().required('Comment is required'),
  });

  const formik = useFormik<FormProps>({
    enableReinitialize: true,
    initialValues: {
      fullName: '',
      emailAddress: '',
      comment: '',
    },
    validationSchema: FormSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      setComments(values);
      setSubmitting(false);
      resetForm();
    },
  });
  const {
    handleSubmit, touched, errors, getFieldProps, isSubmitting,
  } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <Card sx={{
            p: 3, mb: 3, borderRadius: '16px', boxShadow: '0 0 1px 0 #9e9e9e, 0 8px 16px -4px #9e9e9e',
          }}
          >
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  {...getFieldProps('fullName')}
                  error={Boolean(touched.fullName && errors.fullName)}
                  helperText={touched.fullName && errors.fullName}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  {...getFieldProps('emailAddress')}
                  error={Boolean(touched.emailAddress && errors.emailAddress)}
                  helperText={touched.emailAddress && errors.emailAddress}
                />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  label="Comment"
                  {...getFieldProps('comment')}
                  error={Boolean(touched.comment && errors.comment)}
                  helperText={touched.comment && errors.comment}
                />

              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                <LoadingButton type="submit" variant="outlined" fullWidth loading={isSubmitting}>
                  Save Comment
                </LoadingButton>

              </Stack>
            </Stack>
          </Card>
        </Grid>

      </Form>
    </FormikProvider>
  );
}
