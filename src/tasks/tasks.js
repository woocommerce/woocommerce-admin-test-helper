/**
 * Internal dependencies.
 */
import { useDispatch, useSelect } from "@wordpress/data";
import { __experimentalNumberControl as NumberControl, Button } from "@wordpress/components";
import { useState, useEffect } from '@wordpress/element';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';

const OPTION_NAME = 'woocommerce_admin_test_helper_task_number';
export const Tasks = () => {
    const { updateOptions } = useDispatch(OPTIONS_STORE_NAME);
    const { taskNumber, isRequesting } = useSelect(select => {
        const { getOption, isResolving } = select(OPTIONS_STORE_NAME);
        return {
            taskNumber: getOption(OPTION_NAME),
            isRequesting: isResolving('getOption', [
                OPTION_NAME
            ])
        };
    });

    const [taskNumberInput, setTaskNumberInput] = useState();
    const [editTaskNumber, setEditTaskNumber] = useState(false);

    useEffect(() => {
        if (!isRequesting) {
            setTaskNumberInput(parseInt(taskNumber, 10) || 0);
        }
    }, [taskNumber, isRequesting]);

    const updateTaskNumber = () => {
        updateOptions({
            [OPTION_NAME]: taskNumberInput
        });
        setEditTaskNumber(false)
    }

    return (
        <>
            <h2>Tasks</h2>
            <p>This section contains tools for managing tasks in the task list.</p>
            <div>
                <label>Task number: </label>
                {editTaskNumber ? <><NumberControl
                    value={taskNumberInput}
                    onChange={setTaskNumberInput}
                    max={10}
                />
                    <Button disabled={taskNumber === taskNumberInput} onClick={updateTaskNumber}>Update</Button>
                </>
                : <>
                  <span>{isRequesting ? '': taskNumber}</span><Button onClick={() => setEditTaskNumber(true)}>Edit</Button>
                  </>
                  }
            </div>
        </>
    );
};
