import { Link, Outlet } from "react-router-dom";

function Eventview() {
  return (
    <>
      <div
        className="w-[72.056vw] h-[15.010vw] absolute flex custom shadow
    top-[122.92px] left-[288px] p-[16px] border rounded-12 border-solid border-0.86"
      >
        <img
          src="/Icons/event-view.png"
          alt="user1"
          className="w-[159px] absolute
      [h-172px] top-[30px]
      left-[0.06px ] rounded-[8px]"
        ></img>

        <div className="w-[110px] h-[184px] gap-[4px] mb-10">
          <span
            className=" absolute
        left-[205px] top-[14px] view-text"
          >
            Vacation Event
          </span>
          <span
            className="view-email absolute
        left-[210px] top-[44px] "
          >
            Created By
          </span>
          <span
            className=" absolute
        left-[290px] text-bold top-[44px] "
          >
            Joedavid
          </span>
          <span
            className="view-email absolute
        left-[210px] top-[72px] "
          >
            Event Type
          </span>
          <span
            className=" absolute
        left-[290px] text-bold top-[72px] "
          >
            Play Jol
          </span>
        </div>

        <div className="item1">
          <span className="w-[66px] h-[23px] item1-text space-x-9.78">
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
            Comments
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
      left-[16px]"
        ></img>
        <span className="ud-text ">Event Details</span>
        <div className="w-[629px] h-[182px] absolute top-[110px] left-[380px] rounded-8">
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
      <div className="w-[93px] h-[24px] absolute top-[924px] left-[297px]">
        <Link to="/events-views/comments">
          <button className="edit-button3 absolute left-[310px]">
            Comments
          </button>
        </Link>
        <Link to="/events-views/going">
          <button className="edit-button2 absolute left-[180px]">Going</button>
        </Link>
        <Link to="/events-views/interested">
          <button className="edit-button3 absolute left-[50px] ">
            Interested
          </button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Eventview;
