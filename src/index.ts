import { accountClient, accountShared } from "./method/account";
import { auth } from "./method/auth";
import { management } from "./method/management";
import { twoFA } from "./method/twoFA";
import { ClientMethodType, ConstructorProp, UserMethodType } from "./types";
export * from './types';

export default class Swayauth {
  client: ClientMethodType
  user: UserMethodType

  constructor({ AccesssToken = '', ApplicationKey = '', OrganizationSecret = '' }: ConstructorProp) {
    this.client = {
      auth: { login: auth({ ApplicationKey, type: 'client' }).login },
      management: management({ ApplicationKey, AccesssToken, OrganizationSecret }),
      account: {
        ...accountShared({ ApplicationKey, AccesssToken }),
        ...accountClient({ ApplicationKey, AccesssToken })
      }
    }

    this.user = {
      auth: auth({ ApplicationKey, OrganizationSecret, type: 'user' }),
      twoFA: twoFA({ AccesssToken }),
      account: accountShared({ ApplicationKey, AccesssToken })
    }
  }
}