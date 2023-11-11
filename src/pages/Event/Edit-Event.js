import { Link } from "react-router-dom";
import Interested from "../Event/component/Interested";

function Editevent() {
  return (
    <>
      <div
        className="w-[1124px] h-[216.15px] absolute flex custom shadow
    top-[122.92px] left-[288px] p-[25.94px] border rounded-12 border-solid border-0.86"
      >
        <img
          src="/Icons/event-view.png"
          alt="user1"
          className="w-[168px] absolute
      [h-172px] top-[30px]
      left-[0.06px ] rounded-[8px]"
        ></img>

        <div className="w-[174px] h-[184px] gap-[4px] mb-10">
          <span
            className=" absolute 
        left-[230px] view-text"
          >
            Vacation Event
          </span>
          <span
            className="view-email absolute 
        left-[230px] top-[61px] "
          >
            Created By
          </span>
          <span
            className=" absolute 
        left-[310px] text-bold top-[60px] "
          >
            Joe David
          </span>
          <span
            className="view-email absolute 
        left-[230px] top-[83px] "
          >
            Event Type
          </span>
          <span
            className=" absolute 
        left-[310px] text-bold top-[80px] "
          >
            Play Jol
          </span>
        </div>

        <div className="item1">
          <span className="w-[86px] h-[23px] item1-text space-x-9.78">
            Islamabad
          </span>
          <span
            className="item-text2 w-[50px] h-[17px] absolute 
          left-[19px] top-[48px]"
          >
            Location
          </span>
        </div>

        <div className="item2">
          <span
            className="w-[86px] h-[23px] absolute 
          left-[10px] item1-text2  space-x-9.78"
          >
            10 SEP
          </span>
          <span
            className="item-text2 w-[50px] h-[17px] absolute
          left-[9px] top-[48px]"
          >
            Date
          </span>
        </div>
        <div className="item3">
          <span
            className=" absolute 
          left-[10px] item1-text2  space-x-9.78"
          >
            Comnents
          </span>
          <span
            className="item-text2  absolute
          left-[9px] top-[48px]"
          >
            20000
          </span>
        </div>
        <div className="item4">
          <span
            className=" absolute 
          left-[10px] item1-text2  space-x-9.78"
          >
            Interested
          </span>
          <span
            className="item-text2  absolute
          left-[9px] top-[48px]"
          >
            200
          </span>
        </div>
        <div className="item5">
          <span
            className=" absolute 
          left-[10px] item1-text2  space-x-9.78"
          >
            Going
          </span>
          <span
            className="item-text2  absolute
          left-[9px] top-[48px]"
          >
            200
          </span>
        </div>
        <div>
          <Link to="/events-views">
            <button className="edit-button2 absolute left-[910px]">
              Save Changes
            </button>
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
      event-details flex custom-shadow"
      >
        <img
          src="/Icons/event2.png"
          alt="user2"
          className=" w-[313px] h-[313px] absolute [h-172px] top-[45px]
      left-[17px]"
        ></img>
        <span className="ud-text ">User Details</span>
        <div className="w-[629px] h-[182px] absolute top-[150px] left-[400px] rounded-8">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span className="un-text"> Event Name</span>
            <span
              className=" font-bold leading-[25px] tracking-[0.02em]"
              style={{ marginLeft: "240px" }}
            >
              Vacation Event
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
          >
            <span className="un-text">Event Type</span>
            <span
              className=" font-bold leading-[25px] tracking-[0.02em]"
              style={{ marginLeft: "250px" }}
            >
              PlayDate
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
          >
            <span className="un-text">Date</span>
            <span
              className=" font-bold leading-[25px] tracking-[0.02em]"
              style={{ marginLeft: "290px" }}
            >
              10 SEP
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
          >
            <span className="un-text">Comments</span>
            <span
              className=" font-bold leading-[25px] tracking-[0.02em]"
              style={{ marginLeft: "255px" }}
            >
              200
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
          >
            <span className="un-text">Description</span>
            <span className=" font-bold " style={{ marginLeft: "230px" }}>
              lorem lorem lorem loerm lorem lorem lorem loerm lorem lorem lorem
            </span>
          </div>
        </div>
      </div>
      <div className="w-[93px] h-[24px] absolute top-[24px] left-[87px]">
        <div className="w-[93px] h-[24px] absolute top-[924px] left-[198px]">
          <h1 className="text-events">Events</h1>
        </div>
        <Interested />
      </div>
    </>
  );
}

export default Editevent;
