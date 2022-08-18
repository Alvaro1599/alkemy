import { CurrentDatabase } from '../instance/base/base';
import { GlobalConfigI } from './../../config/interface/index';
export interface DatabaseBlockConstructorI{
    ConfigGlobal:GlobalConfigI,
    currentDatabase:CurrentDatabase
}