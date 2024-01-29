import { useFormik } from "formik";
import * as Yup from 'yup';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";


const EvolvedBookingForm = () => {
    const formik = useFormik({
        initialValues: {
          name: "",
          date: "",
          time: "19:00",
          nbGuest: "2",
          occasion: "Birthday"
        },
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
          //submit("", values);
        },
        validationSchema: Yup.object({
          name: Yup.string().min(2, 'first name is too Short!').max(50, 'first name is too Long!').required("Required"),
          date: Yup.date().required("Required"),
          time: Yup.string().required("Required"),
          nbGuest: Yup.number().min(1, 'You need to be at least 1').required("Required"),
          occasion: Yup.string().required("Required"),
        }),
      });

    return (
        <form onSubmit={formik.handleSubmit}>
            <VStack>
              <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                <FormLabel htmlFor="name">Name for reservation</FormLabel>
                <Input
                  id="name"
                  {...formik.getFieldProps("name")}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                <FormLabel htmlFor="date">Choose date</FormLabel>
                <Input type="date"
                  id="date"
                  {...formik.getFieldProps("date")}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                <FormLabel htmlFor="time">Choose time</FormLabel>
                <Select id="time" {...formik.getFieldProps("time")}>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.nbGuest && formik.errors.nbGuest}>
                <FormLabel htmlFor="nbGuest">Number of guests</FormLabel>
                <Input type="range" min={1} max={10}
                  id="nbGuest"
                  {...formik.getFieldProps("nbGuest")}
                />
                <p>{formik.getFieldProps("nbGuest").value}</p>
                <FormErrorMessage>{formik.errors.nbGuest}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion" {...formik.getFieldProps("occasion")}>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <Button type="submit" width="full">
                Make your reservation
              </Button>
            </VStack>
        </form>
    );
}

export default EvolvedBookingForm;