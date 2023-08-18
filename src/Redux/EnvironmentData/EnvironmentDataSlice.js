import { createSlice } from "@reduxjs/toolkit";
import {
  getEnvironmentDataByLandingZone,
  getDepartments,
  getSingleEnvironmentCountData,
  GetInfraTopologyCloudElementList,
} from "Redux/EnvironmentData/EnvironmentDataThunk";
import status from "Redux/Constants/CommonDS";

export const environmentDataSlice = createSlice({
  name: "environmentData",
  initialState: {
    envDataByLandingZone: {
      status: null,
      data: {},
    },
    departments: {
      status: null,
      data: [],
    },
    singleEnvironmentCountData: {
      status: null,
      data: [],
    },
    infraTopologyCloudElementList: {
      status: null,
      data: {},
    },
  },

  extraReducers: {
    [getEnvironmentDataByLandingZone.pending]: (state, action) => {
      return {
        ...state,
        envDataByLandingZone: {
          status: status.IN_PROGRESS,
        },
      };
    },

    [getEnvironmentDataByLandingZone.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        envDataByLandingZone: {
          status: status.SUCCESS,
          data: payload,
        },
      };
    },

    [getEnvironmentDataByLandingZone.rejected]: (state, action) => {
      return {
        ...state,
        envDataByLandingZone: {
          status: status.FAILURE,
        },
      };
    },

    [getDepartments.pending]: (state, action) => {
      return {
        ...state,
        departments: {
          status: status.IN_PROGRESS,
        },
      };
    },

    [getDepartments.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        departments: {
          status: status.SUCCESS,
          data: payload,
        },
      };
    },

    [getDepartments.rejected]: (state, action) => {
      return {
        ...state,
        departments: {
          status: status.FAILURE,
        },
      };
    },

    [getSingleEnvironmentCountData.pending]: (state) => {
      return {
        ...state,
        singleEnvironmentCountData: {
          status: status.initialState,
        },
      };
    },
    [getSingleEnvironmentCountData.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        singleEnvironmentCountData: {
          status: status.SUCCESS,
          data: payload,
        },
      };
    },
    [getSingleEnvironmentCountData.rejected]: (state) => {
      return {
        ...state,
        singleEnvironmentCountData: {
          status: status.FAILURE,
        },
      };
    },

    [GetInfraTopologyCloudElementList.pending]: (state) => {
      return {
        ...state,
        infraTopologyCloudElementList: {
          status: status.initialState,
        },
      };
    },
    [GetInfraTopologyCloudElementList.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        infraTopologyCloudElementList: {
          status: status.SUCCESS,
          data: payload,
        },
      };
    },
    [GetInfraTopologyCloudElementList.rejected]: (state) => {
      return {
        ...state,
        infraTopologyCloudElementList: {
          status: status.FAILURE,
        },
      };
    },
  },
});

export default environmentDataSlice.reducer;
