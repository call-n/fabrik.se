import { mutate } from 'swr'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';


import { 
    Box,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
    Input,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';

function ProductReviewForm() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [amountOfPeople, setAmountOfPeople] = useState('')
    const [dateAndTime, setDateAndTime] = useState()
    const [showTime, setShowTime] = useState(false)
    const [finsihed, setFinished] = useState(false)

const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
        name: name,
        surname: surname,
        mobile: mobile,
        email: email,
        amountOfPeople: amountOfPeople,
        dateAndTime: dateAndTime,
    }

    if(!showTime){
        console.log('choose date')
        return
    }

    mutate(
        async () => {
        try {
            await fetch(
            '/api/graphcms/create-booking',
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            ).then((res) => res.json())

            return console.log('It worked!');
        } catch (error) {
            console.log(error)
        }
        },
        false
    )
}

  return (
    <Flex justifyContent="center">
        {!dateAndTime && 
            <Box color="black">
                <Calendar 
                    onChange={setDateAndTime} 
                    value={dateAndTime} 
                    onClickDay={() => setShowTime(true)}
                    selectRange={false}
                    minDate={new Date()}
                />
            </Box>
        }
        {dateAndTime && 
            <form 
                onSubmit={handleSubmit}
            >
                <FormControl maxWidth="30rem">
                    <FormLabel _focus={{outlineColor: 'rgb(2, 18, 34)'}}>First name</FormLabel>
                    <Input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <FormLabel _focus={{outlineColor: 'rgb(2, 18, 34)'}}>First name</FormLabel>
                    <Input 
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />

                    <FormLabel _focus={{outlineColor: 'rgb(2, 18, 34)'}}>First name</FormLabel>
                    <Input 
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />

                    <FormLabel _focus={{outlineColor: 'rgb(2, 18, 34)'}}>Email</FormLabel>
                    <Input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <FormLabel _focus={{outlineColor: 'rgb(2, 18, 34)'}}>Amount</FormLabel>
                    <NumberInput 
                        max={12} 
                        min={1}
                        value={amountOfPeople}
                        onChange={(e) => setAmountOfPeople(e)}
                        >
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>

                    <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    >
                        Submit
                    </Button>
                </FormControl>
            </form>
        }
    </Flex>
  )
}

export default ProductReviewForm