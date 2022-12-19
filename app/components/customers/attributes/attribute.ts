import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from 'ember-deep-tracked';
import { CustomerMappedAttributes } from '../../../common/customer';

interface AttributeComponentArgs {
  attribute: CustomerMappedAttributes;
  viewMode: 'view' | 'edit';
  updateAttribute(arg: CustomerMappedAttributes): void;
}

export default class AttributeComponent extends Component<AttributeComponentArgs> {
  @tracked attributeValue: string = this.args.attribute.value;

  @action
  onAttributeValueInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.attributeValue = target.value;

    if (this.args.viewMode === 'edit') {
      this.args.updateAttribute({
        name: this.args.attribute.name,
        value: this.attributeValue,
      });
    }
  }
}
