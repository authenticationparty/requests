export default function Index() {
	return (
		<div className="w-3/6 mx-auto mt-4 space-y-4">
			<div className="flex space-x-4">
				<select className="bg-dark-200 rounded p-2">
					<option>GET</option>
					<option>POST</option>
					<option>PUT</option>
					<option>PATCH</option>
					<option>DELETE</option>
					<option>Custom</option>
				</select>
				<input className="bg-dark-200 rounded p-2 w-full" type="text" placeholder="URL" />
				<button className="bg-dark-200 rounded p-2">
					<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" />
				</button>
			</div>
			<div className="grid grid-cols-2 gap-x-4">
				<div id="request">
					Request
				</div>
				<div id="response">
					Response
				</div>
			</div>
		</div>
  	);
}
