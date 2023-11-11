import { useState } from "react";
import { eventData } from "../data/mockUpData";
import Pagination from "../components/Pagination";

import EventActions from "../components/EventActions";

let itemsPerPage = 6;

export default function Events() {
  const [currentPage, setCurrentPage] = useState(0);
  const [clickedRow, setClickedRow] = useState(null);

  const rows = eventData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePerPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleActions = (rowIndex) => {
    setClickedRow(rowIndex);
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert("Please ask Sumbal to add a functionality");
  };

  const numberOfPages = Math.ceil(eventData.length / itemsPerPage);

  return (
    <>
      <div className="data-table  custom-shadow">
        <div className="border-b border-gray-200 mt-[20px]  border-solid border-1">
          <span className="p-[3rem] mt-[50px] text-[24px] text-semibold text-left text-gray-700">
            Events
          </span>
        </div>
        <div>
          <span className="p-[1rem] w-[33px] h-[19px] relative top-[20px] left-4 font-inter text-13 font-normal leading-19 tracking-normal text-left text-gray-600">
            Show
          </span>
          <button
            onClick={handleClick}
            className="w-[130px] h-[26px] relative top-[29px] left-[25px]"
          >
            <img src="/images/input.svg" alt="input"></img>
          </button>
          <div className="search-bar2">
            <span>
              <img src="/images/search-normal.svg" alt="search"></img>
            </span>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <table className="w-full border-collapse">
          <thead className=" table-header">
            <tr>
              <th className="p-3 text-center w-1/7">EVENT NAME</th>
              <th className="p-3 text-center w-1/7">
                <button className="w-[6.74px] h-[10.74px] relative top-[2.16px] right-[26.03px]">
                  <img src="/images/chevron-up.svg" alt="input"></img>
                  <img src="/images/chevron-down.svg" alt="input"></img>
                </button>
                TIME & LOCATION
                <button className="w-[6.74px] h-[10.74px] relative top-[3px] left-[22px]">
                  <img src="/images/chevron-up.svg" alt="input"></img>
                  <img src="/images/chevron-down.svg" alt="input"></img>
                </button>
              </th>
              <th className="p-3 text-center w-1/7">User</th>
              <th className="p-3 text-center w-1/7">COMMENTS</th>
              <th className="p-3 text-center w-1/7">GOING</th>
              <th className="p-3 text-center w-1/7">INTERESTED</th>
              <th className="p-3 text-center w-1/7">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr>
                <td className="p-3 border-b border-gray-300 text-center w-1/3">
                  <div className="flex items-center">
                    <img
                      src="/images/Avatar.png"
                      alt="Avatar"
                      className="rounded-full w-8 h-8 mr-4 ml-10"
                    />
                    <span className="data-table-text"> {item.name} </span>
                  </div>
                </td>
                <td className="p-3 border-b border-gray-300 text-center w-1/3">
                  <span className="data-table-email">{item.time}</span>
                </td>
                <td className="p-3 border-b border-gray-300 text-center w-1/3">
                  <span className="data-table-email">{item.user}</span>
                </td>
                <td className="p-3 border-b border-gray-300 text-center w-1/6">
                  <span className="data-table-no"> {item.comments} </span>
                </td>
                <td className="p-3 border-b border-gray-300 text-center w-1/6">
                  <span className="data-table-no"> {item.going} </span>
                </td>
                <td className="p-3 border-b border-gray-300 text-center w-1/6">
                  <span className="data-table-no"> {item.interested} </span>
                </td>
                <td className="p-3 border-b border-gray-300 text-center w-1/6">
                  <button onClick={() => handleActions()}>
                    <img src="/images/shape.svg" alt="actions"></img>
                  </button>
                </td>
              </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
          <tfoot>
            <tr>
              <td className="p-3 text-left footer-text" colSpan="6">
                Showing 1 to 6 of 100 entries
              </td>
              {/* pagination functionality goes here*/}
            </tr>
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              handlePerPage={handlePerPage}
            />
          </tfoot>
        </table>
      </div>
      {clickedRow !== null && (
        <div className="clicked-row-div2">
          <EventActions />
          <button onClick={() => setClickedRow(null)}>
            <img
              src="/images/Vector.svg"
              className="relative bottom-[289px] left-[530px] w-[10px]"
              alt="cross"
            />
          </button>
        </div>
      )}
    </>
  );
}
