module.exports = {
	root: true,
	extends: [
		"stylelint-config-standard",
		"stylelint-config-prettier",
		"stylelint-config-recommended-vue",
		"stylelint-config-standard-scss",
	],
	rules: {
		"media-feature-name-no-vendor-prefix": null,
		"media-feature-name-no-unknown": null,
	}
};
