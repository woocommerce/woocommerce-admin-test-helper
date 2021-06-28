/**
 * Internal dependencies
 */
import './tasks.scss';
import { AddExtendedTask } from './add-extended-task';
import { ExtendedTaskList } from './extended-task-list';

export const ExtendedTasks = () => {
	return (
		<>
			<h2>Extended Tasks</h2>
			<p>
				This section contains tools for managing extended tasks
				displayed in the task list.
				<br /> These tasks are WooCommerce Admin Test helper tasks{' '}
				<b>only</b>, as we can't edit the default tasks.
			</p>
			<ExtendedTaskList />
			<AddExtendedTask />
		</>
	);
};
