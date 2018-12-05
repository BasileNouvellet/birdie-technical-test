// @flow

import type {
  TableStateVariableType,
  TableStateDataType,
  TableStateColumnsType,
} from './index';

// types
export type TableActionsTypesType = {|
  SET_VARIABLE: 'table/SET_VARIABLE',
  FETCH_COLUMNS: 'table/FETCH_COLUMNS',
  FETCH_DATA: 'table/FETCH_DATA',
  SET_COLUMNS: 'table/SET_COLUMNS',
  SET_DATA: 'table/SET_DATA',
  RESET_DATA: 'table/RESET_DATA',
|};
export const types: TableActionsTypesType = {
  SET_VARIABLE: 'table/SET_VARIABLE',
  FETCH_COLUMNS: 'table/FETCH_COLUMNS',
  FETCH_DATA: 'table/FETCH_DATA',
  SET_COLUMNS: 'table/SET_COLUMNS',
  SET_DATA: 'table/SET_DATA',
  RESET_DATA: 'table/RESET_DATA',
};

// set variable action
export type SetVariableActionType = {|
  type: typeof types.SET_VARIABLE,
  payload: {|
    variable: TableStateVariableType,
  |},
|};

export function setVariableAction(variable: TableStateVariableType): SetVariableActionType {
  return {
    type: types.SET_VARIABLE,
    payload: {
      variable,
    },
  };
}

// fetch columns action
export type FetchColumnsActionType = {|
  type: typeof types.FETCH_COLUMNS,
|};

export function fetchColumnsAction(): FetchColumnsActionType {
  return {
    type: types.FETCH_COLUMNS,
  };
}

// set columns action
export type SetColumnsActionType = {|
  type: typeof types.SET_COLUMNS,
  payload: {|
    columns: TableStateColumnsType,
  |},
|};

export function setColumnsAction(columns: TableStateColumnsType): SetColumnsActionType {
  return {
    type: types.SET_COLUMNS,
    payload: {
      columns,
    },
  };
}

// fetch data action
export type FetchDataActionType = {|
  type: typeof types.FETCH_DATA,
  payload: {|
    variable: TableStateVariableType,
  |},
|};

export function fetchDataAction(variable: TableStateVariableType): FetchDataActionType {
  return {
    type: types.FETCH_DATA,
    payload: {
      variable,
    },
  };
}

// set data action
export type SetDataActionType = {|
  type: typeof types.SET_DATA,
  payload: {|
    data: TableStateDataType,
  |},
|};

export function setDataAction(data: TableStateDataType): SetDataActionType {
  return {
    type: types.SET_DATA,
    payload: {
      data,
    },
  };
}

// reset data action
export type ResetDataActionType = {|
  type: typeof types.RESET_DATA,
|};

export function resetDataAction(): ResetDataActionType {
  return {
    type: types.RESET_DATA,
  };
}

// Table Action Type
export type TableActionType =
  SetVariableActionType
  | FetchColumnsActionType
  | SetColumnsActionType
  | FetchDataActionType
  | SetDataActionType
  | ResetDataActionType;
