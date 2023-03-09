import { useDispatch } from "react-redux";
import { setPlayVideo } from "../../../store/global/globalSlice";
import styled from "styled-components";
const ButtonPlay = ({ onClick = null }) => {
  const dispatch = useDispatch();
  return (
    <StyledBtnPlay
      onClick={() => dispatch(setPlayVideo(true))}
      className="flex items-center justify-center w-20 h-20 transition-all duration-500 bg-white rounded-full cursor-pointer btn-play text-bgPrimary hover:text-white hover:bg-bgPrimary hover:scale-105"
    >
      <svg
        id="play"
        xmlns="http://www.w3.org/2000/svg"
        width="46.302"
        height="46.302"
        viewBox="0 0 46.302 46.302"
      >
        <g id="Group_193" data-name="Group 193" transform="translate(0 0)">
          <path
            id="Path_116"
            data-name="Path 116"
            d="M39.521,6.781a23.151,23.151,0,0,0-32.74,32.74,23.151,23.151,0,0,0,32.74-32.74ZM23.151,44.457A21.306,21.306,0,1,1,44.457,23.151,21.33,21.33,0,0,1,23.151,44.457Z"
            fill="currentColor"
          />
          <g
            id="Group_188"
            data-name="Group 188"
            transform="translate(15.588 11.19)"
          >
            <g id="Group_187" data-name="Group 187">
              <path
                id="Path_117"
                data-name="Path 117"
                d="M190.3,133.213l-13.256-8.964a3,3,0,0,0-4.674,2.482v17.929a2.994,2.994,0,0,0,4.674,2.481l13.256-8.964a3,3,0,0,0,0-4.963Zm-1.033,3.435-13.256,8.964a1.151,1.151,0,0,1-1.8-.953V126.73a1.134,1.134,0,0,1,.611-1.017,1.134,1.134,0,0,1,1.185.063l13.256,8.964a1.151,1.151,0,0,1,0,1.907Z"
                transform="translate(-172.366 -123.734)"
                fill="currentColor"
              />
            </g>
          </g>
          <g
            id="Group_190"
            data-name="Group 190"
            transform="translate(28.593 5.401)"
          >
            <g id="Group_189" data-name="Group 189">
              <path
                id="Path_118"
                data-name="Path 118"
                d="M328.31,70.492a18.965,18.965,0,0,0-10.886-10.708.922.922,0,1,0-.653,1.725,17.117,17.117,0,0,1,9.825,9.664.922.922,0,1,0,1.714-.682Z"
                transform="translate(-316.174 -59.724)"
                fill="currentColor"
              />
            </g>
          </g>
          <g
            id="Group_192"
            data-name="Group 192"
            transform="translate(22.228 4.243)"
          >
            <g id="Group_191" data-name="Group 191">
              <path
                id="Path_119"
                data-name="Path 119"
                d="M249.922,47.187a19.08,19.08,0,0,0-3.2-.27.922.922,0,0,0,0,1.845,17.245,17.245,0,0,1,2.889.243.922.922,0,1,0,.31-1.818Z"
                transform="translate(-245.801 -46.917)"
                fill="currentColor"
              />
            </g>
          </g>
        </g>
      </svg>
    </StyledBtnPlay>
  );
};
export default ButtonPlay;
const StyledBtnPlay = styled.button`
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-animation: animate 2s linear infinite;
  animation: animate 2s linear infinite;
  -webkit-transform: scale(1);
  transform: scale(1);
  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  @keyframes animate {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgb(255 255 255 / 70%);
      box-shadow: 0 0 0 0 rgb(255 255 255 / 70%);
    }
    40% {
      -webkit-box-shadow: 0 0 0 50px rgb(255 193 7 / 0%);
      box-shadow: 0 0 0 50px rgb(255 193 7 / 0%);
    }
    80% {
      -webkit-box-shadow: 0 0 0 50px rgb(255 193 7 / 0%);
      box-shadow: 0 0 0 50px rgb(255 193 7 / 0%);
    }
    100% {
      -webkit-box-shadow: 0 0 0 rgb(255 193 7 / 0%);
      box-shadow: 0 0 0 rgb(255 193 7 / 0%);
    }
  }
`;
