import PieChart from './PieChart';
import BarChart from './BarChart';
import BarChartTenderPayment from './BarChartTenderPayment';
import PieChartTenderType from './PieChartTenderType';
import BarChartTenderCategory from './BarChartTenderCategory';


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
    

    return(
        <div>
            <BarChart data={data} />
            <PieChart data={tenderData} />
            <BarChartTenderPayment data={tenderPaymentData} />
            <PieChartTenderType data={tenderTypeData} />
            <BarChartTenderCategory data={tenderCategoryData} />
        </div>
    )
}

export default Analytics;