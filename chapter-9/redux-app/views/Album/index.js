import React, { Component } from 'react';
import {
  ListView,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import randomColor from 'randomcolor';
import { connect } from 'react-redux';
import {
  fetchPhotos,
  addPhoto,
  removePhoto
} from '../../redux/photos/actions';

class Album extends Component {
  state = {
    dataSource: {},
    photos: [],
    loaded: false
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.photos !== nextProps.photos) {
      this.setState({
        loaded: true,
        photos: nextProps.photos
      });
    }
  }

  componentWillMount() {
    this.props.fetchPhotos();
  }

  addPhoto = () => {
    const photo = {
      "albumId": 2,
      "title": "dolore esse a in eos sed",
      "url": `http://placehold.it/600/${randomColor().replace('#', '')}`,
      "thumbnailUrl": `http://placehold.it/150/${randomColor().replace('#', '')}`
    };
    this.props.addPhoto(photo);
    this.props.fetchPhotos();
  }

  removePhoto = (id) => {
    this.props.removePhoto(id);
    this.props.fetchPhotos();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.toolbar}>Album</Text>
          <ScrollView>
            <View style={styles.imageContainer}>
              <TouchableOpacity style={styles.button} onPress={this.addPhoto}>
                <Text style={styles.buttonText}>Add Photo</Text>
              </TouchableOpacity>
              {this.props.photos ? this.props.photos.map((photo) => {
                return(
                  <TouchableOpacity onPress={() => this.removePhoto(photo.id)} key={photo.id}>
                    <Image style={styles.image}
                      source={{ uri: photo.url }}
                    />
                  </TouchableOpacity>
                );
              }) : null}
            </View>
          </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300
  },
  button: {
    margin: 10,
    padding: 20,
    backgroundColor: '#3498db'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});

const mapStateToProps = (state) => {
  return {
    photos: state.photos.loadedPhotos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    addPhoto: (photo) => dispatch(addPhoto(photo)),
    removePhoto: (id) => dispatch(removePhoto(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);