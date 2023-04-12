import { NextFunction, Request, Response } from "express";
import { LogListenOptions } from "./utils/interface/interface";

export const Logger = ({ origin, showHeader }: LogListenOptions) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader: string | undefined = req.headers.authorization;
    const method: string = req.method;
    const path: string = req.path;
    const statuscode: number = res.statusCode;
    const isOrigin: string | null | undefined = origin
      ? req.headers.origin
      : null;
    const isHeader: string | null | undefined = showHeader ? authHeader : null;
    const logMessage = [
      "\x1b[31m============== dev-http-logger ===============\x1b[31m",
      isOrigin || isHeader ? `\x1b[35m${isOrigin || isHeader}\x1b[35m` : "",
      `\x1b[37m${method}\x1b[37m \x1b[33m${path}\x1b[33m \x1b[36m${statuscode}\x1b[0m`,
      "\x1b[31m============== dev-http-logger ===============\x1b[31m",
    ]
      .filter(Boolean)
      .join("\n");

    console.log(logMessage);
    next();
  };
};
