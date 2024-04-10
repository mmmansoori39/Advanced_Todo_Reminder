import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [inputData, setInputData] = useState({ email: "", password: "" });
  function getInput(e) {
    setInputData((preValues) => {
      return { ...preValues, [e.target.name]: e.target.value };
    });
  }
  const navigator = useNavigate();
  const LoginHandler = async (e) => {
    e.preventDefault();

    if (inputData.email == "" || inputData.password == "") {
      toast.error("Please fill all input fields");
      return;
    }
    try {
      const LoginRoute = await fetch("http://localhost:4000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      if (LoginRoute.ok) {
        const data = await LoginRoute.json();
        toast.success(data.message);
        navigator("/home");
      } else {
        const errorData = await LoginRoute.json();
        toast.error(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center p-8">
      <div className="main_container w-[400px] p-5 shadow-xl mt-12 ">
        <h1 className="text-center text-4xl text-green-400 font-bold mt-5">
          TReminder
        </h1>
        <div className="mt-6">
          <h2 className="text-center text-2xl text-gray-300 font-bold mb-5 underline">
            Login
          </h2>
          <form
            action=""
            className="text-center"
            style={{ position: "relative" }}
          >
            <input
              onChange={getInput}
              name="email"
              type="text"
              placeholder="Enter email"
              className="registerInput text-slate-500 font-bold w-full px-2 py-3 rounded mb-4 bg-slate-100"
            />
            <input
              onChange={getInput}
              name="password"
              type="password"
              placeholder="Enter password"
              className="registerInput text-slate-500 font-bold w-full px-2 py-3 rounded mb-4 bg-slate-100"
            />
            <button
              onClick={LoginHandler}
              className="btn  px-7 py-1 rounded-[0.3rem] mt-6"
            >
              Submit
            </button>
            {/* <div className="">
              <Link
                // to={"/forgetpassword"}
                className="text-zinc-500 hover:text-red-600"
                style={{
                  position: "absolute",
                  bottom: "2.5rem",
                  right: "1rem",
                  fontSize: "0.9rem",
                }}
              >
                forget password
              </Link>
            </div> */}
          </form>

          <p className="text-center mt-4 text-teal-700">
            Don't have account?
            <Link to={"/"} className="text-blue-700 hover:text-red-600">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
