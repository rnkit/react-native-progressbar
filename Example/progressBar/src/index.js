import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Progress from 'react-native-progressbar';

class ProgressBar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }

    this.num = 1;
  }

  /**
   * 设置默认值
   * @type {Object}
   */
  static defaultProps = {
  };

  /**
   * 类型检查
   * @type {Object}
   */
  static propTypes = {
  };

  _showProgress() {
    this.num = 1;
    this.refs.progress.show();
    this._progress();
  }

  _progress() {
    if(this.num >= 99){
      this.refs.progress.finish();
      return;
    }
    this.num++;
    this.refs.progress.changeProgress(this.num/100);
    setTimeout(()=>{
      this._progress();
    },100)
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={()=>this._showProgress()}><Text style={{padding: 10, borderWidth: 1,}}>显示进度条</Text></TouchableOpacity>
        <Progress ref={'progress'} title={'正在下载'}/>
      </View>
    );
  }
}

export default ProgressBar;
