import { production } from './env/production';
import { development } from "./env/development";
import { GlobalConfigI } from "./interface";

export const GlobalConfig:GlobalConfigI=process.env.NODE_ENV?.trim()=="development"?development:production