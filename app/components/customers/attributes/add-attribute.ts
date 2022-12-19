import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { CustomerMappedAttributes } from '../../../common/customer';

interface AddAttributeComponentArgs {
  add(arg: CustomerMappedAttributes): void;
}

export default class AddAttributeComponent extends Component<AddAttributeComponentArgs> {
  @tracked attributeName: string = '';
  @tracked attributeValue: string = '';

  @action
  onAttributeInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.attributeName = target.value;
  }

  @action
  onAttributeValueInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.attributeValue = target.value;
  }

  @action
  onAdd(): void {
    this.args.add({
      name: this.attributeName.toLowerCase(),
      value: this.attributeValue,
    });

    this.attributeName = '';
    this.attributeValue = '';
  }
}
