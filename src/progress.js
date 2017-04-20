import React, {
  PropTypes
} from 'react';
import ReactNative, {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Animated,
  Modal,
} from 'react-native';
import styles from './styles';

export default class Progress extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	width: new Animated.Value(0),
	  	modalVisible: false,
	  };

	  this.timeout = -1;
	  this.isShow = false;
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
	  clearTimeout(this.timeout);
	}

	async show() {
		if( this.isShow ) return;
		this.isShow = true;
		await this.setState({
		  modalVisible: true,
		});
		Animated.timing(this.state.width,{
			toValue: 1,
			duration: 100,
			delay: 0,
		}).start();
	}

	changeProgress(num) {
		this.state.width.setValue(num*100);
	}

	async finish() {
		await this.state.width.setValue(100);
		this.timeout = setTimeout(() => {
			this._onRequestClose();
		},100);
	}

	_onRequestClose() {
		this.setState({
		  modalVisible: false,
		},() => {
			this.isShow = false;
			this.state.width.setValue(0);
		});
	}

	render() {
		return(
			<Modal
				animationType={'fade'}
				transparent={true}
				visible={this.state.modalVisible}
				onRequestClose={() => this._onRequestClose()}
			>
				<View style={styles.modal}>
					<View style={styles.container}>
						<Text style={styles.title}>{this.props.title ? this.props.title : '进度'}</Text>
						<View style={styles.progress}>
							<View style={styles.bgBar}></View>
							<Animated.View style={[styles.progressBar, {width: this.state.width}]}></Animated.View>
						</View>
					</View>
				</View>
			</Modal>
		)
	}
}
