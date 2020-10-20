/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'
import qs from 'qs'
import store from '../store/index'
import cookies from './cookies'
const baseURL="http://192.168.0.109/bpm/Modules/Calendar/handler"
// "../../Modules/EMail/handler"

const timeOut=1000*60*5;
const account=cookies.getCookie("loginAccount") || "DS";
// 环境的切换
axios.defaults.baseURL = baseURL

// 请求超时时间
axios.defaults.timeout =timeOut


// 请求拦截器
axios.interceptors.request.use(
  config => {
  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
  // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = store.state.token
    token && (config.headers.Authorization = token)
    // config.url+='account='+account
    config.url+='&tenantId=test'
    return config
  },
  error => {
    return Promise.error(error)
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          //  router.replace({
          //   path: '/login',
          //   query: { redirect: router.currentRoute.fullPath }
          //  });
          break
          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
        case 403:
          // 清除token
          //  localStorage.removeItem('token');
          //  store.commit('loginSuccess', null);
          //  // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          //  setTimeout(() => {
          //   router.replace({
          //    path: '/login',
          //    query: {
          //     redirect: router.currentRoute.fullPath
          //    }
          //   });
          //  }, 1000);
          break
          // 404请求不存在
        case 404:
          break
          // 其他错误，直接抛出错误提示
        default:
    //  Toast({
    //   message: error.response.data.msg,
    //   duration: 1500,
    //   forbidClick: true
    //  });
      }
      return Promise.reject(error.response)
    }
  }
)
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post (url, params) {
  const instance=axios.create({
    baseURL:baseURL,
    timeout:timeOut,
    headers:{
      'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
    }
  });
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url:url,
      data:qs.stringify(params),
      headers:{
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
      }
    }).then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export  function  upload (url,params) {
  const instance=axios.create({
    baseURL:baseURL,
    timeout:timeOut,
    headers:{
      'Content-Type':'multipart/form-data'
    }
  });
  return new Promise((resolve, reject) => {

    instance.post(url,params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
