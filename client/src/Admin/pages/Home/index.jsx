import drilldown from "highcharts/modules/drilldown.js";
import {
    formatDrillDown,
    formatDrillDownDetail,
} from "../../utils/formatChart";
import { GetDataMonth, GetDataDay, GetStaticCount } from "../../hook/useChart";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import ChartChildren from "../../components/ChartChildren";
import { UseDarkModeContext } from "../../context/darkMode";
drilldown(Highcharts);

function Home() {
    const { darkMode } = UseDarkModeContext();
    const [dataMonth, setDataMonth] = useState([]);
    const [dataDetail, setDataDetail] = useState([]);
    const options = {
        chart: {
            type: "column",
            height: (9 / 16) * 100 + "%",
            width: 1150,
            backgroundColor: darkMode ? "dark" : "white",
        },
        title: {
            align: "center",
            text: "Biểu đồ doanh thu của cửa hàng theo từng tháng trong năm 2023",
            style: {
                color: darkMode ? "white" : "black",
            },
        },
        accessibility: {
            announceNewData: {
                enabled: true,
            },
            enabled: false,
        },
        xAxis: {
            type: "category",
            labels: {
                style: {
                    color: darkMode ? "white" : "black",
                },
            },
        },
        yAxis: {
            title: {
                text: "Total",
                style: {
                    color: darkMode ? "white" : "black",
                },
            },
        },
        legend: {
            enabled: false,
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                },
            },
        },

        tooltip: {
            headerFormat:
                '<span style="font-size:11px">{series.name}</span><br>',
        },

        series: [
            {
                name: "Total",
                colorByPoint: true,
                data: dataMonth,
            },
        ],
        drilldown: {
            breadcrumbs: {
                position: {
                    align: "right",
                },
            },
            series: dataDetail,
        },
    };
    const data = GetDataMonth();
    const dataDt = GetDataDay();
    const dataCt = GetStaticCount();
    useEffect(() => {
        if (data && dataDt) {
            const drilldownMonth = formatDrillDown(data.data);
            const drilldownMonthDetail = formatDrillDownDetail(
                data.data,
                dataDt.data
            );
            setDataMonth(drilldownMonth);
            setDataDetail(drilldownMonthDetail);
        }
    }, [data, dataDt]);

    useEffect(()=>{
        document.title = "Admin";
    },[]);

    return (
        <div className="pt-10 ">
            <div className="grid grid-cols-3 gap-10 mb-10">
                <ChartChildren
                    bg="bg-orange-500"
                    label="Số hóa đơn đang chờ xử lý"
                    count={dataCt?.count?.pendingOrder}
                />
                <ChartChildren
                    bg="bg-blue-500"
                    label="Số hóa đơn đang vận chuyển"
                    count={dataCt?.count?.shippingOrder}
                />
                <ChartChildren
                    bg="bg-pink-500"
                    label="Số người thường xuyên hoạt động"
                    count={dataCt?.count?.user}
                />
            </div>
            <div
                className={`${
                    darkMode ? "dark_soft" : "bg-white"
                } rounded-[10px] overflow-hidden py-3 mb-2`}
                style={{
                    boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                }}
            >
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </div>
    );
}

export default Home;
