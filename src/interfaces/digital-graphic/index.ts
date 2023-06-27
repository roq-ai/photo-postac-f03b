import { PurchaseInterface } from 'interfaces/purchase';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DigitalGraphicInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  purchase?: PurchaseInterface[];
  organization?: OrganizationInterface;
  _count?: {
    purchase?: number;
  };
}

export interface DigitalGraphicGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  organization_id?: string;
}
