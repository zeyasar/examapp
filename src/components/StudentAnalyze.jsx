import * as React from "react";
import PropTypes from "prop-types";
import{ 
  Tabs,
  Tab,
  Typography,
  Box,
}from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import data from '../data/student-data.json' 

const mathcolumns = [
  {
    field: 'ad-soyad',
    headerName: 'Ad-Soyad',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.name || ''} ${params.row.surname || ''}`,
  },
  {
    field: 'matematik',
    headerName: 'Not',
    type: 'number',
    width: 90,
    valueGetter: (params) =>
      `${params.row.matematik} `,
  },
  
];
const trafficcolumns = [
  {
    field: 'ad-soyad',
    headerName: 'Ad-Soyad',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.name || ''} ${params.row.surname || ''}`,
  },
  {
    field: 'traffic',
    headerName: 'Not',
    type: 'number',
    width: 90,
    valueGetter: (params) =>
      `${params.row.trafik} `,
  },
  
];
const cografyacolumns = [
  {
    field: 'ad-soyad',
    headerName: 'Ad-Soyad',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.name || ''} ${params.row.surname || ''}`,
  },
  {
    field: 'cografya',
    headerName: 'Not',
    type: 'number',
    width: 90,
    valueGetter: (params) =>
      `${params.row.cografya} `,
  },
  
];
const rows = data

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function StudentAnalyze() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Matematik" {...a11yProps(0)} />
          <Tab label="Trafik" {...a11yProps(1)} />
          <Tab label="Coğrafya" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={mathcolumns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        checkboxSelection
      />
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={trafficcolumns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        checkboxSelection
      />
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={cografyacolumns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        checkboxSelection
      />
      </div>
      </TabPanel>
    </Box>
  );
}
