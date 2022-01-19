import BodyPreview from '../components/BodyPreview';
import {useState, useRef} from 'react';
import HeadersPreview from '~/components/HeadersPreview';
import QueryPreview from '~/components/QueryPreview';

// Response Body
import Editor from "@monaco-editor/react";
import { ClipLoader } from 'react-spinners';

interface FetchOptions {
	url: string,
	method?: string;
	headers?: object,
	query?: object,
	body?: string,
	server?: string,
}

import Select from 'react-select';
const methodOptions = [
	{ value: 'get', label: 'GET' },
	{ value: 'post', label: 'POST' },
	{ value: 'put', label: 'PUT' },
	{ value: 'patch', label: 'PATCH' },
	{ value: 'delete', label: 'DELETE' },
	{ value: 'custom', label: 'Custom' },
]

const proxies = [
	{ value: 'us-west-1', label: '🇺🇸 US West 1' },
	{ value: 'eu-west-2', label: '🇬🇧 EU West 2' },
	{ value: 'sa-east-1', label: '🇧🇷 SA East 1' },
]

export default function Index() {
	const [requestPreview, setRequestPreview] = useState('Body');
	const [responsePreview, setResponsePreview] = useState('Body');
	const [method, setMethod] = useState('get');
	const [proxy, setProxy] = useState('us-west-1');
	const [url, setUrl] = useState('https://api64.ipify.org/?format=json');
	const [responseDefaultLanguage, setResponseDefaultLanguage] = useState('json');

	const [responseBody, setResponseBody] = useState('// body will apear here once the request is made');
	const [resTook, setResTook] = useState(-1);

	async function FetchURL() {
		const Options: FetchOptions = {
			url: url,
			method: method || 'GET',
		}
	
		const response = await fetch(`https://aws.requests.auth.party/${proxy}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(Options),
		});
		console.log(response)
	
		const data = await response.json();
		setResponseDefaultLanguage
		setResponseBody(data.data.body);
		setResTook(data.data.took);
	}

	return (
		<div className="w-4/6 mx-auto mt-8 space-y-4">
			<div className="flex space-x-4">
				<Select
					className="w-2/12"
					classNamePrefix="react-select"
					options={methodOptions}
					defaultValue={methodOptions[0]}
					onChange={(data: any)=>setMethod(data?.value || 'none')}
				/>
				<input
					className="bg-dark-600 rounded p-2 w-full"
					type="text"
					onChange={(event)=>setUrl(event.target.value)}
					placeholder="URL"
					id="urlInput"
				/>
				<button
					className="bg-dark-500 rounded p-2"
					onClick={()=>{FetchURL()}}
				>
					<img src="/icons/send.png" style={{filter:'invert(100%)'}} alt="Send" />
				</button>
				<Select
					className="w-4/12"
					classNamePrefix="react-select"
					options={proxies}
					defaultValue={proxies[0]}
					onChange={(data: any)=>setProxy(data?.value || 'none')}
				/>
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
								<span id="resTookI">{resTook == -1 ? '-' : `${resTook}ms`}</span>
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
										data-buttonactive={preview === responsePreview}
										className='py-1 w-full text-center cursor-pointer hover:bg-dark-600 duration-300 rounded-lg'
										onClick={()=>setResponsePreview(preview)}
									>{preview}</button>
								)
							});
						})()}
					</div>
					
					<Editor
						theme='vs-dark'
						height="40vh"
						options={{
							readOnly: true,
						}}
						defaultLanguage={responseDefaultLanguage}
						value={responseBody}
						defaultValue={responseBody}
						loading={<ClipLoader />}
					/>
				</div>
			</div>
		</div>
  	);
}
