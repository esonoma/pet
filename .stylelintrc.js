module.exports = {
	root: true,
	
	extends: [
		"stylelint-config-standard",
		"stylelint-config-prettier",
		"stylelint-config-recommended-vue",
		"stylelint-config-standard-scss",
		"stylelint-config-recommended"
	],
	rules: {
		"indentation": "tab",
		"unit-no-unknown": [true, { ignoreUnits: ["rpx", "upx"] }],
		"media-feature-name-no-vendor-prefix": null,
		"media-feature-name-no-unknown": null,
		// "declaration-property-unit-whitelist": {
		// 	"unprefixed-property-name": ["em", "rem", "%", "s", "px", "upx", "rpx"]
		// },
		// "unit-whitelist": ["em", "rem", "%", "s", "px", "upx", "rpx"],  
	}
};
