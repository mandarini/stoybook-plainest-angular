import { text, number, boolean } from '@storybook/addon-knobs';
import { MyTestComponent } from './my-test.component';

export default {
  title: 'MyTestComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: MyTestComponent,
  props: {
    name: text('name', ''),
    age: number('age', 0),
    other: boolean('other', false),
  }
})