/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	//address: "localhost", 	// Address to listen on, can be:
	 address: "0.0.0.0",

							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	// ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
	ipWhitelist: [], // ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 														// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "1835847", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "028bc37bb76d06d73bbc497021d12d4d" // Professor. Choi api♥
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "1835847", //ID from http://b/home/pi/practice/Mirror-code/modules/MMM-OneBusAway/node_helper.jsulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "028bc37bb76d06d73bbc497021d12d4d" // Professor. Choi api♥
			}
		},
			{ 
				module : 'calendar_monthly' , 
				position : 'top_left' , 
				config : { 
						// 구성 속성은 선택 사항입니다. 
						// 구성이 없으면 기본 월별보기가 표시됩니다. 
						// 자세한 내용은 '구성 옵션'섹션을 참조하세요. 정보 
				} 
			},
		{
			module: "calendar",
			header: "Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://p03-calendars.icloud.com/holidays/kr_ko.ics"					}
				]
			}
		},

{
	module: "MMM-MusicOnDemand",
	position: "top_right",
	config: {
		chromiumPath : "/usr/bin/chromium-browser",  // chromiumPath : null, if you want to use puppeteer browser
		showCover : true,
		showBrowser : false,    // change to true if you want to see whats going on in the browser
		userDataDir : "/home/pi/.config/chromium" //the directory of your user data from the browser, default is for raspberry pi without changes
	 }
 },

    {
        module: 'MMM-Remote-Control',
        // uncomment the following line to show the URL of the remote control on the mirror
          position: 'bottom_left',
        // you can hide this module afterwards from the remote control itself
        config: {
            apiKey: '6f9f6d38085d4d358032e3f6eae43342'
        }
	},
	
	{
		module: 'MMM-HideAll',
		position: 'bottom_right',
		config: {
			symbolhide: "eye",
			symbolshow: "eye"
		}
	},

{
		module: "MMM-EmbedYoutube", // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
		position: "top_center",	// This can be any of the regions.
		config: {
			// See 'Configuration options' in README.md for more information.
			video_id: "w3jLJU7DT5E",
			playlist: "PLfi50MQ-9KzqhLAMzKPde3wpI98F8r2JD",
			loop: true
		}
	},


    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
