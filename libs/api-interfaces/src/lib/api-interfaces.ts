import { number } from 'yup';

export interface Message {
  message: string;
}

export interface ISuccess {
  status: number;
  message: string;
  data: any;
}

export interface IError {
  status: number;
  message: string;
  data: any;
}

// Popup or content script requesting the current status
interface SnowRequest {
  type: 'REQ_TOGGLE_STATUS';
}

// Background script broadcasting current status
interface SnowResponse {
  type: 'TOGGLE_STATUS';
  isEnabled: boolean;
}

// Popup requesting background script for status change
interface SnowToggle {
  type: 'TOGGLE_ON_OFF';
  isEnabled: boolean;
}

// interface IToken {
//     type: "TOKEN",
//     token: string
// }

export type MessageType = SnowRequest | SnowResponse | SnowToggle;
