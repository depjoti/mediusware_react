import React, { useState } from 'react';

const Problem1 = () => {
    const [show, setShow] = useState('all');
    const [tasks, setTasks] = useState([]);

    const handleFilter = (filter) => {
        setShow(filter);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const status = e.target.elements.status.value;
        const newTask = { name, status };
        setTasks([...tasks, newTask]);
        e.target.reset();
    };

    const filteredTasks = () => {
        if (show === 'active') {
            return tasks.filter((task) => task.status.toLowerCase() === 'active');
        } else if (show === 'completed') {
            return tasks.filter((task) => task.status.toLowerCase() === 'completed');
        } else {
            const activeTasks = tasks.filter((task) => task.status.toLowerCase() === 'active');
            const completedTasks = tasks.filter((task) => task.status.toLowerCase() === 'completed');
            const otherTasks = tasks.filter(
                (task) => task.status.toLowerCase() !== 'active' && task.status.toLowerCase() !== 'completed'
            );
            return [...activeTasks, ...completedTasks, ...otherTasks];
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6 ">
                    <form
                        className="row gy-2 gx-3 align-items-center mb-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name="status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'all' && 'active'}`}
                                type="button"
                                onClick={() => handleFilter('all')}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'active' && 'active'}`}
                                type="button"
                                onClick={() => handleFilter('active')}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'completed' && 'active'}`}
                                type="button"
                                onClick={() => handleFilter('completed')}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks().map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;