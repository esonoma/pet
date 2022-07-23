export function getActivePage(): Page.PageInstance<AnyObject, object> {
	const pages = getCurrentPages();
	return pages[pages.length - 1];
}

export function isProd() {
	return import.meta.env.PROD;
}

export function isDev() {
	return !isProd();
}
