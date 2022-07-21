export function getActivePage(): Page.PageInstance<AnyObject, object> {
	const pages = getCurrentPages();
	return pages[pages.length - 1];
}
