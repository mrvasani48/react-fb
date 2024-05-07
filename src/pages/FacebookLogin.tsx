import { FC, useEffect } from 'react'
import { initFacebookSdk } from '../sdk/facebook'

export interface FacebookLoginT {
  appId?: string
  autoLoad?: string
  callback?: () => void
  icon?: string
}
const FacebookLogin: FC<FacebookLoginT> = ({
  appId = '985432012649664',
  autoLoad,
  callback,
  icon = 'fa-facebook',
}) => {
  useEffect(() => {
    initFacebookSdk(appId)
  }, [])
  const loginWithFacebook = () => {
    if (window?.FB) {
      window.FB.login(
        (response) => {
           console.log(response)
          if (response.authResponse) {
            console.log('User logged in successfully')
            console.log(response.authResponse.accessToken)
            // You can now use the access token to make API calls
          } else {
            console.log('User cancelled login or did not fully authorize.')
          }
        },
        { scope: 'email' },
      )
    }else{
      console.error('sdk not loaded')
    }
  }
  console.log(appId, autoLoad, callback, icon, window.FB)
  return <button onClick={loginWithFacebook}>Login with Facebook</button>
}

export default FacebookLogin