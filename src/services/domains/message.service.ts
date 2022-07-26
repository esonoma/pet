export function getMessages(
	{ form, to, page, pageSize } = { form: "", to: "", page: 1, pageSize: 10 },
) {
	return Promise.resolve({
		total: 10,
		page,
		pageSize,
		list: [
			{
				id: 1,
				form,
				to,
				payload: "Hello",
				time: "2018-01-01",
				isRead: false,
			},
			{
				id: 2,
				form,
				to,
				payload: "Hello",
				time: "2018-01-01",
				isRead: true,
			},
		],
	});
}
