/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import { OPTION_NAME } from './constants';

function TaskComp({ task, extendedTasks }) {
	const { updateOptions } = useDispatch(OPTIONS_STORE_NAME);
	const [completed, setCompleted] = useState(task.completed);
	const completeTask = () => {
		if (!completed && extendedTasks) {
			const taskIndex = extendedTasks.findIndex(
				(t) => t.key === task.key
			);
			if (taskIndex !== -1) {
				setCompleted(true);
				extendedTasks[taskIndex].completed = true;
				updateOptions({
					[OPTION_NAME]: JSON.stringify(extendedTasks),
				});
			}
		}
	};
	return (
		<div>
			<h3>This is a sample screen of a task container</h3>
			<h4>Task name: {task.title}</h4>
			{completed ? (
				<div>Task is completed</div>
			) : (
				<Button isPrimary onClick={() => completeTask()}>
					Complete task
				</Button>
			)}
		</div>
	);
}

if (
	window.wcAdminTestHelperConfig &&
	window.wcAdminTestHelperConfig.extendedTasks
) {
	addFilter(
		'woocommerce_admin_onboarding_task_list',
		'woocommerce_admin_test_helper',
		(tasks) => {
			const includedTasks = (
				window.wcAdminTestHelperConfig.extendedTasks || []
			).map((task) => ({
				...task,
				container: (
					<TaskComp
						task={task}
						extendedTasks={
							window.wcAdminTestHelperConfig.extendedTasks
						}
					/>
				),
			}));
			return [...tasks, ...includedTasks];
		}
	);
}
