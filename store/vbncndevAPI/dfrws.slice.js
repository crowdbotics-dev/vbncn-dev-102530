import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_dfrw_list = createAsyncThunk(
  "dfrws/api_v1_dfrw_list",
  async payload => {
    const response = await apiService.api_v1_dfrw_list(payload)
    return response.data
  }
)
export const api_v1_dfrw_create = createAsyncThunk(
  "dfrws/api_v1_dfrw_create",
  async payload => {
    const response = await apiService.api_v1_dfrw_create(payload)
    return response.data
  }
)
export const api_v1_dfrw_retrieve = createAsyncThunk(
  "dfrws/api_v1_dfrw_retrieve",
  async payload => {
    const response = await apiService.api_v1_dfrw_retrieve(payload)
    return response.data
  }
)
export const api_v1_dfrw_update = createAsyncThunk(
  "dfrws/api_v1_dfrw_update",
  async payload => {
    const response = await apiService.api_v1_dfrw_update(payload)
    return response.data
  }
)
export const api_v1_dfrw_partial_update = createAsyncThunk(
  "dfrws/api_v1_dfrw_partial_update",
  async payload => {
    const response = await apiService.api_v1_dfrw_partial_update(payload)
    return response.data
  }
)
export const api_v1_dfrw_destroy = createAsyncThunk(
  "dfrws/api_v1_dfrw_destroy",
  async payload => {
    const response = await apiService.api_v1_dfrw_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dfrwsSlice = createSlice({
  name: "dfrws",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_dfrw_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dfrw_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_dfrw_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dfrw_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dfrw_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_dfrw_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dfrw_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dfrw_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_dfrw_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dfrw_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dfrw_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_dfrw_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dfrw_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dfrw_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_dfrw_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_dfrw_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_dfrw_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_dfrw_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_dfrw_list,
  api_v1_dfrw_create,
  api_v1_dfrw_retrieve,
  api_v1_dfrw_update,
  api_v1_dfrw_partial_update,
  api_v1_dfrw_destroy,
  slice: dfrwsSlice
}
