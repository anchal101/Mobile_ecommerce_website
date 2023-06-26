import {STATUS_CODE}  from "./constants";

class ApiResponse {

  statusCode: any;
  result: any;
  error: any;
  time: number;
  constructor(statusCode:any, result:any) {
    this.statusCode = statusCode;
    if (statusCode == STATUS_CODE.SUCCESS) {
      result ? this.result = result : {};
    }
    else {
      result ? this.error = result : {};
    }
    this.time = new Date().getTime();
  }
}

export default ApiResponse;