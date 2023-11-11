import { Link } from "react-router-dom";
import Viewdata from "../components/viewdata";

function View() {
  return (
    <>
      <div
        className="w-[1124px] h-[216.15px] absolute flex custom shadow
    top-[122.92px] left-[288px] p-[25.94px] border rounded-12 border-solid border-0.86"
      >
        <img
          src="/Icons/user.png"
          alt="user1"
          className="w-[168px] absolute
      [h-172px] top-[18px]
      left-[0.06px ] rounded-[8px]"
        ></img>

        <span
          className=" w-[113px] h-[26px] absolute 
        left-[230px] view-text"
        >
          Joe David
        </span>
        <span
          className="view-email absolute 
        left-[230px] top-[61px] "
        >
          joedavid@gmail.com
        </span>

        <div className="item1">
          <span className="w-[86px] h-[23px] item1-text space-x-9.78">
            45,0000
          </span>
          <span
            className="item-text2 w-[50px] h-[17px] absolute 
          left-[19px] top-[48px]"
          >
            Friends
          </span>
        </div>

        <div className="item2">
          <span
            className="w-[86px] h-[23px] absolute 
          left-[10px] item1-text2  space-x-9.78"
          >
            75
          </span>
          <span
            className="item-text2 w-[50px] h-[17px] absolute
          left-[9px] top-[48px]"
          >
            Events
          </span>
        </div>
        <div>
          <Link to="/edit">
            <button className="edit-button absolute left-[970px]">Edit</button>
          </Link>
          <button
            className="w-[30px] h-[30px] absolute 
          right-[56px] "
          >
            <img src="/Icons/arrows.svg" alt="three-dot"></img>
          </button>
        </div>
      </div>

      <div
        className="
     rounded-8 
      user-details flex custom-shadow"
      >
        <img
          src="/Icons/user2.png"
          alt="user2"
          className=" w-[313px] h-[313px] absolute [h-172px] top-[18px]
      left-[17px]"
        ></img>
        <span className="ud-text ">User Details</span>
        <div className="w-[629px] h-[182px] absolute top-[150px] left-[400px] rounded-8">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span className="un-text">User name</span>
            <span
              className=" font-bold leading-[25px] tracking-[0.02em]"
              style={{ marginLeft: "250px" }}
            >
              Joe David
            </span>
          </div>
          <div style={{ marginTop: "50px" }} className="un-text">
            <span>Email</span>
            <span className="un-text" style={{ marginLeft: "270px" }}>
              joedavid@gmail.com
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
          >
            <span
              className="un-text
            
            
            "
            >
              Phone Number
            </span>
            <span
              className=" font-bold leading-[25px] tracking-[0.02em]"
              style={{ marginLeft: "210px" }}
            >
              +92-3346789
            </span>
          </div>
        </div>
      </div>
      <Viewdata />
    </>
  );
}

export default View;
