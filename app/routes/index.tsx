import BodyPreview from '../components/BodyPreview';
import {useState, useRef} from 'react';
import HeadersPreview from '~/components/HeadersPreview';
import QueryPreview from '~/components/QueryPreview';

// Response Body
function ResponseBody() {
	return (<div></div>)
}

interface FetchOptions {
	url: string,
	method?: string;
	headers?: object,
	query?: object,
	body?: string,
	server?: string,
}

async function FetchURL() {
	const Options: FetchOptions = {
		url: 'https://cpn.ac/',
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		query: {
			'q': 'query',
			'p': '1',
		},
		body: '{"auth": "party"}',
		server: 'us-*',
	}

	const data = await fetch(`https://aws./usa`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(Options),
	});
	console.log(data)
}

import Select from 'react-select';
const typeOptions = [
	{ value: 'get', label: 'GET' },
	{ value: 'post', label: 'POST' },
	{ value: 'put', label: 'PUT' },
	{ value: 'patch', label: 'PATCH' },
	{ value: 'delete', label: 'DELETE' },
	{ value: 'custom', label: 'Custom' },
]

export default function Index() {
	const [requestPreview, setRequestPreview] = useState('Body');
	const [responseBody, setResponseBody] = useState('Body');
	const [requestType, setRequestType] = useState('get');
	return (
		<div className="w-4/6 mx-auto mt-8 space-y-4">
			<div className="flex space-x-4">
				<Select
					className="w-2/12"
					classNamePrefix="react-select"
					options={typeOptions}
					defaultValue={typeOptions[1]}
					onChange={(data: any)=>setRequestType(data?.value || 'none')}
				/>
				<input
					className="bg-dark-600 rounded p-2 w-full"
					type="text"
					placeholder="URL"
					id="urlInput"
				/>
				<button
					className="bg-dark-500 rounded p-2"
					onClick={()=>{FetchURL()}}
				>
					<img src="/icons/send.png" style={{filter:'invert(100%)'}} alt="Send" />
				</button>
			</div>
			<div className="grid grid-cols-2 gap-x-4">
				<div id="request">
					<div
						id="requestSelectView"
						className="flex justify-around space-x-2"
					>
						{(()=>{
							const previews = ['Body', 'Headers', 'Query'];
							return previews.map((preview)=>{
								return (
									<button
										data-buttonactive={preview === requestPreview}
										className='py-1 w-full text-center cursor-pointer hover:bg-dark-600 duration-300 rounded-lg'
										onClick={()=>setRequestPreview(preview)}
									>{preview}</button>
								)
							});
						})()}
					</div>

					<hr className="my-4 border-dark-500" />

					<div className="">
						{(()=>{
							switch(requestPreview as any) {
								case "Body":
									return <BodyPreview/>
								case "Headers":
									return <HeadersPreview/>
								case "Query":
									return <QueryPreview/>
								default:
									return <BodyPreview/>
							}
						})()}
					</div>
				</div>
				<div id="response">
					<div
						id="preview"
						className="flex space-x-2"
					>
						<p className="px-2 py-1 bg-green-600 rounded text-white shrink-0">
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

					<hr className="my-4 border-dark-500" />

					<div
						id="requestSelectView"
						className="flex justify-around space-x-2 mb-2.5"
					>
						{(()=>{
							const previews = ['Body', 'Headers', 'Timings'];
							return previews.map((preview)=>{
								return (
									<button
										data-buttonactive={preview === responseBody}
										className='py-1 w-full text-center cursor-pointer hover:bg-dark-600 duration-300 rounded-lg'
										onClick={()=>setResponseBody(preview)}
									>{preview}</button>
								)
							});
						})()}
					</div>
					

					<ResponseBody/>
				</div>
			</div>
		</div>
  	);
}
