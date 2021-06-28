/**
 * External dependencies.
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { Button, SelectControl } from '@wordpress/components';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
/**
 * Internal dependencies
 */
import { OPTION_NAME } from './constants';

export const AddExtendedTask = () => {
	const { updateOptions } = useDispatch(OPTIONS_STORE_NAME);
	const { extendedTasks, isAdding, errorMessage } = useSelect((select) => {
		const {
			getOption,
			isResolving,
			isOptionsUpdating,
			getOptionsUpdatingError,
		} = select(OPTIONS_STORE_NAME);
		const tasks = getOption(OPTION_NAME);
		return {
			extendedTasks: tasks && JSON.parse(tasks),
			isRequesting: isResolving('getOption', [OPTION_NAME]),
			isAdding: isOptionsUpdating(),
			errorMessage: getOptionsUpdatingError(),
		};
	});
	const [newNote, setNewNote] = useState({
		key: '',
		title: '',
		completed: false,
		visible: true,
		additionalInfo: 'Some additional info',
		time: '5 minutes',
		isDismissable: false,
		allowRemindMeLater: false,
		type: 'extension',
	});

	async function triggerAddNote() {
		const title = prompt('Enter the note title');
		if (!title) {
			return;
		}
		if (
			extendedTasks &&
			extendedTasks.findIndex((task) => task.title === title) !== -1
		) {
			alert(
				`Task with title - '${title}', already exists, please use a unique one.`
			);
			triggerAddNote();
			return;
		}
		const key = title.toLowerCase().replace(/ /g, '-');

		const newOptions = [
			...(extendedTasks || []),
			{
				...newNote,
				title,
				key: 'woocommerce_admin_test_helper_' + key,
			},
		];

		updateOptions({
			[OPTION_NAME]: JSON.stringify(newOptions),
		});
	}

	const onValueChange = (key, value) => {
		setNewNote({
			...newNote,
			[key]: value,
		});
	};

	return (
		<>
			<p>
				<strong>Add a extended task</strong>
			</p>
			<div>
				<p>This will add a new extended task.</p>
				<br />
				<div className="woocommerce-admin-test-helper__add-task">
					<Button
						onClick={triggerAddNote}
						disabled={isAdding}
						isPrimary
					>
						Add extended task list item
					</Button>
					<SelectControl
						label="Type"
						onChange={(val) => onValueChange('type', val)}
						labelPosition="side"
						options={[
							{ label: 'Setup', value: 'setup' },
							{ label: 'Extension', value: 'extension' },
						]}
						value={newNote.type}
					/>
					<SelectControl
						label="Is Completed"
						onChange={(val) => onValueChange('completed', val)}
						labelPosition="side"
						options={[
							{ label: 'True', value: true },
							{ label: 'False', value: false },
						]}
						value={newNote.completed}
					/>
					<SelectControl
						label="Is dismissable"
						onChange={(val) => onValueChange('isDismissable', val)}
						labelPosition="side"
						options={[
							{ label: 'True', value: true },
							{ label: 'False', value: false },
						]}
						value={newNote.isDismissable}
					/>
					<SelectControl
						label="Allow remind me later"
						onChange={(val) =>
							onValueChange('allowRemindMeLater', val)
						}
						labelPosition="side"
						options={[
							{ label: 'True', value: true },
							{ label: 'False', value: false },
						]}
						value={newNote.allowRemindMeLater}
					/>
				</div>
				<br />
				<span className="woocommerce-admin-test-helper__action-status">
					{isAdding && 'Adding, please wait'}
					{errorMessage && (
						<>
							<strong>Error:</strong> {errorMessage}
						</>
					)}
				</span>
			</div>
		</>
	);
};
