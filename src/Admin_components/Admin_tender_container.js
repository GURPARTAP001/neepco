import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Drop_down from './Drop_down';
import Admin_tender_card from './Admin_tender_card';
const data1 = ['2023', '2022', '2021', '2020', '2019']
const data2 = ['open', 'closed']


export default function Admin_tender_container() {

  return (
    <Box sx={{ width: '98%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center" }}>
        <Tabs aria-label="basic tabs example">
          <Tab label="Tenders" />

        </Tabs>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" ,marginRight:"12px" }}>
        <Drop_down label="Year" data={data1} />
        <Drop_down label="Status" data={data2} />
      </Box>

{/* category:goods,services */}
      <Box sx={{ background: "white",padding:"5px",borderRadius:"10px",height:"74vh",overflowY:"auto"}}>
        <Admin_tender_card title="tender-1" description="this is the descripion of te tender-1" time="2 dec 2023" status="open" category="Goods"/>
        <Admin_tender_card title="tender-2" description="this is the descrition of th tender-2" time="2 dec 2023" status="closed" category="Services"/>
        <Admin_tender_card title="tender-3" description="this is the descripion of th tender-3" time="2 dec 2023" status="open" category="Goods"/>
        <Admin_tender_card title="tender-4" description="this is the descripion of th tender-4"this is the descriptio of th tender-4 time="2 dec 2023" status="closed" category="Goods"/>
        <Admin_tender_card title="tender-5" description="this is the descriptio of th tender-5" time="2 dec 2023" status="open" category="Services"/>
        <Admin_tender_card title="tender-5" description="this is the descriptio of th tender-5" time="2 dec 2023" status="open" category="Goods"/>
        <Admin_tender_card title="tender-5" description="this is the descriptio of th tender-5" time="2 dec 2023"status="closed" category="Services"/>
        <Admin_tender_card title="tender-5" description="this is the descriptio of th tender-5" time="2 dec 2023"status="open" category="Goods"/>
        <Admin_tender_card title="tender-5" description="this is the descriptio of th tender-5" time="2 dec 2023"status="closed" category="Services"/>
        <Admin_tender_card title="tender-5" description="this is the descriptio of th tender-5" time="2 dec 2023" status="open" category="Goods"/>
        <Admin_tender_card title="tender-5" description="this is the descriptio of th tender-5" time="2 dec 2023" status="closed" category="Services"/>
        <Admin_tender_card title="tender-5" description="this is the descriptio of th tender-5" time="2 dec 2023" status="open" category="Goods"/>
      </Box>


    </Box>
  );
}