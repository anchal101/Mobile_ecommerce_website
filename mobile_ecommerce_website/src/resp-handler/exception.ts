



class Exception {
    errType: any;
    message: any;
    err: any;
    constructor(errType: number, message: string, stackTrace?: undefined) {
      this.errType = errType;
      this.message = message;
      if (stackTrace) {
        this.err = stackTrace;
      }
    }
  }

export default Exception 