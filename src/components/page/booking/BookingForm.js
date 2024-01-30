
import { useFormik } from "formik";
import * as Yup from 'yup';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import './BookingForm.css';

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const formik = useFormik({
        initialValues: {
          date: new Date().toISOString().substring(0,10),
          time: availableTimes[0],
          nbGuest: "2",
          occasion: "birthday"
        },
        onSubmit: (values) => {
            submitForm(values);
        },
        validationSchema: Yup.object({
          date: Yup.date().required("Required").min(new Date().toISOString().substring(0,10), "Date can't be before today"),
          time: Yup.string().required("Required"),
          nbGuest: Yup.number().min(1, 'You need to be at least 1').max(10, 'For more than 10 people, please call us').required("Required"),
          occasion: Yup.string().required("Required"),
        }),
      });

    const handleDateChange = (e) => {
        formik.setFieldValue("date", e.target.value);
        dispatch(e.target.value);
    };

    return (
        <>
            <h3 className="section-title content">Book Now</h3>
            <form onSubmit={formik.handleSubmit} className="content">
                <VStack>
                <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                    <FormLabel htmlFor="date" aria-label="date">Choose date *</FormLabel>
                    <Input type="date"
                    id="date"
                    onChange={handleDateChange}
                    value={formik.getFieldProps("date").value}
                    />
                    <FormErrorMessage data-testid="dateError">{formik.errors.date}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                    <FormLabel htmlFor="time" aria-label="time">Choose time *</FormLabel>
                    <Select id="time" {...formik.getFieldProps("time")}>
                        {availableTimes?.map(currentTime => <option key={currentTime}>{currentTime}</option>)}
                    </Select>
                    <FormErrorMessage data-testid="timeError">{formik.errors.time}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.nbGuest && formik.errors.nbGuest}>
                    <FormLabel htmlFor="nbGuest" aria-label="number of guests">Number of guests *</FormLabel>
                    <Input type="range" min={1} max={10}
                    id="nbGuest"
                    {...formik.getFieldProps("nbGuest")}
                    />
                    <p>{formik.getFieldProps("nbGuest").value}</p>
                    <FormErrorMessage>{formik.errors.nbGuest}</FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="occasion" aria-label="occasion">Occasion</FormLabel>
                    <Select id="occasion" {...formik.getFieldProps("occasion")}>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other</option>
                    </Select>
                </FormControl>
                <Button type="submit" width="full" className="btn-primary submit-btn" aria-label="On Click">
                    Make your reservation
                </Button>
                </VStack>
            </form>
        </>
    );
}

export default BookingForm;