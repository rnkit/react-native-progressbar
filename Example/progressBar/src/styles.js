import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  container: {
    width: 150,
    height: 100,
    backgroundColor: '#000000',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#ffffff',
    // marginTop: 20
  },
  progress: {
    position: 'relative',
    width: 100,
    height: 2,
    marginTop: 25,
  },
  bgBar: {
    height: 2,
    backgroundColor: '#cccccc',
  },
  progressBar: {
    width: 20,
    height: 2,
    backgroundColor: 'green',
    position: 'absolute',
    left: 0,
    top: 0,
  },
});

export default styles;