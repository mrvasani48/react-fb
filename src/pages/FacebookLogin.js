import { jsx as _jsx } from "react/jsx-runtime";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect } from 'react';
import { initFacebookSdk } from '../sdk/facebook';
const FacebookLogin = ({ appId = '985432012649664', autoLoad, callback, icon = 'fa-facebook', }) => {
    useEffect(() => {
        initFacebookSdk(appId);
    }, []);
    const loginWithFacebook = () => {
        if (window?.FB) {
            window.FB.login((response) => {
                console.log(response);
                if (response.authResponse) {
                    console.log('User logged in successfully');
                    console.log(response.authResponse.accessToken);
                    // You can now use the access token to make API calls
                }
                else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            }, { scope: 'email' });
        }
        else {
            console.error('sdk not loaded');
        }
    };
    console.log(appId, autoLoad, callback, icon, window.FB);
    return _jsx("button", { onClick: loginWithFacebook, children: "Login with Facebook" });
};
export default FacebookLogin;
