import { ConstructorProp } from "../../types";
import { card } from "./card";
import { credential } from "./credential";
import { organization } from "./organization";
import { smtp } from "./smtp";
import { statistics } from "./statistics";
import { subscription } from "./subscription";
import { team } from "./team";
import { transactions } from "./transactions";
import { users } from "./users";
import { wallet } from "./wallet";

export const management = (prop: ConstructorProp) => Object.freeze({
  statistics: statistics(prop),
  wallet: wallet(prop),
  users: users(prop),
  credential: credential(prop),
  smtp: smtp(prop),
  organization: organization(prop),
  team: team(prop),
  card: card(prop),
  transactions: transactions(prop),
  subscription: subscription(prop),
});