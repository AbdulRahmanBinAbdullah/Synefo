import React, { Component } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#ffffffff",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#ffffffff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
class ChartWrapper extends Component {
  render() {
    let { ChartComponent, data } = this.props;
    let { title, labelOfBtn, link } = data;
    return (
      <Box className="reports-chart-box">
        <Box className="heading p-b-10">
          <Box className="chart-title">
            <h4 className="title">
              <HtmlTooltip className="table-tooltip" title={title}>
                {title}
              </HtmlTooltip>
            </h4>
            {data?.description ? (
              <span className="description">
                <HtmlTooltip
                  className="table-tooltip"
                  title={data?.description}
                >
                  {data?.description}
                </HtmlTooltip>
              </span>
            ) : (
              <></>
            )}
          </Box>
          <Link to={`${link ? link : "#"} `}>
            <Button
              className="primary-outline-btn min-width"
              variant="outlined"
            >
              {labelOfBtn}
            </Button>
          </Link>
        </Box>
        <Box className="chart-content">{ChartComponent}</Box>
      </Box>
    );
  }
}

export default ChartWrapper;
