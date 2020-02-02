/**
 * method for auth in app
 */

export const auth = () => {
  return new Promise((resolve, reject) => {
    window.VK.Auth.login(({ session, status }) => {
      if (session) {
        resolve(status);
      } else {
        reject(new Error('Не удалось авторизоваться'));
      }
    });
  });
};

/**
 * method for logout in app
 */

export const logout = () => {
  return new Promise((resolve, reject) => {
    window.VK.Auth.logout(({ status }) => {
      resolve(status);
    });
  });
};

/**method for work with vk api
 *
 * @param {String} param.method method name
 * @param {Object} param.params options
 * @returns {Object} server response
 */

export const callAPI = (method, params) => {
  params.v = '5.103';

  return new Promise((resolve, reject) => {
    window.VK.api(method, params, data => {
      if (data.error) {
        reject(data.error);
      } else {
        resolve(data.response);
      }
    });
  });
};
