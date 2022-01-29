import { useState } from "react";
export default function Index() {
	const [ headers, setHeaders ] = useState([['Content-Type', 'application/json'], ['','']]);
	function deleteHeader(index: number) {
		let tmpHeaders = headers.filter((_, i) => i !== index);
		if (tmpHeaders.length == 0) setHeaders([['','']]);
		else setHeaders(tmpHeaders);
	}
	function setValue(type: number, value: string, index: number) {
		headers[index][type] = value;
		setHeaders(headers);
		
		if (headers[headers.length-1][1] != '') setHeaders([...headers, ['', '']]);
		if (headers.length > 0 && value == '' && headers[headers.length-1][1] == '') setHeaders([...headers.slice(0, headers.length-1)]);
	}
	return (
		<div>
			{headers.map((header, index) => {
				return (
					<div className="flex items-center space-x-2 my-2">
						<input onChange={(el)=>setValue(0, el.target.value, index)} defaultValue={header[0]} className="rounded w-full p-2 bg-dark-600" placeholder="Name" />
						<input onChange={(el)=>setValue(1, el.target.value, index)} defaultValue={header[1]} className="rounded w-full p-2 bg-dark-600" placeholder="Value" />
						<img onClick={()=>deleteHeader(index)} src="icons/x.png" width={32} height={32} />
					</div>
				)
			})}
		</div>
	);
}
