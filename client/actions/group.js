import {
  FETCH_GROUP_LIST,
  FETCH_CURR_GROUP
} from '../constants/action-types';
import axios from 'axios';

export function fetchGroupList() {
  return {
    type: FETCH_GROUP_LIST,
    // payload 可以返回 Promise，异步请求使用 axios 即可
    payload: axios.get('/group/list')
    // payload: new Promise((resolve) => {
    //   resolve({
    //     data: ['Hotel', 'Vacation', 'Flight', 'Pay'],
    //     res: true
    //   })
    // })
  }
}

export function fetchCurrGroup() {
  return {
    type: FETCH_CURR_GROUP,
    payload: {
      data: 'MFE'
    }
  }
}

export function addGroup(groupName) {
  return function(dispatch, getState) {
    const group = getState().group;
    const groupList = group.groupList || [];
    const newGroupList = groupList.concat([{ group_name: groupName + groupList.length }]);
    dispatch({
      type: FETCH_GROUP_LIST,
      payload: { data: {
        data: newGroupList,
        errcode: 0
      }}
    });
  }
}