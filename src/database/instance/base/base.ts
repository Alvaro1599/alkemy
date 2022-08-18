import { GlobalConfigI } from "../../../config/interface";

export abstract class CurrentDatabase{
    abstract init({db}:GlobalConfigI):Promise<any>
}