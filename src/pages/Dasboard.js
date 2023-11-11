import SmallChart from "../components/AreaChart";
import Chart from "../components/Chart";
import Circle from "../components/PieChart";
import UserTable from "../components/UserTable";

export default function Dasboard() {
  return (
    <>
      <div className="w-[164px] h-[180px] absolute flex left-[525px] top-[100px] custom-shadow">
        <span className="w-[46px] h-[46px] absolute top-[12px] left-[12px]">
          <img alt="icon" src="/Icons/Icon.png"></img>
        </span>
        <span className="us-t w-[39px] h-[23px] absolute top-[63px] left-[18px]">
          Users
        </span>
        <span className="ut-n w-[71.57px] h-[29px] absolute top-[90px] left-[17.89px] ">
          428
        </span>
        <span className="w-[164px] h-[57.42px] absolute top-[123px] opacity-60">
          <SmallChart />
        </span>
      </div>
      <div className="w-[164px] h-[180px] absolute flex left-[325px] top-[100px] custom-shadow">
        <span className="us-t w-[39px] h-[23px] absolute top-[18px] left-[18px]">
          Events
        </span>
        <span className="ut-n w-[71.57px] h-[29px] absolute top-[50px] left-[17.89px] ">
          261
        </span>
        <span className="w-[123px] h-[60px] absolute top-[102px] left-[20.5px]">
          <img src="/Icons/Chart.png" alt="tube"></img>
        </span>
      </div>

      <div className="w-[356px] flex custom-shadow h-[160px] absolute top-[302px] left-[330px]">
        <span className="absolute top-[-120px] left-[-150px]">
          <Circle />
        </span>
        <span
          className="ut-n2 w-[54px] h-[22px] absolute"
          style={{ top: "60.49px", left: "245px" }}
        >
          62%
        </span>

        <span
          className="ut-n2 w-[54px] h-[22px] absolute"
          style={{ top: "80.49px", left: "235px" }}
        >
          Events
        </span>

        <span className="us-t w-[39px] h-[23px] absolute top-[18px] left-[18px]">
          Events
        </span>
        <span className="ut-n w-[71.57px] h-[29px] absolute top-[50px] left-[17.89px] ">
          205
        </span>
        <span className="ut-n3 w-[171px] h-[36px] absolute top-[108px] left-[17.89px] ">
          68.2% more events than last month.
        </span>
      </div>
      <div className="sales-div ">
        <h1 className="event-posting  ">Event Posting</h1>
        <span className="text-2 w-[40px] h-[5px] absolute top-[44px] left-[15px]">
          2023 Total Events: 12.84k
        </span>

        <Chart />

        <div>
          <UserTable />
        </div>

        <div
          className="w-[366px] h-[460px] custom-shadow absolute top-[395px] 
        left-[372px] p-[28.58px] rounded-[8.62] gap-36"
        >
          <span className="ut-4">Top Events</span>
          <div className="w-[308px] h-[268px] absolute top-[100px]">
            <div className="w-[308px] h-[45px]">
              <img
                className="w-[45px] h-[45px]"
                src="/Icons/edit1.png"
                alt=""
              ></img>
              <span
                className="w-[145px] t-2 h-[16px] absolute 
              left-[65px] top-[15px]"
              >
                Funeral Option
              </span>
              <span className="w-[61px] t-3 h-[36px]  absolute left-[235px] top-[8px] bg-gray-200">
                2000
              </span>
            </div>
            <div className="w-[308px] h-[45px] absolute top-[60px]">
              <img
                className="w-[45px] h-[45px]"
                src="/Icons/edit1.png"
                alt=""
              ></img>
              <span
                className="w-[145px] t-2 h-[16px] absolute 
              left-[65px] top-[15px]"
              >
                Funeral Option
              </span>
              <span className="w-[61px] t-3 h-[36px]  absolute left-[235px] top-[8px] bg-gray-200">
                2000
              </span>
            </div>
            <div className="w-[308px] h-[45px] absolute top-[120px]">
              <img
                className="w-[45px] h-[45px]"
                src="/Icons/edit1.png"
                alt=""
              ></img>
              <span
                className="w-[145px] t-2 h-[16px] absolute 
              left-[65px] top-[15px]"
              >
                Funeral Option
              </span>
              <span className="w-[61px] t-3 h-[36px]  absolute left-[235px] top-[8px] bg-gray-200">
                2000
              </span>
            </div>

            <div className="w-[308px] h-[45px] absolute top-[180px]">
              <img
                className="w-[45px] h-[45px]"
                src="/Icons/edit1.png"
                alt=""
              ></img>
              <span
                className="w-[145px] t-2 h-[16px] absolute 
              left-[65px] top-[15px]"
              >
                Funeral Option
              </span>
              <span className="w-[61px] t-3 h-[36px]  absolute left-[235px] top-[8px] bg-gray-200">
                2000
              </span>
            </div>
            <div className="w-[308px] h-[45px] absolute top-[240px]">
              <img
                className="w-[45px] h-[45px]"
                src="/Icons/edit1.png"
                alt=""
              ></img>
              <span
                className="w-[145px] t-2 h-[16px] absolute 
              left-[65px] top-[15px]"
              >
                Funeral Option
              </span>
              <span className="w-[61px] t-3 h-[36px]  absolute left-[235px] top-[8px] bg-gray-200">
                2000
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
