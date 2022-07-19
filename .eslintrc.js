module.exports = {
  env: {
    browser: true,

    es2021: true,

    node: true,
  },

  extends: ["plugin:vue/vue3-essential", "airbnb-base", "prettier", "plugin:prettier/recommended"],

  parserOptions: {
    ecmaVersion: "latest",

    parser: "@typescript-eslint/parser",

    sourceType: "module",
  },

  plugins: ["vue", "@typescript-eslint"],

  globals: {
    // uni-app开发环境

    uni: true,

    plus: true,

    wx: true,
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    },
  },

  rules: {
    "linebreak-style": [0, "error", "windows"],

    "import/prefer-default-export": "off",

    "import/extensions": "off",

    // 在不同目录下会存在同名的组件，这里允许重名

    "vue/multi-word-component-names": "off",

    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],

    "prettier/prettier": "off",
    "no-use-before-define": "off",
  },
};
