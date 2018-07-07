import React, { Component } from 'react';
import { Clipboard, Text } from 'react-native';

export default class ClipboardText extends Component {
  onClipboardCopy = () => {
    const sourceText = this.refs.sourceText.props.children;

    Clipboard.setString(sourceText);
  }

  render() {
    return (
      <Text
        ref="sourceText"
        onLongPress={this.onClipboardCopy}
        {...this.props}
      />
    );
  }
}