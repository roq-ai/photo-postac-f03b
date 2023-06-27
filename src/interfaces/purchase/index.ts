import { UserInterface } from 'interfaces/user';
import { DigitalGraphicInterface } from 'interfaces/digital-graphic';
import { GetQueryInterface } from 'interfaces';

export interface PurchaseInterface {
  id?: string;
  client_id?: string;
  digital_graphic_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  digital_graphic?: DigitalGraphicInterface;
  _count?: {};
}

export interface PurchaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  client_id?: string;
  digital_graphic_id?: string;
}
