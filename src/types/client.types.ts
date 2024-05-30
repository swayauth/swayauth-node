import { accountClient, accountShared } from "../method/account";
import { auth } from "../method/auth";
import { management } from "../method/management";

export interface ClientMethodType {
  auth: Readonly<Pick<ReturnType<typeof auth>, 'login'>>;
  account: Readonly<ReturnType<typeof accountShared> & ReturnType<typeof accountClient>>
  management: Readonly<ReturnType<typeof management>>
};