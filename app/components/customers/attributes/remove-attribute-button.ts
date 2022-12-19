import { action } from '@ember/object';
import Component from '@glimmer/component';
import { CustomerMappedAttributes } from 'customerio-app/common/customer';

interface RemoveAttributeButtonComponentArgs {
  attributeName: string;
  removeAttribute(args: CustomerMappedAttributes): void;
}

const immutableAttributes = ['id', 'email', 'last_updated'];

export default class RemoveAttributeButtonComponent extends Component<RemoveAttributeButtonComponentArgs> {
  get showButton(): boolean {
    const { attributeName } = this.args;

    if (immutableAttributes.includes(attributeName)) return false;

    return true;
  }

  @action
  removeAttribute(): void {
    this.args.removeAttribute({
      name: this.args.attributeName,
      value: '',
    });
  }
}
