//const Events = () => {
//  return <h1>Events</h1>;
//};
//export default Events;

import React from "react";
import { Container, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabPanel from "../components/TabPanel";

const Home = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  useEffect(() => {
    axios.get("events/upcoming/35f94e94-3f80-4919-b6a8-07a28d855b68").then((res) => {
      setUpcomingEvents(res.data);
    });
    axios.get("events/past/35f94e94-3f80-4919-b6a8-07a28d855b68").then((res) => {
      setPastEvents(res.data);
    });
  }, []);

  return (
    <Container
      sx={{
        paddingTop: "5%",
      }}
    >
      <Tabs value={tab} onChange={handleChange} centered>
        <Tab label="Past" />
        <Tab label="Upcoming" />
      </Tabs>
      <TabPanel value={tab} index={0}>
      <Stack spacing={2}>
        {pastEvents.map((event) => {
          return <EventCard key={event.id} event={event} />;
        })}
      </Stack>
      </TabPanel>
      <TabPanel value={tab} index={1}>
      <Stack spacing={2}>
        {upcomingEvents.map((event) => {
          return <EventCard key={event.id} event={event} />;
        })}
      </Stack>
      </TabPanel>
    </Container>
  );
};
export default Home;
// import { Container, Stack } from "@mui/material";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import EventCard from "../components/EventCard";

// const Home = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios.get("events").then((res) => {
//       setEvents(res.data);
//     });
//   }, []);

//   return (
//     <Container
//       sx={{
//         paddingTop: "5%",
//       }}
//     >
//       <Stack spacing={2}>
//         {events.map((event) => {
//           return <EventCard key={event.id} event={event} />;
//         })}
//       </Stack>
//     </Container>
//   );
// };
// export default Home;
