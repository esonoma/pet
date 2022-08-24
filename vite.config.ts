import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni()],
	server: {
		https: {
			key: fs.readFileSync(
				`${__dirname}/scripts/certificates/petapp-key.pem`,
			),
			cert: fs.readFileSync(
				`${__dirname}/scripts/certificates/petapp.pem`,
			),
		},
	},

	resolve: {
		alias: {
			"@/*": "/src/*",
			"@platform": "/src/platform",
			"@helpers": "/src/helpers",
			"@components": "/src/components",
			"@wxComponents": "/src/wxComponents",
			"@store": "/src/store",
			"@services": "/src/services",

			"@locales": "/src/locales",

			// deep-import
			"@http": "/src/services/http",
			"@domains": "/src/services/domains",
			"@message": "/src/services/message",

			// deep-import commons
			"@common": "/src/commons",
			// "@stylesheets": "/src/commons/stylesheets",
		},
	},
});
