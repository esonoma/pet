import BaseModel from "./BaseModel";

// XXX: 测试的模型
const UserModelScheme = {
	username: {
		type: "string",
		required: true,
		// unique: true, // 服务端会自动检查
		maxLength: 20,
		minLength: 4,

		pattern: /^[a-zA-Z0-9_]+$/,

		// message: 结合 vue-i18n 国际化使用,
		message: "username_invalid",
		placeholder: "username_placeholder",

		// 考虑实现一个自定义的校验器
		// validator: (
		// 	value: string,
		// 	index: number,
		// 	values: Record<string, string>,
		// ): boolean => {
		// 	return value.length >= 4 && value.length <= 20;
		// },

		// 对外抛出事件
	},
	password: {
		type: "password", // 特殊的类型, 密码类型
		required: true,
		maxLength: 20,
		minLength: 6,
		pattern: /^[a-zA-Z0-9_]+$/,
		message: "password_invalid",
		placeholder: "password_placeholder",
	},
	email: {
		type: "email",
		required: true,
		maxLength: 50,
		minLength: 4,
		pattern: /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+$/,
		message: "email_invalid",
		placeholder: "email_placeholder",
	},
};

export class UserModel extends BaseModel {
	properties: Record<string, unknown> = {
		username: "",
		password: "",
		email: "",
	};

	constructor(username: string, password: string, email: string) {
		super(UserModelScheme);

		this.properties.username = username;
		this.properties.password = password;
		this.properties.email = email;
	}
}
