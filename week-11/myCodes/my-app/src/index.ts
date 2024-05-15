export interface Env {
	
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);

		var uri = request.url.replace(/^https:\/\/.*?\//gi, '/');
		console.log(uri);

		if (request.method === 'GET') {
			if (uri === '/users') {
				// handle the user request
			}
			return Response.json({
				message: 'you sent a get request',
			});
		} else {
			return Response.json({
				message: 'you did not send a get request',
			});
		}
	},
};
