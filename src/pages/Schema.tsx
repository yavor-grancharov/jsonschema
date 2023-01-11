import React from 'react';

import { HttpSchema } from '../../data/HttpSchema';
import { TransformSchema } from '../../data/TransformSchema';

type IconProps = {
	icon: {
		src: string;
		alt?: string;
	};
};

type InputProps = {
	label: string;
	value?: string;
	type?: string;
	required?: boolean;
};

type TextAreaProps = {
	label: string;
	text?: string;
};

type DropdownProps = {
	label: string;
	options: {
		default: string[];
	};
};

const Input: React.FC<InputProps> = ({ ...props }) => {
	return (
		<div
			style={{
				padding: '1%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'baseline',
				width: '420px',
			}}
		>
			<label htmlFor={props.label}>{props.label}</label>
			<input style={{ width: '100%' }} type={props.type} value={props.value} />
		</div>
	);
};

const TextArea: React.FC<TextAreaProps> = ({ ...props }) => {
	return (
		<div
			style={{
				padding: '1%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'baseline',
				width: '420px',
			}}
		>
			<label htmlFor={props.label}>{props.label}</label>
			<textarea style={{ width: '100%' }} rows={8}>
				{props.text}
			</textarea>
		</div>
	);
};

const Dropdown: React.FC<DropdownProps> = ({ ...props }) => {
	return (
		<div
			style={{
				padding: '1%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'baseline',
				width: '420px',
			}}
		>
			<label htmlFor={props.label}>{props.label}</label>
			<select style={{ width: '100%' }}>
				{props.options.default.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

function render(type: any, props: any) {
	switch (type) {
		case 'input':
			return <Input {...props} />;
		case 'textarea':
			return <TextArea {...props} />;
		case 'select':
			return <Dropdown {...props} />;
		default:
			return '';
	}
}

const Schema = () => {
	return (
		<div>
			<form style={{ textAlign: 'center', padding: '5%' }}>
				{HttpSchema.schema.sections.map((section) => (
					<div
						style={{
							border: '1px solid gray',
							borderRadius: '4px',
							padding: '5%',
						}}
					>
						<header style={{ borderBottom: '1px solid' }}>
							<h1>{section.section_title}</h1>
						</header>
						<div style={{ padding: '5%', alignItems: 'center', display: 'table-caption' }}>
							{section.properties.map((formData) => render(formData.html_element, formData))}
						</div>
					</div>
				))}
			</form>
		</div>
	);
};

export default Schema;
