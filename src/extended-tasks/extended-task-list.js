/**
 * External dependencies.
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import { SelectControl } from '@wordpress/components';
/**
 * Internal dependencies
 */
import { OPTION_NAME } from './constants';

export const ExtendedTaskList = () => {
	const { updateOptions } = useDispatch(OPTIONS_STORE_NAME);
	const { extendedTasks, isRequesting } = useSelect((select) => {
		const { getOption, isResolving } = select(OPTIONS_STORE_NAME);
		const tasks = getOption(OPTION_NAME);
		return {
			extendedTasks: tasks && JSON.parse(tasks),
			isRequesting: isResolving('getOption', [OPTION_NAME]),
		};
	});
	const [editingTask, setEditingTask] = useState();

	const deleteOptionByName = (taskKey) => {
		// eslint-disable-next-line no-alert
		if (confirm('Are you sure you want to delete this option?')) {
			const newTasks = extendedTasks.filter(
				(task) => task.key !== taskKey
			);
			updateOptions({
				[OPTION_NAME]: JSON.stringify(newTasks),
			});
		}
	};

	const renderLoading = () => {
		return (
			<tr>
				<td colSpan="6" align="center">
					Loading...
				</td>
			</tr>
		);
	};

	const updateTask = async () => {
		if (!editingTask) {
			return;
		}
		const updatedTaskIndex = extendedTasks.findIndex(
			(task) => task.key === editingTask.key
		);
		extendedTasks.splice(updatedTaskIndex, 1, editingTask);
		await updateOptions({
			[OPTION_NAME]: JSON.stringify(extendedTasks),
		});
		setEditingTask(null);
	};

	const renderTableData = () => {
		if (!extendedTasks || extendedTasks.length === 0) {
			return (
				<tr>
					<td colSpan="6" align="center">
						No Extended Tasks Found
					</td>
				</tr>
			);
		}

		return extendedTasks.map((task) => {
			// eslint-disable-next-line camelcase
			const {
				key,
				title,
				completed = false,
				isDismissable = false,
				type,
				allowRemindMeLater = false,
			} = task;

			return (
				<tr key={key}>
					<td>{key}</td>
					<td>{title}</td>
					<td>{type}</td>
					<td key={'optionValue'}>
						{editingTask && editingTask.key === key ? (
							<SelectControl
								onChange={(val) => {
									setEditingTask({
										...editingTask,
										completed: JSON.parse(val),
									});
								}}
								options={[
									{ label: 'True', value: true },
									{ label: 'False', value: false },
								]}
								value={editingTask.completed}
							/>
						) : (
							completed.toString()
						)}
					</td>
					<td className="align-center">{isDismissable.toString()}</td>
					<td className="align-center">
						{allowRemindMeLater.toString()}
					</td>
					<td className="align-center" key={3}>
						<button
							className="button btn-danger"
							onClick={() => deleteOptionByName(key)}
							disabled={!!editingTask}
						>
							Delete
						</button>
					</td>
					<td className="align-center">
						{editingTask && editingTask.key === key ? (
							<>
								<button
									className="button btn-primary"
									onClick={() => setEditingTask(null)}
								>
									Cancel
								</button>
								<button
									className="button btn-primary"
									onClick={() => updateTask()}
								>
									Save
								</button>
							</>
						) : (
							<button
								className="button btn-primary"
								onClick={() => setEditingTask(task)}
							>
								Edit
							</button>
						)}
					</td>
				</tr>
			);
		});
	};

	return (
		<>
			<table className="wp-list-table striped table-view-list widefat">
				<thead>
					<tr>
						<td className="manage-column column-thumb">Key</td>
						<td className="manage-column column-thumb">Title</td>
						<td className="manage-column column-thumb">Type</td>
						<td className="manage-column column-thumb">
							Is completed?
						</td>
						<td className="manage-column column-thumb align-center">
							Is Dismissable
						</td>
						<td className="manage-column column-thumb align-center">
							Alow remind me later
						</td>
						<td className="manage-column column-thumb align-center">
							Delete
						</td>
						<td className="manage-column column-thumb align-center">
							Edit
						</td>
					</tr>
				</thead>
				<tbody>
					{isRequesting ? renderLoading() : renderTableData()}
				</tbody>
			</table>
		</>
	);
};
