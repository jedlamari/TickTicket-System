import {Button, ButtonGroup, Container, Stack, TextField} from "@mui/material";
import {Box} from "@mui/system";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";

const EventInformation = (props) => {

    const [eventTypes, setEventTypes] = React.useState([]);
    const [chosenEventTypes, setChosenEventTypes] = React.useState([]);
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventCapacity, setEventCapacity] = useState("");
    const [eventCost, setEventCost] = useState("");
    const [eventStart, setEventStart] = useState("");
    const [eventEnd, setEventEnd] = useState("");
    const [eventAddress, setEventAddress] = useState("");
    const [eventPhoneNumber, setEventPhoneNumber] = useState("");
    const [eventEmail, setEventEmail] = useState("");
    const [disable, setDisable] = React.useState(true);

    useEffect(() => {
        axios.get("event-types").then((res) => {
            setEventTypes(res.data);
        });

        if(eventName && eventDescription && eventCapacity && eventCost && eventStart && eventEnd && eventAddress && eventPhoneNumber && eventEmail){
            setDisable(false);
        }
        else{
            setDisable(true);
        }
    }, [setDisable, eventName, eventDescription, eventCapacity, eventCost, eventStart, eventEnd, eventAddress, eventPhoneNumber, eventEmail]);

    const handleOnEventTypeclick = (eventType) => {
        if(chosenEventTypes.find(id => id === eventType.id) === undefined){
            chosenEventTypes.push(eventType.id)
            setChosenEventTypes(chosenEventTypes);
        }
        else{
            chosenEventTypes.splice(1, chosenEventTypes.indexOf(eventType.id))
            setChosenEventTypes(chosenEventTypes);
        }
    }

    const handleCancelCreate = () => {
        setEventName("");
        setEventDescription("");
        setEventCapacity("");
        setEventCost("");
        setEventStart("");
        setEventEnd("");
        setEventAddress("");
        setEventPhoneNumber("");
        setEventEmail("");

    }

    return(
        <Container
            sx={{
                paddingTop: "3%",
                minHeight: "500",
                spacing: "3",
                border: 1, p: 1, bgcolor: 'background.paper'
            }}
        >
            <Stack spacing={2}>
                <Box textAlign='left'>
                    Select Event Type(s):
                    {eventTypes.map((eventType) => {
                        return (
                            // <FormControlLabel control={<Checkbox />} label={eventType.name} onClick={() => handleOnEventTypeclick(eventType)}/>
                            <ButtonGroup variant="outlined" aria-label="outlined button group">
                                <Button
                                    onClick={() => handleOnEventTypeclick(eventType)}>{eventType.name} </Button>
                            </ButtonGroup>
                        );
                    })}
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Event Name"
                        helperText="Event Name"
                        value = {eventName}
                        onChange={(event) => setEventName(event.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Description"
                        helperText="Description"
                        value = {eventDescription}
                        onChange={(event) => setEventDescription(event.target.value)}
                    />
                </Box>
                <Box textAlign='center' >
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Capacity"
                        helperText="Capacity"
                        value={eventCapacity}
                        onChange={(event) => setEventCapacity(event.target.value)}
                    />
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Cost"
                        helperText="Cost"
                        value={eventCost}
                        onChange={(event) => setEventCost(event.target.value)}
                    />
                </Box>
                <Box textAlign='center' >
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Address"
                        helperText="Address"
                        value={eventAddress}
                        onChange={(event) => setEventAddress(event.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Phone Number"
                        helperText="Phone Number"
                        value={eventPhoneNumber}
                        onChange={(event) => setEventPhoneNumber(event.target.value)}
                    />
                </Box>
                <Box textAlign='center' >
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Email"
                        helperText="Email"
                        value={eventEmail}
                        onChange={(event) => setEventEmail(event.target.value)}
                    />
                </Box>
                <Box textAlign='center' >
                    <TextField
                        fullWidth
                        id="datetime-local"
                        label="Start Date and Time"
                        type="datetime-local"
                        defaultValue="2022-05-24T10:30:00"
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={eventStart}
                        onChange={(event) => setEventStart(event.target.value)}
                    />

                    <TextField
                        fullWidth
                        id="datetime-local"
                        label="Start Date and Time"
                        type="datetime-local"
                        defaultValue="2022-05-24T10:30:00"
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={eventEnd}
                        onChange={(event) => setEventEnd(event.target.value)}
                    />


                </Box>
                <Box textAlign='center'>
                    <Button variant='contained' onClick={handleCancelCreate} color="error">
                        <CancelIcon />
                        Cancel
                    </Button>
                    <Button
                        variant='contained'
                        onClick={() => props.handleAction(eventName, eventDescription, eventCapacity, eventCost, eventStart, eventEnd, eventAddress, eventPhoneNumber, eventEmail, chosenEventTypes)}
                        color="success"
                        disabled={disable}>
                        <CheckIcon />
                        Create
                    </Button>
                </Box>
            </Stack>
        </Container>
    );
};

export default EventInformation;