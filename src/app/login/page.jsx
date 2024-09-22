"use client";
import Input from "../../components/input/input";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="login-box__container p-[44px] w-[420px] h-[600px] bg-[#18191D] rounded-[24px] relative">
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
          <div className="login-box__content-first-section flex flex-col justify-center items-center">
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
              <h1 className="text-[24px]">
                Welcome to <span className="text-[#1A80E6]">FalconX</span>
              </h1>
            </div>
          </div>
          <div className="login-box__form">
            <Input label="Email" type="email"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
