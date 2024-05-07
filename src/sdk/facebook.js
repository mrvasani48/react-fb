// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export function initFacebookSdk(appId) {
  return new Promise((resolve, reject) => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: appId,
        cookie: true,
        status: true,
        xfbml: true,
        autoLogAppEvents: true,
        version: 'v19.0',
      })
      resolve()
    }

    // Load the SDK asynchronously
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  })
}
