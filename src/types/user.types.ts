import { accountShared } from "../method/account";
import { auth } from "../method/auth";
import { twoFA } from "../method/twoFA";

export interface UserMethodType {
  auth: Readonly<ReturnType<typeof auth>>;
  twoFA: Readonly<ReturnType<typeof twoFA>>;
  account: Readonly<ReturnType<typeof accountShared>>
};