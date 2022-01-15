import { useState, useRef } from 'react';
import Select from 'react-select';

const options = [
	{ value: 'none', label: 'None' },
	{ value: 'json', label: 'JSON' },
	{ value: 'formdata', label: 'Form Data' },
	{ value: 'raw', label: 'Plain text' },
]

export default function Index() {
	const [bodyType, setBodyType] = useState('json');
	return (
		<div>
			<Select
				classNamePrefix="react-select"
				options={options}
				defaultValue={options[1]}
				onChange={(data: any)=>setBodyType(data?.value || 'none')}
			/>

			<div className='mt-2'>
				{(()=>{
					switch(bodyType) {
						case "json":
							return <JSONType/>
						case "formdata":
							return <FormDataType/>
						case "raw":
							return <RawType/>
					}
				})()}
			</div>
		</div>
	);
}

import Editor from "@monaco-editor/react";
import { ClipLoader } from 'react-spinners';
function JSONType() {
	const editorRef = useRef<any>(); // editorRef.current.getValue()
	return (
		<Editor
			theme='vs-dark'
			height="40vh"
			defaultLanguage="json"
			defaultValue="{}"
			loading={<ClipLoader />}
			onMount={(editor)=>{
				editorRef.current = editor; 
			}}
		/>
	)
}

function FormDataType () {
	return (
		<pre>FormData</pre>
	)
}

function RawType() {
	return (
		<pre>Raw</pre>
	)
}
