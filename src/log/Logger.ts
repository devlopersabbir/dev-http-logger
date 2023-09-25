import { NextFunction, Request, Response } from "express";
import LogListenOptions from "../utils/interface/interface";
import EPurpose from "../utils/enums/enums";

class Log {
  /**
   *
   * @param options
   */
  private origin?: boolean;
  private showHeader?: boolean;
  private purpose?: EPurpose;

  constructor(private options?: LogListenOptions) {
    this.origin = options?.origin;
    this.showHeader = options?.showHeader;
    this.purpose = options?.purpose as EPurpose;
  }
  /**
   * middleware
   */
  middleware = () => {
    return (req: Request, res: Response, next: NextFunction) => {
      /**
       * @Description all response fuctionality is here.
       */
      const authHeader: string | undefined = req.headers.authorization;
      const method: string = req.method;
      const path: string = req.path;
      const statuscode: number = res.statusCode;

      /**
       * purpose condition
       */
      const isOrigin: string | undefined = this.origin
        ? req.headers.origin
        : undefined;
      const isHeader: string | undefined = this.showHeader
        ? authHeader
        : undefined;
      const isPurpose: string | undefined = this.purpose
        ? `🚀 ${this.purpose}`
        : undefined;

      /**
       * logging...
       */
      const logMessage = [
        "\x1b[31m============== dev-http-logger ===============\x1b[31m",
        isPurpose || isOrigin || isHeader
          ? `\x1b[35m${isPurpose || isOrigin || isHeader}\x1b[35m`
          : "",
        `\x1b[37m${method}\x1b[37m \x1b[33m${path}\x1b[33m \x1b[36m${statuscode}\x1b[0m`,
        "\x1b[31m============== dev-http-logger ===============\x1b[31m",
      ]
        .filter(Boolean)
        .join("\n");
      console.log(logMessage);
      next();
    };
  };
}
const logger = (options?: LogListenOptions) => {
  const log = new Log(options);
  return log.middleware();
};
export default logger;
