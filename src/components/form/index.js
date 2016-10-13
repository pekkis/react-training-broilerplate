import {
  BaseForm,
  BaseButton,
  BaseInput,
  BaseLabel,
  BaseInputGroup,
  BaseSelect,
  BaseCheckbox,
  BaseRadio,
  BaseTextarea,
  components
} from './base';
import { withStyles } from './utils';

function createStyles(components) {
  return components
    .reduce((styles, component) => {
      return {
        ...styles,
        [component]: require(`./styles/${component}.pcss`)
      };
    }, {});
}

const styles = createStyles(components);
const Button = withStyles(styles.Button)(BaseButton);
const Form = withStyles(styles.Form)(BaseForm);
const Input = withStyles(styles.Input)(BaseInput);
const Label = withStyles(styles.Label)(BaseLabel);
const InputGroup = withStyles(styles.InputGroup)(BaseInputGroup);
const Select = withStyles(styles.Select)(BaseSelect);
const Checkbox = withStyles(styles.Checkbox)(BaseCheckbox);
const Radio = withStyles(styles.Radio)(BaseRadio);
const Textarea = withStyles(styles.BaseTextarea)(BaseTextarea);

export {
  Form,
  Button,
  Input,
  Label,
  InputGroup,
  Select,
  Checkbox,
  Radio,
  Textarea,
};
