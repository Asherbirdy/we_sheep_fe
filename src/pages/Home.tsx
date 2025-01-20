import {
  FunctionComponent, ReactElement,
} from 'react'
import {
  Text, Button, Box, Tooltip, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Card, CardBody, FormControl, FormLabel, Input, FormErrorMessage,
} from '@chakra-ui/react'
import { useDevApi } from '@/api/useDevApi'
import { useQuery } from '@tanstack/react-query'
import {
  Formik, Form, Field,
} from 'formik'
export const Home: FunctionComponent = (): ReactElement => {
  function validateName(value: string) {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱"
    }
    return error
  }
  return (
    <Box p={4}>
      <Card>
        <CardBody>
          <Formik
            initialValues={{ name: 'Sasuke' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
              }, 1000)
            }}
          >
            {(props) => (
              <Form>
                <Field
                  name="name"
                  validate={validateName}
                >
                  {({
                    field, form,
                  }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel>First name</FormLabel>
                      <Input
                        {...field}
                        placeholder="name"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </Box>
  )
}

