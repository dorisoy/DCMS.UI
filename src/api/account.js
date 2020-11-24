import menus from '../menus'
const login = params => {
  return new Promise((resolve, reject) => {
    if (params.userName === 'admin' && params.password === 'admin') {
      resolve({
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        refreshToken: ''
      })
    } else {
      reject(new Error('密码错误'))
    }
  })
}
/**
 * @description 获取账户信息
 */
const get = () => {
  return {
    /** 账户编号 */
    id: 1,
    /** 用户名 */
    name: '管理员',
    /** 头像 */
    avatar: '',
    /** 菜单列表 */
    menus: menus,
    /** 权限列表 */
    permissions: [],
    /** 皮肤设置 */
    skin: {
      /** 名称 */
      name: 'pretty',
      /** 主题 */
      theme: '',
      /** 字号 medium/small/mini */
      fontSize: 'small'
    }
  }
}

const skinUpdate = () => {
  return new Promise(resolve => {
    resolve()
  })
}

export default { login, get, skinUpdate }
