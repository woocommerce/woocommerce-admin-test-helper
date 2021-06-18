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
				This section contains tools for managing extended tasks in the
				task list.
			</p>
			<ExtendedTaskList />
			<AddExtendedTask />
		</>
	);
};
