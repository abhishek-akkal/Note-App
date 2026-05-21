import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (elem) => {
    elem.preventDefault();

    if (!title.trim() || !details.trim()) return;

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    console.log(task);

    setTitle("");

    setDetails("");
  };

  const deleteNote = (index) => {
    const copyTask = [...task];

    copyTask.splice(index, 1);

    setTask(copyTask);
  };

  return (
    <div
      className="min-h-screen 
                bg-[#EDF2F7] 
                lg:flex 
                text-[#2D3748] "
    >
      <form
        className="flex 
                   gap-5 
                   lg:w-1/2 
                   flex-col 
                   items-start 
                   p-10"
        onSubmit={(elem) => {
          submitHandler(elem);
        }}
      >
        <h1
          className="text-4xl 
                     font-bold"
        >
          Add Notes
        </h1>

        {/* Input for Heading  */}
        <input
          type="text"
          placeholder="Notes Header"
          className="px-5 
                     py-2 
                     w-full 
                     border-gray-800 
                     border-2 
                     font-medium 
                     rounded-xl 
                     outline-none 
                     focus:border-indigo-950"
          value={title}
          onChange={(elem) => {
            setTitle(elem.target.value);
          }}
        />

        {/* Detail input  */}
        <textarea
          type="text"
          placeholder="Write Notes"
          className="px-5  
                     py-2 
                     w-full 
                     h-35 
                     font-medium 
                     flex 
                     items-start 
                     flex-row 
                     border-2 
                     outline-none 
                     rounded"
          value={details}
          onChange={(elem) => {
            setDetails(elem.target.value);
          }}
        />

        <button
          className="bg-[#1F2A44] 
                           hover:bg-[#293758] 
                           w-full 
                           font-medium 
                           text-white 
                           px-5 
                           py-3 
                           outline-none 
                           rounded 
                           cursor-pointer 
                           active:scale-95"
        >
          Add Note
        </button>
      </form>

      <div
        className="p-10 
                      lg:border-l 
                      border-[#D6DEE5] 
                      lg:w-1/2"
      >
        <h1
          className="text-4xl 
                       font-bold"
        >
          Recent Notes
        </h1>

        <div
          className="flex
                     flex-wrap
                     items-start
                     justify-start
                     gap-5
                     mt-5
                     h-[75vh]
                     overflow-y-auto
                     scrollbar-none"
        >
          {task.map(function (elem, index) {
            return (
              <div
                key={index}
                className="flex 
                          justify-between 
                          flex-col 
                          h-70 
                          w-53 
                          rounded-3xl 
                          text-[#1F2A44]
                          py-4
                          px-5 
                          bg-[#89B8C2]
                          hover:shadow-xl
                          transition "
              >
                <div>
                  <h3
                    className="leading-tight 
                                text-lg 
                                font-bold"
                  >
                    {elem.title}
                  </h3>

                  <p
                    className="mt-4 
                                leading-tight 
                                text-xs 
                                font-bold 
                                text-gray-600"
                  >
                    {elem.details}
                  </p>
                </div>

                <button
                  onClick={() => {
                    deleteNote(index);
                  }}
                  className="w-full 
                             cursor-pointer 
                             active:scale-95 
                             bg-[#2F3B56] 
                             hover:bg-[#cf1818] 
                             hover:text-black 
                             py-1  
                             rounded-2xl 
                             font-bold 
                             text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
