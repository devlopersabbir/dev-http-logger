import { NextFunction, Request, Response } from "express";
import { LogListenOptions } from "./utils/interface/interface";
export declare const Logger: ({ origin, showHeader }: LogListenOptions) => (req: Request, res: Response, next: NextFunction) => void;
