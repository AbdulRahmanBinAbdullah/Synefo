import React, { Component } from "react";
import DiscoveredAssets from "./DiscoveredAssets";
import Application from "./Application";
import Billing from "./Billing";
import ThreatEvents from "./ThreatEvents";
import CompliancePolicies from "./CompliancePolicies";
import Alerts from "./Alerts";
import Inputs from "./Inputs";
import apiEndPoint from "../../../../Services";
import ServicesNameLogo from "./ServicesNameLogo";
import { config } from "../../../config";

class EnvironmentList extends Component {
  tabMapping = [
    {
      name: "Discovered Assets",
      dataKey: "discovered",
    },
    {
      name: "Application",
      dataKey: "application",
    },
    {
      name: "Billing",
      dataKey: "billing",
    },
    {
      name: "Threat and security Events",
      dataKey: "threat",
    },
    {
      name: "Compliance Policies",
      dataKey: "compliance",
    },
    {
      name: "Alerts",
      dataKey: "alerts",
    },
    {
      name: "Inputs",
      dataKey: "inputs",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      servicesPanelShow: false,
      activeTab: 0,
      treeData: [],
      isLoderData: true,
      service: this.getCloudName(),
      departmentWiseData: {},
      accountList: {},
      commonData: {},
      searchedAccountList: {},
      dataFetched: false,
    };
  }

  toggleColumnSelect = () => {
    this.setState({
      servicesPanelShow: !this.state.servicesPanelShow,
    });
  };

  setActiveTab = (activeTab) => {
    this.setState({ activeTab });
  };

  getCloudName() {
    const queryPrm = new URLSearchParams(document.location.search);
    return queryPrm.get("cloudName");
  }

  componentDidMount = async () => {
    if (this.state.service !== localStorage.getItem("serviceName")) {
      this.setState({ service: localStorage.getItem("serviceName") });
    }
    this.getCurrentAccountId();
    this.getAccountList();
  };

  getAccountList = () => {
    fetch(config.GET_ALL_ENVS)
      .then((response) => response.json())
      .then((data) => {
        const commonData = {};
        const accounts = {};
        data.forEach((account) => {
          accounts[account.cloud] = accounts[account.cloud] || [];
          accounts[account.cloud].push(account);
          commonData[account.cloud] = commonData[account.cloud]
            ? commonData[account.cloud]
            : {
                totalBill: 0,
              };
          commonData[account.cloud].totalBill += account.totalBilling || 0;
        });
        this.setState({
          accountList: accounts,
          commonData,
          searchedAccountList: JSON.parse(JSON.stringify(accounts)),
          dataFetched: true,
        });
      });
  };

  componentDidUpdate = async (prevState, prevProps) => {
    if (
      this.state.currentAccountId !== null &&
      this.state.currentAccountId !== prevProps.currentAccountId
    ) {
      const response = await fetch(
        `${apiEndPoint.getDepartmentWiseData + this.state.currentAccountId}`
      );
      const jsonData = await response.json();
      this.setState({ departmentWiseData: jsonData });
    }
  };

  getCurrentAccountId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accountId = urlParams.get("accountId");
    this.setState({ currentAccountId: accountId });
  };

  updateCurrentAccountId = (id) => {
    this.setState({ currentAccountId: id });
  };

  renderEnvironmentBoxes = () => {
    const { accountList, commonData } = this.state;
    const currentEnv = accountList[this.getCloudName()];
    const retData = [];
    retData.push(
      <ul>
        <li>
          <div className="data-text">
            <span style={{ backgroundColor: "#ff9900" }}></span>
            <p>Environments</p>
          </div>
          <label>{currentEnv.length}</label>
        </li>
        <li>
          <div className="data-text">
            <span style={{ backgroundColor: "#0089d6" }}></span>
            <p>Assets</p>
          </div>
          <label>0</label>
        </li>
        <li>
          <div className="data-text">
            <span style={{ backgroundColor: "#da4f44" }}></span>
            <p>Alerts</p>
          </div>
          <label>0</label>
        </li>
        <li>
          <div className="data-text">
            <span style={{ backgroundColor: "#00b929" }}></span>
            <p>Total Alerts</p>
          </div>
          <label>&#65284;{commonData[this.getCloudName()].totalBill}</label>
        </li>
      </ul>
    );
    return retData;
  };

  render() {
    const { servicesPanelShow, activeTab } = this.state;
    return (
      <div className="environmentlist-container">
        <div className="list-heading">
          <h3>Environments</h3>
        </div>
        <div className="services-panel">
          <div
            className={`services-panel-title ${
              servicesPanelShow ? "bottom-border" : ""
            }`}
          >
            <div className="image">
              <img src={ServicesNameLogo.LOGOS[this.getCloudName()]} />
            </div>
            <div className="name">{this.getCloudName()}</div>
            <div
              className="right-arrow"
              onClick={() => this.toggleColumnSelect("filterShow")}
            >
              <i
                className={`fa ${
                  servicesPanelShow ? "fa-caret-down" : "fa-caret-right"
                }`}
              ></i>
            </div>
          </div>
          <div
            className="data-contant"
            style={{ display: servicesPanelShow ? "" : "none" }}
          >
            {this.state.dataFetched && this.renderEnvironmentBoxes()}
          </div>
        </div>
        <div className="services-panel-tabs">
          <div className="tabs-head">
            <ul>
              {this.tabMapping.map((tabData, index) => {
                return (
                  <li
                    key={`ops-tab-${index}`}
                    className={index === activeTab ? "active" : ""}
                    onClick={(e) => this.setActiveTab(index)}
                  >
                    {tabData.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="tabs-content">
            {activeTab === 0 ? (
              <DiscoveredAssets
                updateCloudName={(service) => {
                  this.setState({ service });
                }}
              />
            ) : activeTab === 1 ? (
              <Application
                departmentWiseData={this.state?.departmentWiseData}
                updateCurrentAccountId={this.updateCurrentAccountId}
              />
            ) : activeTab === 2 ? (
              <Billing />
            ) : activeTab === 3 ? (
              <ThreatEvents
                updateCurrentAccountId={this.updateCurrentAccountId}
              />
            ) : activeTab === 4 ? (
              <CompliancePolicies
                updateCurrentAccountId={this.updateCurrentAccountId}
              />
            ) : activeTab === 5 ? (
              <Alerts updateCurrentAccountId={this.updateCurrentAccountId} />
            ) : (
              <Inputs updateCurrentAccountId={this.updateCurrentAccountId} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default EnvironmentList;
