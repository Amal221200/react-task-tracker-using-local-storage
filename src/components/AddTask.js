import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setRiminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text){
            alert('Plese enter a task');
            return;
        }

        onAdd({ text, day, reminder });
        setText('');
        setDay('');
        setRiminder(false);
    }

    return ( 
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input type="text" id="task" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="day">Day & Time</label>
                <input type="text" id="day" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Reminder</label>
                <input type="checkbox" id="reminder" value={reminder} onChange={(e) => setRiminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save" className="btn btn-block" />
        </form>
    );
};

export default AddTask;
