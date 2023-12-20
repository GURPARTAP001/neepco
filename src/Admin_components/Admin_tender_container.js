import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Drop_down from './Drop_down';
import Admin_tender_card from './Admin_tender_card';
import { styled } from '@mui/material/styles';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { ChatState } from "../ChatProvider";

const data1 = ['2023', '2022', '2021', '2020', '2019'];
const data2 = ['open', 'closed'];

// Sample data to mimic the response from the backend
const sampleTenders = [
  {
    title: 'Road Construction Project',
    description: 'A project for constructing a new highway.',
    time: '2 Dec 2023',
    status: 'open',
    category: 'Goods'
  },
  // ... Add more sample tenders as needed
];

const StyledTabs = styled(Tabs)({
  '.MuiTabs-flexContainer': {
    justifyContent: 'center',
  },
  '.MuiTab-root': {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
});

const StyledDropdownArea = styled(Box)({
  display: "flex",
  justifyContent: "end",
  marginRight: "12px",
  '& > *': {
    marginLeft: '8px',
  },
});

const StyledTendersArea = styled(Box)({
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  height: "74vh",
  overflowY: "auto",
  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
});

export default function Admin_tender_container() {
  const [tenders, setTenders] = useState([]);

  const navigate = useNavigate();
    const { user, setUser } = ChatState();

    
   const fetchTenders = async() => {
    try {
      const config = {
        headers:
        {
          "Content-type": "application/json",
           Authorization: `Bearer ${user.token}`,
        }
         };
      const { data } = await axios.post("http://localhost:4000/api/tender/fetch",{},config);
      console.log(JSON.stringify(data));
      setTenders(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchTenders();
  },[])

  return (
    <Box sx={{ width: '98%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs aria-label="basic tabs example">
          <Tab label="Tenders" />
        </StyledTabs>
      </Box>
      <StyledDropdownArea>
        <Drop_down label="Year" data={data1} />
        <Drop_down label="Status" data={data2} />
      </StyledDropdownArea>

      <StyledTendersArea>
        {tenders.map((tender, index) => (
          <Admin_tender_card
            key={index}
            title={tender.title}
            description={tender.description}
            time={tender.time}
            status={tender.status}
            category={tender.type}
          />
        ))}
      </StyledTendersArea>
    </Box>
  );
}
