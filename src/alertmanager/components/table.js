import React, { Component } from "react";
import "./table.css";

const sortEnum = {
  NONE: 0,
  ASCENDING: 1,
  DESCENDING: 2,
};

class Table extends Component {
  paginationRef;
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.valueFromData.data,
      displayData: this.props.valueFromData.data,
      perPageLimit: this.props.perPageLimit,
      noOfRecordPerPage: this.props.perPageLimit,
      columns: this.props.valueFromData.columns,
      totalPages: "",
      currentPage: 0,
      searchKey: "",
      sortType: sortEnum.NONE,
      sortKey: "",
      isAllChecked: false,
      visibleCheckbox: this.props.visiblecheckboxStatus,
      showSelect: false,
    };
    this.paginationRef = React.createRef();
  }

  tableBodyData() {
    const { displayData, perPageLimit, currentPage, columns, visibleCheckbox } =
      this.state;
    const retData = [];
    const length = displayData.length;
    const cLength = columns.length;
    if (length > 0) {
      for (let i = 0; i < length; i++) {
        if (
          i >= currentPage * perPageLimit &&
          i <= currentPage * perPageLimit + (perPageLimit - 1)
        ) {
          const tdJSX = [];
          if (visibleCheckbox === true) {
            tdJSX.push(
              <td>
                <input
                  type="checkbox"
                  checked={displayData[i].checkStatus}
                  className={`checkbox`}
                  onChange={(e) => {
                    this.onChangeParentCheckbox(e, i);
                  }}
                />
              </td>
            );
          }
          const row = displayData[i];
          for (let j = 0; j < cLength; j++) {
            const column = columns[j];
            if (!column.isRemoved) {
              let key = column.key;
              if (column.isCaseInsensitive) {
                key = key.toLowerCase();
              }
              if (column.renderCallback) {
                const jsx = column.renderCallback(row[key], row);
                tdJSX.push(jsx);
              } else {
                tdJSX.push(<td>{row[key]}</td>);
              }
            }
          }
          retData.push(
            <tr
              className={`${displayData[i].checkStatus ? "checked-row" : ""}`}
              key={i}
            >
              {tdJSX}
            </tr>
          );
        }
      }
    } else {
      retData.push(
        <tr>
          <td colSpan={cLength} style={{ textAlign: "center" }}>
            There is no data
          </td>
        </tr>
      );
    }
    return retData;
  }

  componentDidMount() {
    this.calculateTotalPages(this.state.data);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevProps.valueFromData) !==
      JSON.stringify(this.props.valueFromData)
    ) {
      this.setState({
        data: this.props.valueFromData.data,
        displayData: this.props.valueFromData.data,
        perPageLimit: this.props.perPageLimit,
        noOfRecordPerPage: this.props.perPageLimit,
        columns: this.props.valueFromData.columns,
        totalPages: "",
        currentPage: 0,
        searchKey: "",
        sortType: sortEnum.NONE,
        sortKey: "",
        isAllChecked: false,
        visibleCheckbox: this.props.visiblecheckboxStatus,
        showSelect: false,
      });
      this.calculateTotalPages(this.props.valueFromData.data);
    }
  }

  calculateTotalPages(displayData) {
    const { perPageLimit } = this.state;
    let indexOfLastData = Math.ceil(displayData.length / perPageLimit);
    this.setState({
      totalPages: indexOfLastData,
    });
  }

  tableHeader() {
    const { sortType, sortKey, columns, visibleCheckbox, displayData } =
      this.state;
    const length = columns.length;
    const retData = [];
    if (visibleCheckbox === true && displayData.length > 0) {
      retData.push(
        <th>
          <input
            type="checkbox"
            checked={this.state.isAllChecked}
            onChange={this.checkAllBoxes}
            className="checkbox"
          />
        </th>
      );
    }
    for (let i = 0; i < length; i++) {
      const item = columns[i];
      let icon = "sort-none";
      let onClickSortType = sortEnum.ASCENDING;
      if (sortType === sortEnum.ASCENDING && sortKey === item.key) {
        icon = "sort-ascending";
        onClickSortType = sortEnum.DESCENDING;
      } else if (sortType === sortEnum.DESCENDING && sortKey === item.key) {
        icon = "sort-descending";
        onClickSortType = sortEnum.ASCENDING;
      }
      if (!item.isRemoved) {
        retData.push(
          <th key={i}>
            {item.label}
            <span
              onClick={(e) => {
                this.sortTable(item.key, e, onClickSortType);
              }}
              className={`sort-icon ${icon}`}
            ></span>
          </th>
        );
      }
    }

    return retData;
  }

  checkAllBoxes = (e) => {
    const checked = e.target.checked;
    const { displayData } = this.state;
    for (let j = 0; j < displayData.length; j++) {
      displayData[j].checkStatus = checked;
    }
    this.setState({
      displayData,
      isAllChecked: checked,
    });
  };

  onChangeParentCheckbox = (e, index) => {
    const { displayData } = this.state;
    const checked = e.target.checked;
    let status = false;
    let countCheckedCheckbox = 0;
    displayData[index].checkStatus = checked;
    for (let j = 0; j < displayData.length; j++) {
      if (displayData[j].checkStatus === true) {
        countCheckedCheckbox++;
      } else {
        countCheckedCheckbox--;
      }
    }
    if (countCheckedCheckbox === displayData.length) {
      status = true;
    } else {
      status = false;
    }
    this.setState({
      displayData,
      isAllChecked: status,
    });
  };

  peginationOfTable() {
    const { currentPage, totalPages, displayData } = this.state;
    let rows = [];
    if (displayData.length > 0) {
      for (let i = 0; i < totalPages; i++) {
        rows.push(
          <li className="page-item" key={i}>
            <a
              className={
                currentPage === i ? "page-link active" : "page-link deactive"
              }
              href="#"
              onClick={(e) => this.navigatePage("btn-click", e, i)}
            >
              {i + 1}
            </a>
          </li>
        );
      }
    }
    return (
      <div className="pagination">
        <div className="page-item previous">
          <a
            className={
              currentPage === 0 ? "page-link desable" : "page-link enable"
            }
            href="#"
            onClick={(e) => this.navigatePage("pre", e, "")}
          >
            Previous
          </a>
        </div>
        <ul ref={this.paginationRef}>{rows}</ul>
        {/* <li><a href="#">......</a></li> */}
        <div className="page-item next">
          <a
            className={
              currentPage === this.state.totalPages - 1
                ? "page-link desable"
                : "page-link enable"
            }
            href="#"
            onClick={(e) => this.navigatePage("next", e, "")}
          >
            Next
          </a>
        </div>
      </div>
    );
  }

  navigatePage(target, e, i = null) {
    let { totalPages, currentPage } = this.state;
    e.preventDefault();
    switch (target) {
      case "pre":
        if (currentPage !== 0) {
          currentPage = currentPage - 1;
        }
        break;
      case "next":
        if (currentPage !== totalPages - 1) {
          currentPage = currentPage + 1;
        }
        break;
      case "btn-click":
        currentPage = i;
        break;
    }
    this.setState(
      {
        currentPage,
      },
      () => {
        this.setCurrentPageIntoView();
      }
    );
  }

  setCurrentPageIntoView = () => {
    const { currentPage } = this.state;
    let scrollLeft = currentPage * 28;
    if (this.paginationRef.current) {
      this.paginationRef.current.scrollTo(scrollLeft, 0);
    }
  };

  handleChange = (e) => {
    const { displayData } = this.state;
    const totalData = displayData.length;
    let totalPages = 1;
    let perPageLimit = totalData;
    if (e.target.value !== "all") {
      totalPages = Math.ceil(totalData / e.target.value);
      perPageLimit = e.target.value;
    }
    this.setState({
      perPageLimit,
      totalPages,
      currentPage: 0,
    });
  };

  onSearchChange = (e) => {
    const { value } = e.target;
    this.setState({
      searchKey: value,
      currentPage: 0,
      sortType: sortEnum.NONE,
      sortKey: "",
    });
    const { data, columns } = this.state;
    var queryResult = [];
    if (data.length > 0) {
      if (value.trim()) {
        for (let i = 0; i < data.length; i++) {
          let row = data[i];
          for (let j = 0; j < columns.length; j++) {
            let colData = columns[j].key;
            if (row[colData]) {
              if (
                row[colData].toLowerCase().indexOf(value) !== -1 ||
                row[colData].indexOf(value) !== -1
              ) {
                queryResult.push(data[i]);
                break;
              }
            }
          }
        }
      } else {
        queryResult = data;
      }
      this.setState({
        displayData: queryResult,
      });
      this.calculateTotalPages(queryResult);
    }
  };

  displayShowPageLimit() {
    const { noOfRecordPerPage, displayData } = this.state;
    let pageData = [];
    let i = noOfRecordPerPage;
    while (i <= displayData.length) {
      pageData.push(<option value={i}>{i}</option>);
      i = i + noOfRecordPerPage;
    }
    pageData.push(<option value="all">All</option>);
    return pageData;
  }

  sortTable(sortkey, e, sortVal) {
    this.setState({
      sortType: sortVal,
      sortKey: sortkey,
    });
    e.preventDefault();
    const data = this.state.data;
    if (sortVal === sortEnum.ASCENDING) {
      data.sort((a, b) => {
        if (a[sortkey] && b[sortkey]) {
          return a[sortkey].localeCompare(b[sortkey]);
        }
        return 0;
      });
    } else if (sortVal === sortEnum.DESCENDING) {
      data
        .sort((a, b) => {
          if (a[sortkey] && b[sortkey]) {
            return a[sortkey].localeCompare(b[sortkey]);
          }
          return 0;
        })
        .reverse();
    }
    this.setState({
      displayData: data,
    });
  }

  renderColumns = () => {
    const { columns } = this.state;
    const retData = [];
    if (columns) {
      for (let i = 0; i < columns.length; i++) {
        const item = columns[i];
        retData.push(
          <label className="option" htmlFor={item.key}>
            <input
              id={item.key}
              checked={!item.isRemoved}
              type="checkbox"
              onChange={(e) => this.handleChecked(e, i)}
            />
            {item.label}
          </label>
        );
      }
    }
    return retData;
  };

  handleChecked = (e, index) => {
    const { columns } = this.state;
    const { checked } = e.target;
    columns[index].isRemoved = !checked;
    this.setState({
      columns,
    });
  };

  toggleColumnSelect = () => {
    this.setState({
      showSelect: !this.state.showSelect,
    });
  };

  render() {
    const { displayData, perPageLimit, currentPage, showSelect } = this.state;
    // let { tableClasses, showingLine, dark } = this.props;
    let { tableClasses, showingLine } = this.props;
    let startIndex = perPageLimit * currentPage + 1;
    let endIndex = perPageLimit * (currentPage + 1);
    if (endIndex > displayData.length) {
      endIndex = displayData.length;
    }
    if (showingLine) {
      showingLine = showingLine.replace("%start%", startIndex);
      showingLine = showingLine.replace("%end%", endIndex);
      showingLine = showingLine.replace("%total%", displayData.length);
    }
    return (
      // <div className={`${tableClasses.parentClass} custom-table ${dark ? 'dark' : ''}`}>
      <div className={`${tableClasses.parentClass} custom-table`}>
        <div className="toolbar">
          <div className="showing">{showingLine}</div>
          <div className="showby">
            <label>Show</label>
            <select onChange={this.handleChange} className="form-control">
              {this.displayShowPageLimit()}
            </select>
            <span>entries per page</span>
          </div>
          <div className="multiselect">
            <div
              className="form-control select-label"
              onClick={this.toggleColumnSelect}
            >
              Select columns <i className="arrow down"></i>
            </div>
            <div
              style={{ display: showSelect ? "" : "none" }}
              className="border options"
            >
              {this.renderColumns()}
            </div>
          </div>
          <div className="filter-search-control">
            <input
              type="text"
              className="input-group-text"
              onChange={this.onSearchChange}
              value={this.state.searchKey}
            />
            <button>
              <span>Search</span>
            </button>
          </div>
        </div>
        <div className={`${tableClasses.tableParent} data-table-parent`}>
          <table className={`${tableClasses.table} data-table`}>
            <thead>
              <tr>{this.tableHeader()}</tr>
            </thead>

            <tbody>{this.tableBodyData()}</tbody>
          </table>
        </div>
        <div className="d-block width-100 pt-3 text-right">
          {this.peginationOfTable()}
        </div>
      </div>
    );
  }
}

export default Table;
