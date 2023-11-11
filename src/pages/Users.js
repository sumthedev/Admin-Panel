import { useState } from "react";
import Actions from "../components/Actions";
import { data } from "../data/mockUpData";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

let itemsPerPage = 6;

export default function Users() {
  const [currentPage, setCurrentPage] = useState(0);
  const [clickedRow, setClickedRow] = useState(null);

  const rows = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePerPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleActions = (rowIndex) => {
    setClickedRow(rowIndex);
  };

  const handleClick = () => {
    console.log("Please ask sumbal to add the functionality");
  };

  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <div className="data-table  custom-shadow">
        <div className="border-b border-gray-200 mb-[20px] border-solid border-1">
          <span className="p-[3rem] text-[24px] mt-[20px] text-semibold text-left text-gray-700">
            Users
          </span>
          <div
            className="w-[129.92px] h-[29.86px] text-white text-center relative
            bottom-[25.68px] left-[941.72px] pt-1 pb-7 bg-teal-400 rounded-[4.48px]"
          >
            <button>
              <Link to="/form">+ Add User</Link>
            </button>
          </div>
        </div>
        <div>
          <span
            className="p-[1rem] w-[33px] h-[19px] relative top-[20px] left-4
            font-inter text-13 font-normal leading-19
            tracking-normal text-left text-gray-600"
          >
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
          <thead className="table-header">
            <tr>
              <th className="p-3 text-center w-1/6">NAME</th>
              <th className="p-3 text-center w-1/6">
                <button className="w-[6.74px] h-[10.74px] relative top-[2.16px] right-[26.03px]">
                  <img src="/images/chevron-up.svg" alt="input"></img>
                  <img src="/images/chevron-down.svg" alt="input"></img>
                </button>
                EMAIL
              </th>
              <th className="p-3 text-center w-1/6">
                <button className="w-[6.74px] h-[10.74px] relative top-[2.16px] right-[26.03px]">
                  <img src="/images/chevron-up.svg" alt="input"></img>
                  <img src="/images/chevron-down.svg" alt="input"></img>
                </button>
                PHONE NUMBER
              </th>
              <th className="p-3 text-center w-1/6">
                <button className="w-[6.74px] h-[10.74px] relative top-[2.16px] right-[26.03px]">
                  <img src="/images/chevron-up.svg" alt="input"></img>
                  <img src="/images/chevron-down.svg" alt="input"></img>
                </button>
                EVENTS
              </th>
              <th className="p-3 text-center w-1/6">
                <button className="w-[6.74px] h-[10.74px] relative top-[2.16px] right-[26.03px]">
                  <img src="/images/chevron-up.svg" alt="input"></img>
                  <img src="/images/chevron-down.svg" alt="input"></img>
                </button>
                FRIENDS
              </th>
              <th className="p-3 text-center w-1/6">
                <button className="w-[6.74px] h-[10.74px] relative top-[2.16px] right-[26.03px]">
                  <img src="/images/chevron-up.svg" alt="input"></img>
                  <img src="/images/chevron-down.svg" alt="input"></img>
                </button>
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, index) => (
              <tr key={index}>
                <td className="p-3 border-b border-gray-300 text-center">
                  <div className="flex items-center">
                    <img
                      src="/images/Avatar.png"
                      alt="Avatar"
                      className="rounded-full w-8 h-8 mr-4 ml-10"
                    />
                    <span className="data-table-text"> {item.name} </span>
                  </div>
                </td>
                <td className="p-3 border-b border-gray-300 text-center">
                  <span className="data-table-email">{item.email}</span>
                </td>
                <td className="p-3 border-b border-gray-300 text-center">
                  <span className="data-table-no"> {item.phoneNumber} </span>
                </td>
                <td className="p-3 border-b border-gray-300 text-center">
                  <span className="data-table-no"> {item.events} </span>
                </td>
                <td className="p-3 border-b border-gray-300 text-center">
                  <span className="data-table-no"> {item.friends} </span>
                </td>
                <td className="p-3 border-b border-gray-300 text-center">
                  <button onClick={() => handleActions(index)}>
                    <img src="/images/shape.svg" alt="actions" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="p-3 text-left footer-text" colSpan="6">
                Showing {currentPage * itemsPerPage + 1} to{" "}
                {Math.min((currentPage + 1) * itemsPerPage, data.length)} of{" "}
                {data.length} entries
              </td>
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
        <div className="clicked-row-div">
          <Actions />
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
