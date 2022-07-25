import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni()],
	// css: {
	// 	preprocessorOptions: {
	// 		less: {
	// 			javascriptEnabled: true,
	// 			modifyVars: {
	// 				// https://github.com/ant-design/ant-design/issues/23624
	// 				// less 变量覆盖
	// 				hack: `true; @import "~@/common/stylesheets/variable.less";`,
	// 			},
	// 		},
	// 	},
	// },

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
