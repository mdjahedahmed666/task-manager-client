import { FaEllipsisH } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { CiCirclePlus } from "react-icons/ci";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyWork = () => {
    const [tasks, setTasks] = useState([]);
    const { user} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title");
    const description = form.get("descriptions");
    const deadline = form.get("deadline");
    const priority = form.get("priority");
    const newTask = { title, description, deadline, priority };

    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Task is added successfully",
          confirmButtonText: "Cool",
        });
      });
    const formElement = e.currentTarget;
    formElement.reset();

    const modal = document.getElementById("my_modal_3");
    modal.close();
  };

  useEffect(() => {
    if (user && user?.email) {
      fetch('http://localhost:5000/tasks')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        //   const matchedTask = data.find(
        //     (taskData) => taskData.email === user.email
        //   );
        setTasks(data)
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [user]);
  return (
    <div className="bg-white p-8 my-10">
      <h2 className="text-2xl font-bold mb-12 text-center">All Work</h2>
      <button
        className="btn flex items-center gap-4 mb-10"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <span>
          <CiCirclePlus />
        </span>
        <h3>Create New Task</h3>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="text-base">Title</span>
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="title"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-base">Descriptions</span>
              </label>
              <input
                type="text"
                name="descriptions"
                required
                placeholder="descriptions"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-base">Deadline</span>
              </label>
              <input
                type="date"
                name="deadline"
                required
                placeholder="deadline"
                className="input input-bordered"
              />
            </div>
            <select
              className="select select-primary w-full form-control"
              name="priority"
            >
              <option disabled selected>
                Priority
              </option>
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </dialog>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-200 p-4 rounded-md">
          <div className="text-gray-700 flex justify-between mb-10">
            <p>TO DO</p>
            <FaEllipsisH />
          </div>
          <div className="shadow-md">
            {tasks.map((task) =>(
          <div key={task.title} className="bg-base-200 p-4 rounded-md mb-5">
            <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
            <p className="text-gray-700">
              {task.description}
            </p>
            <div className="flex items-center justify-between">
                <p>{task.priority}</p>
                <p>{task.deadline}</p>
            </div>
          </div>
          ))}
          </div>
        </div>

        <div className="bg-gray-200 p-4 rounded-md">
          <div className="text-gray-700 flex justify-between">
            <p>IN PROGRESS</p>
            <FaEllipsisH />
          </div>
        </div>

        <div className="bg-gray-200 p-4 rounded-md">
          <div className="text-gray-700 flex justify-between">
            <div className="flex items-center gap-5">
              <p>DONE</p>{" "}
              <span>
                {" "}
                <TiTick />
              </span>
            </div>
            <FaEllipsisH />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
