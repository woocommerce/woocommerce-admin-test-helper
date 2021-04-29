import { addFilter } from '@wordpress/hooks';

const TaskComp = () => {
    return <div>WooCommerce Test Helper task</div>
}

function generateTasks(taskNumber) {
    const tasks = [];
    for (let i = 0; i < taskNumber; i++) {
        tasks.push({
				key: 'woocommerce_admin_test_helper_'+i,
				title: 'WooCommerce Test Helper task ' + (i + 1),
				container: <TaskComp />,
				completed: Math.floor(Math.random() * 3) === 1,
				visible: true,
				additionalInfo: 'Some additional info',
				time: '5 minutes',
				isDismissable: Math.floor(Math.random() * 3) === 1,
			});
    }
    return tasks;
}

if (window.wcAdminTestHelperConfig && window.wcAdminTestHelperConfig.taskNumber) {
    const taskNumber = parseInt(window.wcAdminTestHelperConfig.taskNumber);
    if (taskNumber > 0) {
        addFilter(
            'woocommerce_admin_onboarding_task_list',
            'woocommerce_admin_test_helper',
            (tasks) => {
                return [
                    ...tasks,
                    ...generateTasks(taskNumber)
                ]
            });
    }
}