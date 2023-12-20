import React from 'react';
import { Grid, Typography, Card, CardContent, useTheme } from '@mui/material';
import PieChart from './PieChart';
import BarChart from './BarChart';
import BarChartTenderPayment from './BarChartTenderPayment';
import PieChartTenderType from './PieChartTenderType';
import BarChartTenderCategory from './BarChartTenderCategory';
import AdminNav from '../Admin_components/Admin_nav';

function Analytics() {
  const data = [
    { year: 2014, value: 100000 },
    { year: 2015, value: 120000 },
    { year: 2016, value: 140000 },
    { year: 2017, value: 160000 },
    { year: 2018, value: 180000 },
    { year: 2019, value: 200000 },
    { year: 2020, value: 220000 },
    { year: 2021, value: 240000 },
    { year: 2022, value: 260000 },
    { year: 2023, value: 280000 }
];

const tenderData = [
  { tenderId: "T001", womenCount: 15 },
  { tenderId: "T002", womenCount: 20 },
  { tenderId: "T003", womenCount: 12 },
  { tenderId: "T004", womenCount: 17 },
  { tenderId: "T005", womenCount: 23 },
  { tenderId: "T006", womenCount: 19 },
  { tenderId: "T007", womenCount: 14 },
  { tenderId: "T008", womenCount: 18 },
  { tenderId: "T009", womenCount: 21 },
  { tenderId: "T010", womenCount: 16 }
];

const tenderPaymentData = [
  { tenderId: "T001", totalPayment: 120000 },
  { tenderId: "T002", totalPayment: 150000 },
  { tenderId: "T003", totalPayment: 180000 },
  { tenderId: "T004", totalPayment: 135000 },
  { tenderId: "T005", totalPayment: 200000 },
  { tenderId: "T006", totalPayment: 160000 },
  { tenderId: "T007", totalPayment: 220000 },
  { tenderId: "T008", totalPayment: 175000 },
  { tenderId: "T009", totalPayment: 190000 },
  { tenderId: "T010", totalPayment: 205000 }
];

const tenderTypeData = [
  { type: "Goods", value: 50000 },
  { type: "Services", value: 70000 },
  { type: "Works", value: 90000 },
];

const tenderCategoryData = [
  { category: "MSE", count: 50 },
  { category: "LSE", count: 30 },
  { category: "SME", count: 20 },
];

    const theme = useTheme();

    const headingStyle = {
        textAlign: 'center',
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(4),
        animation: 'fadeIn 1s ease-in-out',
        "@keyframes fadeIn": {
            "0%": { opacity: 0, transform: "translateY(-20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" }
        }
    };

    const cardStyle = {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
            transform: "scale(1.05)"
        },
        [theme.breakpoints.down('sm')]: {
            // Optional: Styles for small devices
        }
    };

    return (
        <div>
            <AdminNav />
            <Typography variant="h4" style={headingStyle}>
                Analytics Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={cardStyle}>
                        <CardContent>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                Revenue Over Years
                            </Typography>
                            <BarChart data={data} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={cardStyle}>
                        <CardContent>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                Women Count in Tenders
                            </Typography>
                            <PieChart data={tenderData} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={cardStyle}>
                        <CardContent>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                Tender Payments
                            </Typography>
                            <BarChartTenderPayment data={tenderPaymentData} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={cardStyle}>
                        <CardContent>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                Tender Types
                            </Typography>
                            <PieChartTenderType data={tenderTypeData} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card sx={cardStyle}>
                        <CardContent>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                Tender Categories
                            </Typography>
                            <BarChartTenderCategory data={tenderCategoryData} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Analytics;
