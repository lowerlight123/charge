/**
 * Created by liwanchong on 2016/8/2.
 */
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import { createStore, applyMiddleware, compose, bindActionCreators } from 'redux';
import { Router, Scene, Modal, ActionConst } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';

import store from 'react-native-simple-store';
import ChargeView from './../../containers/android/ChargeView';
import routeReducerCreator from './../../reducers/routeReducerCreator';

import ReduxStore from './../../store/store';
import Login from '../../containers/android/Login';
import Start from '../../containers/android/Start';
import DetailInfo from '../../containers/android/Detail';
import Helper from '../../utils/helper';
import ShellsDetail from '../../containers/android/ShellsDetail';
import Choose from '../../containers/android/Choose';
import About from './../../containers/android/About';
import HelpView from './../../containers/android/HelpView';
import Main from './../../containers/android/Main';
import SearchList from '../../containers/android/SearchList';

import { Global } from '../../Global';
import imageViewPage from '../../containers/android/imageViewPager';
import Regist from './Regist';
import UserAgreement from './UserAgreement';
import FindPassword from './FindPassword';
import Error from './Error';
import appActions from '../../actions/appActions';


const styles = StyleSheet.create({
  textInput: {
    color: 'black',
    flex: 1,
    height: 40,
  },
  container: {
    width: 250,
    marginLeft: 60,
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    marginTop: 5,
  },
});
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    Helper.bindMethod(this);
  }

  componentWillUnmount() {
    store.save('appState', Global.appState);
  }

  test1() {
    console.log(2222);
  }

  searchCharge(data) {
    console.log(data);
    // this.props.getChargeList()
  }

  title() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="搜索地点" placeholderTextColor="black" style={styles.textInput}
          underlineColorAndroid="transparent" autoFocus onChangeText={this.searchCharge}
        />
      </View>
    );
  }

  render() {
    return (
      <Provider store={ReduxStore}>
        <Router createReducer={routeReducerCreator}>
          <Scene key="modal" component={Modal}>
            <Scene key="root">
              <Scene key="start" component={Start} title="Start" hideNavBar hideTabBar initial/>
              <Scene key="login" component={Login} title="登陆" hideNavBar={false}/>
              <Scene key="regist" component={Regist} title="注册" hideNavBar={false}/>
              <Scene key="userAgreement" component={UserAgreement} title="用户协议" hideNavBar={false}/>
              <Scene key="findPassword" component={FindPassword} title="手机找回密码" hideNavBar={false}/>
              <Scene key="mainModule" direction="horizontal">
                <Scene
                  key="main"
                  component={Main}
                  title="Main"
                  hideNavBar
                />
                <Scene
                  key="Introduction"
                  component={Introduction}
                  title="Introduction"
                  hideNavBar
                />
                <Scene
                  key="shellsDetail"
                  component={ShellsDetail}
                  title="shellsDetail"
                  hideNavBar
                />
                <Scene
                  key="DetailInfo"
                  component={DetailInfo}
                  title="DetailInfo"
                  hideNavBar
                />
                <Scene
                  key="imageViewPage"
                  component={imageViewPage}
                  title="imageViewPage"
                  hideNavBar
                />
              </Scene>
              <Scene
                key="Choose"
                component={Choose}
                title="个人定制"
                rightTitle="重置"
                onRight={this.test1}
                hideNavBar={false}
              />
              <Scene
                key="SearchList"
                component={SearchList}
                hideNavBar={false}
                renderTitle={this.title}
              />
              <Scene
                key="About" component={About}
                title="关于"
                hideNavBar={false}
              />
              <Scene
                key="HelpView"
                component={HelpView}
                title="帮助"
                hideNavBar={false}
              />
              <Scene
                key="ChargeView"
                component={ChargeView}
                title="桩家视界"
                hideNavBar={false}
              />
            </Scene>
            <Scene
              key="error"
              component={Error}
            />
          </Scene>
        </Router>
      </Provider>
    );
  }

}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(appActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
