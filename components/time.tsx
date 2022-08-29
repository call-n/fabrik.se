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
import { useState } from 'react'


const time = ['08:00','09:00','10:00','14:00','15:00']

export default function Time(props) {
    const [event, setEvent] = useState(null)
    const [info, setInfo] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true)
    }
   
    function displayInfo(e) {
      setInfo(true);
      setEvent(e.target.innerText);
   }

    return (
        <Flex flexDirection="row" gap="5">
            <Flex flexDirection="column">
                {time.map(times => {
                    return (
                    <div key={times}>
                        <button onClick={(e)=> displayInfo(e)}> {times} </button>
                    </div>
                        )
                })}
            </Flex>
            
            {info && 
                <Flex justifyContent="center">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <FormControl maxWidth="30rem">
                        <FormLabel _focus={{outlineColor: 'rgb(2, 18, 34)'}}>First name</FormLabel>
                        <Input 
                            placeholder='First name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <FormLabel _focus={{outlineColor: 'rgb(2, 18, 34)'}}>Email</FormLabel>
                        <Input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormHelperText>
                        Enter the email youd like to receive the newsletter on.
                        </FormHelperText>
                        
                        <FormLabel _focus={{outlineColor: 'rgb(2, 18, 34)'}}>Amount</FormLabel>
                        <NumberInput 
                            max={12} 
                            min={1}
                            value={amount}
                            onChange={(e) => setAmount(e)}
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
                </Flex>
            }
            {formSubmitted && 
            <Flex maxWidth="20rem" >
                <Box>
                    <Alert status='success' variant='subtle' bg="rgba(154, 230, 180, 0.16) none repeat scroll 0% 0%;" >
                        <AlertIcon />
                        Bokningens tid satt {event} {props.date.toDateString()} för {name} med {email} som email och för {amount} st person(er)
                    </Alert>
                </Box>
            </Flex>
            }
        </Flex>
    )
}