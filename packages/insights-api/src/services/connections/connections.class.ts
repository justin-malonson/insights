import { Service, NedbServiceOptions } from 'feathers-nedb';
import { Application } from '../../declarations';

export interface ConnectionData {
  _id?: string;
  keyword: string;
  url: string;
  structurePath: string;
}

export class Connections extends Service<ConnectionData> {
  constructor(options: Partial<NedbServiceOptions>, app: Application) {
    super(options);
  }
};
