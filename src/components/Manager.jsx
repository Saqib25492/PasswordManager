import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const ref1 = useRef();

  const [form, SetForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    console.log(passwordArray);
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const savePassword = () => {
    toast(`Password Saved!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: "Bounce",
    });
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    SetForm({ site: "", username: "", password: "" });

    // console.log([...passwordArray, form]);
  };

  const deletePassword = (id) => {
    let conf = confirm("Do you really want to delete this password?");

    if (conf) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
  };

  const editPassword = (id) => {
    SetForm(passwordArray.filter((item) => item.id === id)[0]);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const showPassword = () => {
    if (ref.current.src.includes("icons/hideye.png")) {
      // alert(true)
      ref.current.src = "icons/eye.png";
      ref.current.width = 60;
      ref1.current.type = "password";
      ref1.current.focus();
    } else {
      ref.current.src = "icons/hideye.png";
      ref.current.width = 40;
      ref1.current.type = "text";
      ref1.current.focus();
    }
  };

  const handleChange = (e) => {
    SetForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const copyText = (text) => {
    toast(`Copied to clipboard`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: "Bounce",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />

      <ToastContainer />


      <div className="md:mycontainer min-h-[85.4vh]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-700 text-lg text-center">
          Your own password manager
        </p>

        <div className="flex flex-col p-4 gap-8 items-center">
          <input
            onChange={handleChange}
            value={form.site}
            className="rounded-full border border-green-700 text-black py-1 px-4 w-full"
            type="text"
            name="site"
            id="site"
            placeholder="Enter URL"
          />
          <div className="flex flex-col md:flex-row justify-between my-2 w-full gap-6">
            <input
              onChange={handleChange}
              value={form.username}
              className="rounded-full md:w-3/5 border border-green-700 text-black py-1 px-4"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />

            <div className="relative md:w-2/5">
              <input
                onChange={handleChange}
                value={form.password}
                ref={ref1}
                className="rounded-full border border-green-700 text-black py-1 px-4 w-full"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <span
                className="absolute right-0 top-[1px] bottom-2 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  src="icons/eye.png"
                  width={60}
                  alt="eye"
                  className="py-2 px-3"
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex gap-2 justify-center items-center text-white bg-green-600 rounded-full px-6 py-2 w-fit hover:bg-green-400 hover:text-black border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="py-3 mx-2 md:mx-0 font-bold text-xl">
            Your Passwords
          </h2>
          {passwordArray.length === 0 && (
            <div className="mx-2 md:mx-0">No Passwords to show</div>
          )}

          {passwordArray.length !== 0 && (
            <div className="overflow-x-auto mb-10">
              <table className="table-auto min-w-full text-md overflow-hidden rounded-md">
                <thead className="text-md uppercase text-white bg-green-800 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Site
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Username
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Password
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-green-100">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div className="flex gap-3">
                            <a href={item.site} target="_blank">
                              {item.site}
                            </a>
                            <img
                              src="/copy.png"
                              alt=""
                              className="w-5 cursor-pointer"
                              onClick={() => {
                                copyText(item.site);
                              }}
                            />
                          </div>
                        </th>
                        <td className="px-2 py-4 text-black">
                          <div className="flex gap-5">
                            <span>{item.username}</span>
                            <img
                              src="/copy.png"
                              alt=""
                              className="w-5 hover:w-5 cursor-pointer"
                              onClick={() => {
                                copyText(item.username);
                              }}
                            />
                          </div>
                        </td>
                        <td className="px-2 py-4 text-black">
                          <div className="flex gap-5">
                            <span>{item.password}</span>
                            <img
                              src="/copy.png"
                              alt=""
                              className="w-5 hover:w-5 cursor-pointer"
                              onClick={() => {
                                copyText(item.password);
                              }}
                            />
                          </div>
                        </td>

                        <td className="px-2 py-4 text-right">
                          <div className="flex justify-center items-center gap-3">
                            <span
                              className="cursor-pointer"
                              onClick={() => {
                                editPassword(item.id);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/wuvorxbv.json"
                                trigger="hover"
                                stroke="bold"
                                state="hover-line"
                              ></lord-icon>
                            </span>
                            <span
                              className="cursor-pointer"
                              onClick={() => {
                                deletePassword(item.id);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/drxwpfop.json"
                                trigger="hover"
                              ></lord-icon>
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
