

import WAFRDashboard from "../charts/WAFR dashboard";
import TopServicesTable from "../charts/TopServices";
import LineChart from "../charts/linechart";
import RegionWiseResourcesTable from "../charts/Regionresources";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import React, { Component } from "react";
import { Box, Grid, List, ListItem,Typography,Stack } from "@mui/material";
import UserIcon from "assets/img/dashboard/user-icon.png";
import KingIcon from "assets/img/dashboard/kingicon.png";
import annotationPlugin from "chartjs-plugin-annotation";
import Dashboard from "../charts/Dashboard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import status from "Redux/Constants/CommonDS";
import { v4 } from "uuid";
import { cloudwiseSpendColor } from "Utils";
import {
  getCurrentHourSpendRate,
  getCurrentDaySpendRate,
  getTodaySpendAnalytics,
  getYesterdaySpendAnalytics,
  getTotalSpend,
  getMonthlyCloudWiseSpend,
  getTotalCloudWiseSpend,
  getMonthlyStatistics,
  getTotalBudget,
} from "Redux/Dashboard/DashboardThunk";
import Loader from "Components/Loader";
import { API_ERROR_MESSAGE } from "CommonData";
import ChatBotGreeting from "../chatbot";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(annotationPlugin);

let labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const COMMON_STYLE_LINE_DIAGRAM = {
  pointBorderWidth: 0,
  lineTension: 0.5,
  fill: false,
};
const BUDGET_PERCENTAGE_MULTIPLY_DIGIT = 1.8;
class SpendAnalytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyCloudWiseData: { labels: [], datasets: [] },
      monthlyCloudWiseOptions: {
        type: "line",
        plugins: {
          legend: {
            position: "bottom",
            onClick: null,
            labels: {
              usePointStyle: true,
              boxHeight: 5,
              boxWidth: 50,
              pointStyle: "circle",
              fontColor: "#383874",
              padding: 30,
              font: {
                size: 12,
              },
            },
          },
          title: {
            display: true,
            text: "Cloud Wise Spend",
            align: "start",
            padding: {
              bottom: 25,
            },
            font: {
              size: "14",
              family: '"Poppins", sans-serif',
              weight: "500",
            },
            color: "#383874",
          },
          annotation: {
            annotations: {
              box1: {
                drawTime: "beforeDatasetsDraw",
                type: "box",
                xMin: 0,
                xMax: 1,
                backgroundColor: "rgba(244, 245, 251, 1)",
                borderColor: "transparent",
              },
              box2: {
                drawTime: "beforeDatasetsDraw",
                type: "box",
                xMin: 2,
                xMax: 3,
                backgroundColor: "rgba(244, 245, 251, 1)",
                borderColor: "transparent",
              },
              box3: {
                drawTime: "beforeDatasetsDraw",
                type: "box",
                xMin: 4,
                xMax: 5,
                backgroundColor: "rgba(244, 245, 251, 1)",
                borderColor: "transparent",
              },
              box4: {
                drawTime: "beforeDatasetsDraw",
                type: "box",
                xMin: 6,
                xMax: 7,
                backgroundColor: "rgba(244, 245, 251, 1)",
                borderColor: "transparent",
              },
              box5: {
                drawTime: "beforeDatasetsDraw",
                type: "box",
                xMin: 8,
                xMax: 9,
                backgroundColor: "rgba(244, 245, 251, 1)",
                borderColor: "transparent",
              },
              box6: {
                drawTime: "beforeDatasetsDraw",
                type: "box",
                xMin: 10,
                xMax: 11,
                backgroundColor: "rgba(244, 245, 251, 1)",
                borderColor: "transparent",
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              drawOnChartArea: true,
            },
            ticks: {
              color: "#9797b6",
              family: '"Poppins", sans-serif',
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              callback: (value) => {
                if (value % 200 === 0) {
                  return `$${value}`;
                }
              },
              color: "#9797b6",
              family: '"Poppins", sans-serif',
            },
          },
        },
        elements: {
          point: {
            radius: 0,
          },
          line: {
            tension: 0,
          },
        },
        maintainAspectRatio: false,
      },
      totalSpend: "",
    };
  }

  componentDidMount = () => {
    this.props.getCurrentHourSpendRate();
    this.props.getCurrentDaySpendRate();
    this.props.getTodaySpendAnalytics();
    this.props.getYesterdaySpendAnalytics();
    this.props.getTotalSpend();
    this.props.getMonthlyCloudWiseSpend();
    this.props.getTotalCloudWiseSpend();
    this.props.getMonthlyStatistics();
    this.props.getTotalBudget();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.monthlyCloudWiseSpend.status !==
        this.props.monthlyCloudWiseSpend.status &&
      this.props.monthlyCloudWiseSpend.status === status.SUCCESS
    ) {
      this.lineDiagramDataPrepare();
    }

    if (
      prevProps.totalSpend.status !== this.props.totalSpend.status &&
      this.props.totalSpend.status === status.SUCCESS
    ) {
      if (!this.props.totalSpend?.data?.status) {
        this.setState({ totalSpend: this.props.totalSpend.data });
      }
    }
  }

  /** Calculate the current hour spend rate. */
  currentHourSpendRate = () => {
    const {
      currentHourSpendRate: { data },
    } = this.props;

    if (data >= 0) {
      return <strong>${data}</strong>;
    }
  };

  /** Render the current hour spend rate. */
  renderCurrentHourSpendRateHtml = () => {
    let { status: hourStatus } = this.props.currentHourSpendRate;

    return hourStatus === status.IN_PROGRESS ? (
      <Loader className={"small-loader"} />
    ) : (
      <Box className="spend-contant">
        <label>Per Hour</label>
        {/* <Box className="spend-price">
          {hourStatus === status.FAILURE
            ?  <Box className="error-message">{API_ERROR_MESSAGE}</Box> 
            : this.currentHourSpendRate()}
        </Box> */}
           <Box display="flex" alignItems="center" >
      <Typography  sx={{ marginRight: 1 ,fontSize:'20px',fontWeight:600,color:'#383874'}}>$154</Typography>
      <ArrowDropUpIcon color="success" />
      <Typography variant="h6" sx={{ marginRight: 1 ,}} style={{ fontSize: '0.75rem'}}>10%</Typography>

    </Box>
      
      </Box>
    );
  };

  /** Calculate the current day spend rate. */
  getCurrentDaySpendRate = () => {
    const {
      currentDaySpendRate: { data },
    } = this.props;

    if (data >= 0) return <strong>${data}</strong>;
  };

  /** Render the current day spend rate. */
  renderCurrentDaySpendRateHtml = () => {
    let { status: dayStatus } = this.props.currentDaySpendRate;
    return dayStatus === status.IN_PROGRESS ? (
      <Loader className={"small-loader"} />
    ) : (
      <Box className="spend-contant">
        <label>Per Day</label>
        {/* <Box className="spend-price">
          {dayStatus === status.FAILURE
            ? <Box className="error-message"> {API_ERROR_MESSAGE}</Box> 
            : this.getCurrentDaySpendRate()}
        </Box> */}
           <Box display="flex" alignItems="center" >
      <Typography variant="h6" sx={{ marginRight: 1,fontSize:'20px',fontWeight:600,color:'#383874' }}>$150</Typography>
      <ArrowDropUpIcon color="success" />
      <Typography variant="h6" sx={{ marginRight: 1 ,}} style={{ fontSize: '0.75rem'}}>10%</Typography>

    </Box>
      </Box>
    );
  };

  /** Calculate the today spend analytics. */
  getTodaySpendAnalytics = () => {
    const {
      todaySpendAnalytics: { data },
    } = this.props;

    const renderHtml = [];

    if (data && Object.keys(data).length) {
      let { sumCurrentDate, percentage } = data;

      if (sumCurrentDate)
        renderHtml.push(<strong key={v4()}>${sumCurrentDate}</strong>);

      if (percentage)
        renderHtml.push(
          <span className={`${percentage > 0 ? "" : "red"}`} key={v4()}>
            {Math.abs(percentage).toFixed(2)}%
          </span>
        );
    }

    return renderHtml;
  };

  /** Render the today spend analytics. */
  renderTodaySpendAnalyticsHtml = () => {
    let { status: todayStatus } = this.props.todaySpendAnalytics;

    return todayStatus === status.IN_PROGRESS ? (
      <Loader className={"small-loader"} />
    ) : (
      <>
        <label>Spends Today</label>
        <Box className="spend-price">
          {todayStatus === status.FAILURE
            ? <Box className="error-message">{API_ERROR_MESSAGE}</Box> 
            : this.getTodaySpendAnalytics()}
        </Box>
       
      </>
    );
  };

  /** Calculate the yesterday spend analytics. */
  getYesterdaySpendAnalytics = () => {
    const {
      yesterdaySpendAnalytics: { data },
    } = this.props;

    const renderHtml = [];

    if (data && Object.keys(data).length) {
      let { sumCurrentDate, percentage } = data;

      if (sumCurrentDate)
        renderHtml.push(<strong key={v4()}>${sumCurrentDate}</strong>);

      if (percentage)
        renderHtml.push(
          <span className={`${percentage > 0 ? "" : "red"}`} key={v4()}>
            {Math.abs(percentage).toFixed(2)}%
          </span>
        );
    }

    return renderHtml;
  };

  /** Render the yesterday spend analytics. */
  renderYesterdaySpendAnalyticsHtml = () => {
    let yesterdayStatus = this.props.yesterdaySpendAnalytics.status;
    return yesterdayStatus === status.IN_PROGRESS ? (
      <Loader />
    ) : (
      <>
        <label>Spends Yesterday</label>
        <Box className="spend-price">
          {yesterdayStatus === status.FAILURE
            ? <Box className="error-message"> {API_ERROR_MESSAGE} </Box>
            : this.getYesterdaySpendAnalytics()}
        </Box>
      </>
    );
  };

  /** Calculate the total spend. */
  getTotalSpend = () => {
    const { totalSpend } = this.state;
    const renderHtml = [];
    if (totalSpend) {
      renderHtml.push(<h1 key={v4()}>{totalSpend ? `$${totalSpend}` : ""}</h1>);
    } else {
      renderHtml.push(
        <Box className="error-message m-t-1">
          {this.props.totalSpend.status === status.FAILURE
            ? API_ERROR_MESSAGE
            : "There are no data available."}
        </Box>
      );
    }
    return renderHtml;
  };

  /** Render the total spend. */
  renderTotalSpendHtml = () => {
    let totalSpendStatus = this.props.totalSpend.status;
    return totalSpendStatus === status.IN_PROGRESS ? (
      <Loader />
    ) : (
      <Box className="total-spend" >
        <Box className="heading ">
        <label
              style={{
                fontFamily: 'Poppins',
                fontSize: '18px',
                lineHeight: '32px',
                letterSpacing: '0.15px',
                fontWeight: 450,

                textAlign: 'left',
                color: '#383874', // Customize color if needed
                marginRight: '16px' // Optional margin for spacing
              }}
            >
              Total Spend
            </label>

          {/* <span>
            DETAIL <i className="fas fa-angle-right"></i>
          </span> */}
        </Box>
        {/* {this.getTotalSpend()} */}
        <Typography
              variant="h1" // Change to h1 for larger text
              sx={{
                fontFamily: 'Poppins',
                fontSize: '30px',
                fontWeight: 500,
                letterSpacing: '-1.75px',
                textAlign: 'left',
                color: '#383874' ,
                p:0// You can customize the color as needed
              }}
            >
              $150
            </Typography>
          

  
      </Box>
    );
  };

  /** Calculate line diagram data of monthly CloudWise spend. */
  lineDiagramDataPrepare() {
    let { monthlyCloudWiseSpend } = this.props;
    let diagramData = monthlyCloudWiseSpend.data || [];
    let heighestMonth = 0;
    if (diagramData.length) {
      let datasets = [];
      Object.keys(cloudwiseSpendColor).forEach((cloud) => {
        let cloudWiseData = {
          label: cloud.toUpperCase(),
          data: [],
          ...{
            ...{
              backgroundColor: cloudwiseSpendColor[cloud],
              borderColor: cloudwiseSpendColor[cloud],
            },
            ...COMMON_STYLE_LINE_DIAGRAM,
          },
        };

        diagramData.forEach((diagramCloud) => {
          if (cloud === diagramCloud?.cloud?.toLowerCase()) {
            let monthIndex = labels.findIndex((label) =>
              diagramCloud.month.startsWith(label)
            );

            if (monthIndex > -1)
              cloudWiseData.data[monthIndex] = diagramCloud.sumValues;
          }
        });

        if (cloudWiseData.data.length) {
          datasets.push(cloudWiseData);
          heighestMonth =
            heighestMonth > cloudWiseData.data.length
              ? heighestMonth
              : cloudWiseData.data.length;
        }
      });
      labels.length = heighestMonth;
      this.setState({ monthlyCloudWiseData: { labels, datasets } });
    }
  }

  /** Render the monthly CloudWise spend. */
  renderMonthlyCloudWiseSpendHtml = () => {
    let monthlyCloudWiseSpendStatus = this.props.monthlyCloudWiseSpend.status;
    let { monthlyCloudWiseOptions, monthlyCloudWiseData } = this.state;
    return monthlyCloudWiseSpendStatus === status.IN_PROGRESS ? (
      <Box
        className="d-flex align-items-center"
        justifyContent={"center"}
        style={{ height: "100%" }}
      >
        <Loader />
      </Box>
    ) : monthlyCloudWiseSpendStatus === status.FAILURE ? (
      <Box
        className="d-flex align-items-center"
        justifyContent={"center"}
        style={{ height: "100%" }}
      >
        <h5>{API_ERROR_MESSAGE}</h5>
      </Box>
    ) : (
      <Line
        options={monthlyCloudWiseOptions}
        data={monthlyCloudWiseData}
        height={320}
        width={518}
      />
    );
  };

  /** Calculate total cloudwise spend. */
  getTotalCloudwiseSpend = () => {
    const {
      totalCloudWiseSpend: { data },
    } = this.props;

    if (data?.length) {
      return data.map((cloudSpend) => {
        return (
          <ListItem key={v4()}>
            <Box className="data-text">
              <span
                style={{
                  background:
                    cloudwiseSpendColor[cloudSpend.cloud.toLowerCase()],
                }}
              ></span>
              <p>{cloudSpend.cloud?.toUpperCase()}</p>
            </Box>
            <label>
              {cloudSpend.sumValues > 0 ? `$${cloudSpend.sumValues}` : ""}
              <strong>
                {cloudSpend.percentage > 0 ? `${cloudSpend.percentage}%` : ""}
              </strong>
            </label>
          </ListItem>
        );
      });
    }
  };

  /** Calculate Progressbar total cloudwise spend. */
  getProgressBarTotalCloudwiseSpend = () => {
    const {
      totalCloudWiseSpend: { data },
    } = this.props;

    if (data?.length) {
      return data.map((cloudSpend) => {
        return (
          <span
            style={{
              width: `${
                cloudSpend.percentage > 0 ? `${cloudSpend.percentage}` : "0"
              }%`,
              backgroundColor:
                cloudwiseSpendColor[cloudSpend.cloud.toLowerCase()],
            }}
            key={v4()}
          ></span>
        );
      });
    }
  };

  /** Render total cloudwise spend. */
  renderTotalCloudWiseSpendHtml = () => {
    let totalCloudWiseSpendStatus = this.props.totalCloudWiseSpend.status;
    return totalCloudWiseSpendStatus === status.IN_PROGRESS ? (
      <Loader />
    ) : (
      <>
        <Box className="avrage-shape" key={v4()}>
          <span>{this.getProgressBarTotalCloudwiseSpend()}</span>
        </Box>
        <Box className="progress-bar-contant" key={v4()}>
          {totalCloudWiseSpendStatus === status.FAILURE ? (
            <Box className="error-message m-t-1">{API_ERROR_MESSAGE}</Box>
          ) : (
            <List>{this.getTotalCloudwiseSpend()}</List>
          )}
        </Box>
      </>
    );
  };

  /** Calculate total budget information. */
  getTotalBudget() {
    let totalBudgetData = this.props.totalBudget.data || {};
    let {
      totalBudget,
      budgetUsed,
      remainingBudget,
      remainingBudgetPercentage,
    } = totalBudgetData;

    // Temp
    budgetUsed = parseInt(totalBudget / 2);
    remainingBudget = totalBudget - budgetUsed;
    remainingBudgetPercentage = 50;

    totalBudget = totalBudget > 0 ? `$${totalBudget}` : "";
    remainingBudget = remainingBudget > 0 ? `$${remainingBudget}` : "";
    remainingBudgetPercentage =
      remainingBudgetPercentage > 0 ? `${100 - remainingBudgetPercentage}` : "";

    return {
      totalBudget,
      budgetUsed,
      remainingBudget,
      remainingBudgetPercentage,
    };
  }

  /** Calculate Remaining Budget Percentage. */
  calculateRemainingBudgetPercentage() {
    let { remainingBudgetPercentage } = this.getTotalBudget();

    return remainingBudgetPercentage
      ? remainingBudgetPercentage > 35 && remainingBudgetPercentage <= 45
        ? 178 + BUDGET_PERCENTAGE_MULTIPLY_DIGIT * remainingBudgetPercentage
        : remainingBudgetPercentage > 45 && remainingBudgetPercentage < 66
        ? 180 + BUDGET_PERCENTAGE_MULTIPLY_DIGIT * remainingBudgetPercentage
        : remainingBudgetPercentage > 50
        ? 185 + BUDGET_PERCENTAGE_MULTIPLY_DIGIT * remainingBudgetPercentage
        : 175 + BUDGET_PERCENTAGE_MULTIPLY_DIGIT * remainingBudgetPercentage
      : 175;
  }

  /** Render total budget information. */
  renderTotalBudgetHtml() {
    let totalBudgetStatus = this.props.totalBudget.status;
    const { totalBudget, remainingBudgetPercentage, remainingBudget } =
      this.getTotalBudget();
    return (
      <Box className="total-budget">
        <Box className="heading">
          <label>
            Total Budget <span>{"(Q1)"}</span>
          </label>
          <Box className="total-budget">
            <label>{totalBudget}</label>
            {/* <span>10%</span> */}
          </Box>
        </Box>
        {totalBudgetStatus === status.IN_PROGRESS ? (
          <Box
            className="d-flex align-items-center width-100"
            justifyContent={"center"}
            style={{ height: "125px" }}
          >
            <Loader />
          </Box>
        ) : totalBudgetStatus === status.FAILURE ? (
          <Box
            className="d-flex align-items-center width-100"
            justifyContent={"center"}
            style={{ height: "125px" }}
          >
            <Box className="error-message">{API_ERROR_MESSAGE}</Box>
          </Box>
        ) : (
          <Box className="content">
            <Box className="gauge">
              <Box className="gauge--body">
                <Box
                  className="gauge--fill"
                  style={{
                    transform: `rotate(${
                      remainingBudgetPercentage
                        ? BUDGET_PERCENTAGE_MULTIPLY_DIGIT *
                          remainingBudgetPercentage
                        : 0
                    }deg)`,
                  }}
                ></Box>
                <Box className="gauge--cover"></Box>
                <Box className="gauge__center__center"></Box>
                <Box className="gauge__center"></Box>
                <Box
                  className="gauge__needle"
                  style={{
                    transform: `rotate(${this.calculateRemainingBudgetPercentage()}deg)`,
                  }}
                ></Box>
              </Box>
              <Box className="used-text">{remainingBudgetPercentage}% Used</Box>
            </Box>
            <Box className="remaining-text">
              <span>Remaining {remainingBudget}</span>
            </Box>
          </Box>
        )}
      </Box>
    );
  }

  /** Calculate Monthly Statistics. */
  getMonthlyStatistics() {
    let monthlyStatisticsData = this.props.monthlyStatistics.data;
    let totalStatistics = monthlyStatisticsData[0]?.sumAllValues;

    return monthlyStatisticsData.map((statistics, statisticsIndex) => {
      let monthIndex = labels.findIndex((label) =>
        statistics.month.startsWith(label)
      );

      if (monthIndex > -1) {
        return (
          <ListItem key={v4()}>
            <Box className="avrage-contant">
              <label>{statistics.month}</label>
              <strong>{statistics.sumAllValues}</strong>
            </Box>
            <span>
              <span
                className={`${
                  statisticsIndex === 2
                    ? "rosy-pink"
                    : statisticsIndex === 3
                    ? "saffron-mango"
                    : "crocus-purple"
                } `}
                style={{
                  width: `${
                    (statistics.sumAllValues / totalStatistics) * 100
                  }%`,
                }}
              ></span>
            </span>
          </ListItem>
        );
      } else {
        return null;
      }
    });
  }

  /** Render Monthly Statistics. */
  renderMonthlyStatisticsHtml() {
    let { data: monthlyData, status: monthlyStatus } =
      this.props.monthlyStatistics;

    if (monthlyStatus === status.IN_PROGRESS) {
      return <Loader />;
    } else {
      return (
        <>
          <Box className="heading">
            <label>Monthly Statistics</label>
            <Box className="total-budget">
              <label>
                {(monthlyData?.length && monthlyData[0]?.sumAllValues) || ""}
              </label>
              <span style={{ display: "none" }}>10%</span>
            </Box>
            <p style={{ display: "none" }}>Compared to 11,490 last year</p>
          </Box>
          <Box className="monthly-avrage">
            <List>
              {monthlyData?.length ? (
                this.getMonthlyStatistics()
              ) : (
                <Box className="error-message loader">{API_ERROR_MESSAGE}</Box>
              )}
            </List>
          </Box>
        </>
      );
    }
  }
 
  
  render() {
    return (
      
      <Box className="spend-analytics-container" >
                <Box className="analytics-left"  sx={{display:"flex",justifyContent:"flex-start",mt:{md:-4}}}>
          {this.renderTotalSpendHtml()}
         
          
        </Box>

      <Box className="spend-analytics-inner-container">
        
      <Dashboard/>

        
        <Box className="analytics-right">
          <Box className="current-spend" >
          <Grid container spacing={1} >
          
        </Grid> 
            <Box className="heading" >
              <label>Current Spend Rate</label>
            </Box>
            <Box sx={{ flexGrow: 2 }}>
              <Grid container spacing={1} className="spend-time">
                <Grid className="spend-time-details">
                  <Box className="user-profile">
                    <img src={UserIcon} className="red" alt="" style={{width:'25px'}}/>
                  </Box>
                  {this.renderCurrentHourSpendRateHtml()}
               
                </Grid>
                <Grid className="spend-time-details">
                  <Box className="user-profile sky-blue">
                    <img src={KingIcon} alt=""  style={{width:'25px'}} />
                  </Box>
                  {this.renderCurrentDaySpendRateHtml()}
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box className="spend-analytics">
            <Box className="heading">
              <label>Spend Analytics</label>
            </Box>
            <Grid container spacing={1} className="spend-analytics-time">
              <Box className="spend-contant">
                {/* {this.renderTodaySpendAnalyticsHtml()} */}
                <Box className="heading">
              <label>Spends Today</label>
            </Box>

                <Box display="flex" alignItems="center">
      <Typography  sx={{ marginRight: 1,fontSize:'34px' ,color:'#383874'
}} >$150</Typography>
      <ArrowDropUpIcon color="success" />
      <Typography variant="h6" sx={{ marginRight: 1 ,}} style={{ fontSize: '0.75rem'}}>10%</Typography>

    </Box>
              </Box>
              <Box className="spend-contant">
                {/* {this.renderYesterdaySpendAnalyticsHtml()} */}
                <Box className="heading">
              <label>Spends Yesterday</label>
            </Box>
                <Box display="flex" alignItems="center">
      <Typography variant="h4" sx={{ marginRight: 1 ,fontSize:'34px' ,color:'#383874'
}}>$150</Typography>
      <ArrowDropUpIcon color="success" />
      <Typography variant="h6" sx={{ marginRight: 1 ,}} style={{ fontSize: '0.75rem'}}>10%</Typography>

    </Box>
              </Box>
            </Grid>
          </Box>

        </Box>
       
      </Box>
    </Box>
    


      );
    }
  }
    

function mapStateToProps(state) {
  const {
    currentHourSpendRate,
    currentDaySpendRate,
    todaySpendAnalytics,
    yesterdaySpendAnalytics,
    totalSpend,
    monthlyCloudWiseSpend,
    totalCloudWiseSpend,
    totalBudget,
    monthlyStatistics,
  } = state.dashboard;
  return {
    currentHourSpendRate,
    currentDaySpendRate,
    todaySpendAnalytics,
    yesterdaySpendAnalytics,
    totalSpend,
    monthlyCloudWiseSpend,
    totalCloudWiseSpend,
    totalBudget,
    monthlyStatistics,
  };
}

const mapDispatchToProps = {
  getCurrentHourSpendRate,
  getCurrentDaySpendRate,
  getTodaySpendAnalytics,
  getYesterdaySpendAnalytics,
  getTotalSpend,
  getMonthlyCloudWiseSpend,
  getTotalCloudWiseSpend,
  getMonthlyStatistics,
  getTotalBudget,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpendAnalytics);