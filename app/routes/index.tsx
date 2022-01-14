export default function Index() {
	return (
		<div className="w-4/6 mx-auto mt-4 space-y-4">
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
					<img src="/icons/send.png" alt="Send" />
				</button>
			</div>
			<div className="grid grid-cols-2 gap-x-4">
				<div id="request">
					<div
						id="requestSelectView"
						className="flex justify-around"
					>
						<p x-selected="true">Body</p>
						<p>Headers</p>
						<p>Query</p>
					</div>
				</div>
				<div id="response">
					<div
						id="preview"
						className="flex space-x-2"
					>
						<p className="px-2 py-1 bg-green-500 rounded text-white shrink-0">
							200 OK
						</p>
						<div className="grid grid-cols-2 space-x-2 w-full">
							<p id="resTook">
								<b>Took</b>
								<span id="resTookI">391ms</span>
							</p>
							<p id="resSize">
								<b>Size</b>
								<span id="resSizeI">958b</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
  	);
}
