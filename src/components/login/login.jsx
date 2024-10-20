import Input from "../input/input";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../redux/actions/a.auth";
import fetchUserContent from "../../redux/actions/a.user";

const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    phone: "",
    loginMethod: "email",
    password: "",
    userExisted: false,
  });
  const userItems = useSelector((state) => state.userItems);

  const handleSubmit = async () => {
    if (state.loginMethod === "email") {
      try {
        const res = await dispatch(
          fetchUserContent(state.email).then((res) => {
            return res;
          })
        ); // Await the dispatch
        console.log(res);
        if (res.status === 200) {
          setState({ ...state, userExisted: true });
          // dispatch(loginUser(state.email, state.password));
          console.log("user founded", state.email);
        } else {
          setState({ ...state, userExisted: false });
          // dispatch(registerUser(state.email, state.password));
          console.log("user not founded");
        }
      } catch (error) {
        console.error("Error fetching user content:", error);
        setState({ ...state, userExisted: false });
      }
    } else {
      // Handle phone number login
    }
  };

  const emailIcon = (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 5.5H6C4 5.5 3 6.5 3 8.5V17.5C3 19.5 4 20.5 6 20.5H18C20 20.5 21 19.5 21 17.5V8.5C21 6.5 20 5.5 18 5.5ZM17.9409 10.106L13.0291 13.678C12.7211 13.902 12.36 14.014 12 14.014C11.64 14.014 11.2779 13.902 10.9709 13.679L6.05908 10.106C5.72408 9.863 5.65004 9.393 5.89404 9.058C6.13704 8.724 6.60389 8.64801 6.94189 8.89301L11.854 12.465C11.942 12.528 12.059 12.529 12.147 12.465L17.0591 8.89301C17.3961 8.64801 17.8639 8.724 18.1069 9.058C18.3509 9.394 18.2759 9.863 17.9409 10.106Z"
        fill="#777E90"
      />
    </svg>
  );

  return (
    <>
      <div className="login-box__container p-[15px] md:p-[25px] lg:p-[44px] w-[90%] max-w-[420px] h-[80vh] bg-[#18191D] rounded-[24px] relative">
        <div className="login-box__layer absolute top-0 left-0">
          <svg
            className="w-full  rounded-[24px]"
            width="503"
            height="409"
            viewBox="0 0 503 409"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.6"
              cx="252"
              cy="54"
              r="355"
              fill="url(#paint0_radial_1144_11138)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1144_11138"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(252 54) rotate(90) scale(355)"
              >
                <stop stop-color="#5E94FF" stop-opacity="0.24" />
                <stop offset="1" stop-color="#315EFF" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="login-box__content grid grid-rows-3 h-full">
          <div className="login-box__header flex flex-col justify-center items-center">
            <div className="email-logo__container">
              <svg
                width="73"
                height="73"
                viewBox="0 0 73 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 17.75C21.5 16.5074 22.5074 15.5 23.75 15.5H37.25C38.4926 15.5 39.5 16.5074 39.5 17.75C39.5 18.9926 38.4926 20 37.25 20H23.75C22.5074 20 21.5 18.9926 21.5 17.75Z"
                  fill="#B1B5C3"
                />
                <path
                  d="M21.5 28.25C21.5 27.0074 22.5074 26 23.75 26H46.25C47.4926 26 48.5 27.0074 48.5 28.25C48.5 29.4926 47.4926 30.5 46.25 30.5H23.75C22.5074 30.5 21.5 29.4926 21.5 28.25Z"
                  fill="#B1B5C3"
                />
                <path
                  d="M12.5 19.2529C10.9715 20.3875 9.62068 21.4252 8.53682 22.2727C6.73084 23.685 5.59875 25.7677 5.44598 28.0552C5.23809 31.168 5 36.3934 5 43.9999C5 51.1933 5.42588 56.2572 5.82379 59.4187C6.15187 62.0254 7.89707 64.0926 10.4702 64.6237C14.5959 65.4753 22.4741 66.4999 36.5 66.4999C50.5259 66.4999 58.4042 65.4753 62.5298 64.6237C65.1029 64.0926 66.8482 62.0254 67.1762 59.4187C67.5742 56.2572 68 51.1933 68 43.9999C68 36.3934 67.762 31.168 67.5541 28.0552C67.4012 25.7677 66.2692 23.685 64.4632 22.2727C63.3793 21.4252 62.0285 20.3875 60.5 19.2529V30.3648C60.5 32.3289 59.5457 34.1653 57.9029 35.2417C52.825 38.5687 41.63 45.4999 36.5 45.4999C31.37 45.4999 20.175 38.5687 15.0971 35.2417C13.4542 34.1653 12.5 32.3289 12.5 30.3648V19.2529Z"
                  fill="#1A80E6"
                />
                <g filter="url(#filter0_i_1144_11126)">
                  <path
                    d="M12.5 19.2529C10.9715 20.3875 9.62068 21.4252 8.53682 22.2727C6.73084 23.685 5.59875 25.7677 5.44598 28.0552C5.23809 31.168 5 36.3934 5 43.9999C5 51.1933 5.42588 56.2572 5.82379 59.4187C6.15187 62.0254 7.89707 64.0926 10.4702 64.6237C14.5959 65.4753 22.4741 66.4999 36.5 66.4999C50.5259 66.4999 58.4042 65.4753 62.5298 64.6237C65.1029 64.0926 66.8482 62.0254 67.1762 59.4187C67.5742 56.2572 68 51.1933 68 43.9999C68 36.3934 67.762 31.168 67.5541 28.0552C67.4012 25.7677 66.2692 23.685 64.4632 22.2727C63.3793 21.4252 62.0285 20.3875 60.5 19.2529V30.3648C60.5 32.3289 59.5457 34.1653 57.9029 35.2417C52.825 38.5687 41.63 45.4999 36.5 45.4999C31.37 45.4999 20.175 38.5687 15.0971 35.2417C13.4542 34.1653 12.5 32.3289 12.5 30.3648V19.2529Z"
                    fill="#E2E2E2"
                    fill-opacity="0.04"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5 15.5V30.3649C12.5 32.329 13.4542 34.1654 15.0971 35.2418C20.175 38.5688 31.37 45.5 36.5 45.5C41.63 45.5 52.825 38.5688 57.9029 35.2418C59.5457 34.1654 60.5 32.329 60.5 30.3649V15.5C60.5 10.5294 56.4706 6.5 51.5 6.5H21.5C16.5294 6.5 12.5 10.5294 12.5 15.5ZM23.75 15.5001C22.5074 15.5001 21.5 16.5075 21.5 17.7501C21.5 18.9927 22.5074 20.0001 23.75 20.0001H37.25C38.4926 20.0001 39.5 18.9927 39.5 17.7501C39.5 16.5075 38.4926 15.5001 37.25 15.5001H23.75ZM23.75 26.0001C22.5074 26.0001 21.5 27.0075 21.5 28.2501C21.5 29.4927 22.5074 30.5001 23.75 30.5001H46.25C47.4926 30.5001 48.5 29.4927 48.5 28.2501C48.5 27.0075 47.4926 26.0001 46.25 26.0001H23.75Z"
                  fill="#D6D8E0"
                />
                <g filter="url(#filter1_i_1144_11126)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5 15.5V30.3649C12.5 32.329 13.4542 34.1654 15.0971 35.2418C20.175 38.5688 31.37 45.5 36.5 45.5C41.63 45.5 52.825 38.5688 57.9029 35.2418C59.5457 34.1654 60.5 32.329 60.5 30.3649V15.5C60.5 10.5294 56.4706 6.5 51.5 6.5H21.5C16.5294 6.5 12.5 10.5294 12.5 15.5ZM23.75 15.5001C22.5074 15.5001 21.5 16.5075 21.5 17.7501C21.5 18.9927 22.5074 20.0001 23.75 20.0001H37.25C38.4926 20.0001 39.5 18.9927 39.5 17.7501C39.5 16.5075 38.4926 15.5001 37.25 15.5001H23.75ZM23.75 26.0001C22.5074 26.0001 21.5 27.0075 21.5 28.2501C21.5 29.4927 22.5074 30.5001 23.75 30.5001H46.25C47.4926 30.5001 48.5 29.4927 48.5 28.2501C48.5 27.0075 47.4926 26.0001 46.25 26.0001H23.75Z"
                    fill="#D6D8E0"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_1144_11126"
                    x="3"
                    y="17.2529"
                    width="65"
                    height="49.247"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="-2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1144_11126"
                    />
                  </filter>
                  <filter
                    id="filter1_i_1144_11126"
                    x="10.5"
                    y="4.5"
                    width="50"
                    height="41"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="-2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1144_11126"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="text__container">
              <h1 className="text-[24px] font-bold">
                Welcome to <span className="text-[#1A80E6]">FalconX</span>
              </h1>
            </div>
          </div>
          <div className="login-box__switch">
            {/* Background that slides based on the selected button */}

            <div className="login-box__switch-background bg-[#23262F] rounded-[8px] w-full flex justify-center relative z-10">
              <div
                className={`absolute top-0 left-0 h-full w-[50%] bg-[#353945] rounded-[8px] transition-all duration-300 ease-in-out ${
                  state.loginMethod === "phone" ? "translate-x-[100%]" : ""
                }`}
              ></div>
              <Button
                className={`${
                  state.loginMethod === "email"
                    ? "text-[#FCFCFD]"
                    : "text-[#B1B5C3] hover:text-[#FCFCFD]"
                } w-[50%] border-0`}
                onClick={() => setState({ ...state, loginMethod: "email" })}
                variant="outlined"
                sx={{ textTransform: "none" }}
              >
                Email
              </Button>
              <Button
                className={`${
                  state.loginMethod === "phone"
                    ? "text-[#FCFCFD]"
                    : "text-[#B1B5C3] hover:text-[#FCFCFD]"
                } w-[50%] border-0`}
                onClick={() => setState({ ...state, loginMethod: "phone" })}
                variant="outlined"
                sx={{ textTransform: "none" }}
              >
                Phone Number
              </Button>
            </div>
          </div>
          <div className="login-box__form">
            {state.loginMethod == "email" ? (
              <Input
                label="Email"
                type="email"
                value={state.email}
                icon={emailIcon}
                onChange={(e) => {
                  setState({ ...state, email: e.target.value });
                }}
              />
            ) : (
              <Input
                type="tel"
                value={state.phone}
                onChange={(e) => {
                  setState({ ...state, phone: e.target.value });
                }}
              />
            )}
          </div>
          <div className="login-box__button m-auto w-full">
            <Button
              className={`${
                state.loginMethod === "email"
                  ? "text-[#FCFCFD]"
                  : "text-[#B1B5C3] hover:text-[#FCFCFD]"
              } lg:w-full md:h-[56px] bg-[#1A80E6] text-[18px] font-medium border-0 h-[48px] w-[80%] m-auto`}
              onClick={handleSubmit}
              variant="outlined"
              sx={{ textTransform: "none" }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <div className="other-signups relative w-[60%] max-w-[330px] py-[23px]">
        <p className="text-[12px] text-[#B1B5C3] font-normal flex justify-between items-center before:basis-[27%] before:lg:basis-[35%] before:h-[0.5px] before:bg-[#777E90] after:basis-[27%] after:lg:basis-[35%] after:h-[0.5px] after:bg-[#777E90]">
          or sign up with
        </p>
      </div>
    </>
  );
};
export default Login;
