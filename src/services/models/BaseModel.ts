export interface ValidatorResult {
	valid: boolean;
	errors: Record<string, string>[];
}

export default abstract class BaseModel {
	properties: Record<string, unknown> = {};

	get data() {
		return this.properties;
	}

	public validateTypes: Record<
		string,
		(
			value: unknown,
			key: string,
			values: Record<string, unknown>,
		) => boolean
	> = {};

	public scheme: Record<string, Record<string, unknown>>;

	constructor(scheme: Record<string, Record<string, unknown>>) {
		this.scheme = scheme;
	}

	public registerValidator(
		type: string,
		validator: (value: unknown) => boolean,
	) {
		this.validateTypes[type] = validator;

		// unregister
		return () => {
			delete this.validateTypes[type];
		};
	}

	public validateImpl(
		itemScheme: Record<string, unknown>,
		data: Record<string, unknown>,
	) {
		// TODO: 校验类型
	}

	public validate(
		scheme?: Record<string, Record<string, unknown>>,
	): ValidatorResult {
		return {
			valid: true,
			errors: [],
		};
	}

	// TODO: 一步校验
	validateAsync(data: Record<string, unknown>): Promise<ValidatorResult> {
		return Promise.resolve(this.validate(data));
	}

	public getScheme(): Record<string, unknown> {
		return this.scheme;
	}

	public getSchemeKeys(): string[] {
		return Object.keys(this.scheme);
	}
}
