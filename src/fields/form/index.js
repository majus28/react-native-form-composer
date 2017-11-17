import React, { Component } from 'react';
import { View, Text, Card, CardItem, Body, ListItem, List } from 'native-base';
import GenerateForm from '../../formBuilder';
import PropTypes from 'prop-types';

export default class FormField extends Component {
  static propTypes = {
    attributes: PropTypes.object,
    theme: PropTypes.object,
    updateValue: PropTypes.func,
    autoValidation: PropTypes.bool,
    customValidation: PropTypes.func,
    customComponents: PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
  }
  componentDidMount() {
    this.props.updateValue(this.props.attributes.name, this.group.getValues());
  }
  onValueChange() {
    this.props.updateValue(this.props.attributes.name, this.group.getValues());
  }
  handleChange(text) {
    this.setState({
      value: text,
    }, () => this.props.updateValue(this.props.attributes.name, text));
  }
  render() {
    const {
      attributes,
      theme,
      autoValidation,
      customValidation,
      customComponents,
    } = this.props;
    return (
      <View>
        <List>
          <ListItem itemDivider>
            <Text style={{ fontWeight: '500', fontSize: 17 }}>{attributes.label}</Text>
          </ListItem>                    
        </List>
        <Card>
          <CardItem>
            <GenerateForm
                ref={(c) => { this.group = c; }}
                onValueChange={this.onValueChange}
                autoValidation={autoValidation}
                customValidation={customValidation}
                customComponents={customComponents}
                showErrors
                fields={attributes.fields}
                theme={theme}
              />
          </CardItem>
        </Card>
      </View>
    );
  }
}
