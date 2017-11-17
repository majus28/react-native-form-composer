import React, { Component } from 'react';
import { Platform, View } from "react-native";
import { Container, Header, Title, Content, Grid, Col,  Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem, ListItem } from "native-base";
import Panel from '../../components/panel';
import styles from './../../styles';
import PropTypes from 'prop-types';

const Item = Picker.Item;
export default class PickerField extends Component {
  static propTypes = {
    attributes: PropTypes.object,
    theme: PropTypes.object,
    updateValue: PropTypes.func,
    ErrorComponent: PropTypes.func,
  }
  handleChange(value) {
    const attributes = this.props.attributes;
    this.props.updateValue(attributes.name, attributes.options[value]);
  }
  render() {
    const { theme, attributes, ErrorComponent } = this.props;
    const isValueValid = attributes.options.indexOf(attributes.value) > -1;
    const pickerValue = attributes.options.indexOf(attributes.value).toString();
    return(
      <ListItem>
        <View style={{flex:0.3}}>
            <Text style={{ color: theme.inputColorPlaceholder,  fontSize:14}} >{attributes.label}</Text>
      </View>
      <Left>
      <View style={{flex:0.7}}>
        <Form>
          <Picker
          style={{height:30 }}
            mode={attributes.mode}
            iosHeader={attributes.label}
            selectedValue={pickerValue}
            onValueChange={value => this.handleChange(value)}
            >
            {attributes.options.map((item, index) => (
                    <Item  label={item} value={`${index}`} />
                    ))
              }
          </Picker>
        </Form>
      <ErrorComponent {...{ attributes, theme }} />
      </View>
      </Left>
    </ListItem>
      );
    }
}
