import { Eventemitter, mergeObject } from "@/helpers"; // XXX: 对于common模块的资源, helpers存在依赖关系(耦合)

enum VersionActions {
	Upgrade = "upgrade",
	Downgrade = "downgrade",
	Nil = "nil", // nil 代表默认的, 即什么都没有改变
}

type VersionDefine = {
	version: string;
	action: VersionActions;
	versionId?: string;
	meta?: Record<string, unknown>;
};

export interface VersionCheckerResult {
	status?: "ok" | "error";
}

export type BaseUpgradeAndDowngradeHandler = (
	currentVersion: VersionDefine,
	previousVersion: VersionDefine,
) => void;

// xxx： 可以抽像基础类出来
export default class AppVersionManager extends Eventemitter {
	version: VersionDefine = {
		version: "1.0.0",
		action: VersionActions.Upgrade,
	};

	previous: VersionDefine = {
		version: "0.0.0",
		action: VersionActions.Nil,
	};

	checker(
		version: string,
		specialCheckAction?: VersionActions.Upgrade,
	): VersionCheckerResult {
		if (this.version.version === version) {
			if (specialCheckAction === VersionActions.Upgrade) {
				// todo
			}
			return {};
		}
		return {};
	}

	upgrade(version: string) {
		this.checker(version, VersionActions.Upgrade);

		// 升级版本号
		this.emit(VersionActions.Upgrade, this.version, this.previous);
		this.setPreviousVersion(this.version);
	}

	downgrade(version: string) {
		this.checker(version, VersionActions.Downgrade);

		this.emit(VersionActions.Downgrade, this.version, this.previous);
		this.setPreviousVersion(this.previous);
	}

	setPreviousVersion(currentVersionDesc: VersionDefine) {
		this.previous = mergeObject(currentVersionDesc, this.previous);
	}

	setCurrentVersion(currentVersionDesc: VersionDefine) {
		this.version = mergeObject(this.version, currentVersionDesc);
	}
}
