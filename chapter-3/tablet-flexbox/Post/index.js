import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import styles from './styles';

const Post = ({ content, img, title }) => (
  <View style={styles.main}>
    <Image
      source={{ uri: img }}
      style={styles.image}
    />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text>{content}</Text>
    </View>
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Text style={styles.buttonText}>Read more</Text>
    </TouchableOpacity>
  </View>
);

export default Post;