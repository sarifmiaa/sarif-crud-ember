import Component from '@glimmer/component';

interface ButtonComponentArgs {
  appearance: 'link' | 'primary';
  onClick(event: MouseEvent): void;
  link?: string;
  model?: string;
  type: 'button' | 'link';
}

export default class ButtonComponent extends Component<ButtonComponentArgs> {
  get isButtonOfTypeLink(): boolean {
    if (this.args.type === 'link') return true;

    return false;
  }
}
