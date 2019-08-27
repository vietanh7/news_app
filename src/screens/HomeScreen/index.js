import React, {Component} from 'react';
import {View, Image, FlatList, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import {connect} from 'react-redux';
import ContainerView from 'components/ContainerView';
import {
  createLoadingSelector,
  createRefreshSelector,
  createLoadMoreSelector,
} from 'reducers/selectors';
import actions from 'actions';
import Spinner from 'components/Spinner';
import {bindActionCreators} from 'redux';
import Touchable from 'components/Touchable';
import AppColors from 'common/AppColors';
import LoadMore from 'components/LoadMore';
import NavigationService from 'services/NavigationService';
import ScreenID from 'common/ScreenID';

const loadingSelector = createLoadingSelector([
  actions.HomeActions.NEWS_PREFIX,
]);

const refreshingSelector = createRefreshSelector([
  actions.HomeActions.NEWS_PREFIX,
]);

const loadmoreSelector = createLoadMoreSelector([
  actions.HomeActions.NEWS_PREFIX,
]);

@connect(
  state => ({
    categories: state.configs.categories,
    data: state.home.news,
    loading: loadingSelector(state),
    refreshing: refreshingSelector(state),
    loadmore: loadmoreSelector(state),
  }),
  dispatch => bindActionCreators(actions, dispatch),
)
export default class HomeScreen extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      jobIndex: 0,
      cateIndex1: 0,
      cateIndex2: 0,
    };
  }
  componentDidMount() {
    this._fetchNews();
  }
  _fetchNews = (params = {}) => {
    const {categories} = this.props;
    const {jobIndex, cateIndex1, cateIndex2} = this.state;
    const {job_functions, industries} = categories;
    const jobId = job_functions[jobIndex].id;
    const cateId1 = industries[0].sub_categories[cateIndex1].id;
    const cateId2 = industries[1].sub_categories[cateIndex2].id;
    this.props.getNews({
      jobId,
      cateId1,
      cateId2,
      ...params,
    });
  };
  _renderItem = ({item}) => (
    <Touchable
      style={styles.containerItem}
      onPress={() =>
        NavigationService.pushToScreen(ScreenID.ContentScreen, {artical: item})
      }>
      <Text style={styles.titleArtical}>{item.title}</Text>
      <Text style={styles.sourceArtical}>{item.source}</Text>
      <View style={styles.tag}>
        {item.industries.map(t => (
          <Text style={styles.tagText} key={t}>
            {t}
          </Text>
        ))}
      </View>
    </Touchable>
  );
  _renderCate1 = ({item, index}) => {
    const bgColor = item.isSelected ? AppColors.primary : AppColors.primaryDark;
    return (
      <Touchable
        style={[
          styles.btnCate,
          {backgroundColor: bgColor},
          item.isSelected && {borderColor: AppColors.accent, borderWidth: 1},
        ]}
        onPress={() => {
          this.setState({cateIndex1: index}, () => {
            this._fetchNews();
          });
        }}>
        <Text style={item.isSelected ? styles.activeTitle : styles.title}>
          {item.title}
        </Text>
      </Touchable>
    );
  };
  _renderCate2 = ({item, index}) => {
    const bgColor = item.isSelected ? AppColors.primary : AppColors.primaryDark;
    return (
      <Touchable
        style={[
          styles.btnCate,
          {backgroundColor: bgColor},
          item.isSelected && {borderColor: AppColors.accent, borderWidth: 1},
        ]}
        onPress={() => {
          this.setState({cateIndex2: index}, () => {
            this._fetchNews();
          });
        }}>
        <Text style={item.isSelected ? styles.activeTitle : styles.title}>
          {item.title}
        </Text>
      </Touchable>
    );
  };
  _onLoadMore = () => {
    const {loadmore, data} = this.props;
    if (loadmore || !data.next) return;
    this._fetchNews({next: data.next});
  };
  _renderBody = () => {
    const {data, loading, refreshing, loadmore} = this.props;
    if (loading) return <Spinner />;
    return (
      <FlatList
        style={{flex: 1}}
        data={data.results}
        keyExtractor={item => `${item.id}`}
        renderItem={this._renderItem}
        refreshing={refreshing}
        onRefresh={() => {
          this._fetchNews({isRefresh: true});
        }}
        onEndReachedThreshold={0.5}
        onEndReached={this._onLoadMore}
        ListFooterComponent={loadmore && <LoadMore />}
      />
    );
  };
  render() {
    const {categories} = this.props;
    const {jobIndex, cateIndex1, cateIndex2} = this.state;
    const {job_functions, industries} = categories;
    return (
      <ContainerView style={styles.container}>
        <Image
          source={require('../../../assets/images/logo_app.png')}
          style={styles.logoApp}
        />
        <View style={styles.jobViews}>
          {job_functions.map((job, index) => {
            const bgColor =
              index == jobIndex ? AppColors.primary : AppColors.primaryDark;

            return (
              <Touchable
                onPress={() => {
                  this.setState({jobIndex: index}, () => {
                    this._fetchNews();
                  });
                }}
                key={`${job.id}`}
                style={[styles.btnJob, {backgroundColor: bgColor}]}>
                <Text
                  style={index == jobIndex ? styles.activeTitle : styles.title}>
                  {job.title}
                </Text>
              </Touchable>
            );
          })}
        </View>
        <FlatList
          style={styles.horizontalView}
          data={industries[0].sub_categories.map((sub, index) => {
            sub.isSelected = index == cateIndex1;
            return sub;
          })}
          horizontal
          keyExtractor={item => `${item.id}`}
          renderItem={this._renderCate1}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          ListHeaderComponent={<View style={{width: 10}} />}
          ListFooterComponent={<View style={{width: 10}} />}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          style={styles.horizontalView}
          data={industries[1].sub_categories.map((sub, index) => {
            sub.isSelected = index == cateIndex2;
            return sub;
          })}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          horizontal
          keyExtractor={item => `${item.id}`}
          renderItem={this._renderCate2}
          ListHeaderComponent={<View style={{width: 10}} />}
          ListFooterComponent={<View style={{width: 10}} />}
          showsHorizontalScrollIndicator={false}
        />
        {this._renderBody()}
      </ContainerView>
    );
  }
}
