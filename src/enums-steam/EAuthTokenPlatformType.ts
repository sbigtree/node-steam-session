/* eslint-disable */
// Auto-generated by generate-enums script on Thu Nov 02 2023 00:05:05 GMT-0400 (Eastern Daylight Time)

/**
 * Contains the different platform types that can be authenticated for. You should specify the correct platform type when you instantiate a {@link steam-session.LoginSession} object.
 * 
 * Audiences present in tokens issued for different platform types:
 *  - {@link steam-session.EAuthTokenPlatformType.SteamClient}: `['web', 'client']`
 *  - {@link steam-session.EAuthTokenPlatformType.WebBrowser}: `['web']`
 *  - {@link steam-session.EAuthTokenPlatformType.MobileApp}: `['web', 'mobile']`
 */
enum EAuthTokenPlatformType {
	Unknown = 0,
	SteamClient = 1,
	WebBrowser = 2,
	MobileApp = 3
}

export default EAuthTokenPlatformType;
