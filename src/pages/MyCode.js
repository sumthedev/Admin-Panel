// import React from "react";

// export default function Users() {
//   const handleClick = (e) => {
//     e.preventDefault();
//     alert("Im click");
//   };
//   return (
//     <>
//       <div className="data-table custom-shadow">
//         <div className="  border-b border-gray-200 border-solid border-1">
//           <span className=" p-[1rem] text-[24px] text-semibold text-left text-gray-700">
//             Users
//           </span>
//           <div
//             className="w-[129.92px] h-[29.86px] text-white text-center relative
//           bottom-[25.68px] left-[941.72px] pt-1 pb-7 bg-teal-400 rounded-[4.48px]  "
//           >
//             <button onClick={handleClick}>+ Add User</button>
//           </div>
//         </div>
//         <div>
//           <span
//             className="p-[1rem] w-[33px] h-[19px] relative top-[20px]
//             font-inter text-13 font-normal leading-19
//            tracking-normal text-left text-gray-600"
//           >
//             Show
//           </span>
//           <button
//             onClick={handleClick}
//             className="w-[130px] h-[26px] relative top-[29px]
//           left-[25px]"
//           >
//             <img src="/images/input.svg" alt="input"></img>
//           </button>
//           <div className="search-bar2">
//             <span>
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
//                   stroke="#AEB6CF"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M22 22L20 20"
//                   stroke="#AEB6CF"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </span>
//             <input type="text" placeholder="Search" />
//           </div>
//         </div>
//         <table className="w-full border-collapse ">
//           <thead className=" table-header ">
//             <tr>
//               <th className=" p-3 text-center">NAME</th>
//               <th className="p-3 text-center">
//                 <button
//                   className="  w-[6.74px] h-[10.74px] relative top-[2.16px]
//                 right-[26.03px]"
//                 >
//                   <img src="/images/chevron-up.svg" alt="input"></img>
//                   <img src="/images/chevron-down.svg" alt="input"></img>
//                 </button>
//                 EMAIL
//               </th>
//               <th className="p-3 text-center">
//                 <button
//                   className="w-[6.74px] h-[10.74px] relative top-[2.16px]
//                 right-[26.03px]"
//                 >
//                   <img src="/images/chevron-up.svg" alt="input"></img>
//                   <img src="/images/chevron-down.svg" alt="input"></img>
//                 </button>
//                 PHONE NUMBER
//               </th>
//               <th className="p-3 text-center">
//                 <button
//                   className="w-[6.74px] h-[10.74px] relative top-[2.16px]
//                 right-[26.03px]"
//                 >
//                   <img src="/images/chevron-up.svg" alt="input"></img>
//                   <img src="/images/chevron-down.svg" alt="input"></img>
//                 </button>
//                 EVENTS
//               </th>
//               <th className="p-3 text-center">
//                 <button
//                   className="w-[6.74px] h-[10.74px] relative top-[2.16px]
//                 right-[26.03px]"
//                 >
//                   <img src="/images/chevron-up.svg" alt="input"></img>
//                   <img src="/images/chevron-down.svg" alt="input"></img>
//                 </button>
//                 FRIENDS
//               </th>
//               <th className="p-3 text-center">
//                 <button
//                   className="w-[6.74px] h-[10.74px] relative top-[2.16px]
//                 right-[26.03px]"
//                 >
//                   <img src="/images/chevron-up.svg" alt="input"></img>
//                   <img src="/images/chevron-down.svg" alt="input"></img>
//                 </button>
//                 ACTIONS
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Add table rows here */}
//             <tr>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <div className="flex items-center">
//                   <img
//                     src="/images/Avatar.png"
//                     alt="Avatar"
//                     className="rounded-full w-8 h-8 mr-4 ml-10"
//                   />
//                   <span className="data-table-text"> John David</span>
//                 </div>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-email">joedavid@gmail.com</span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> +92-3334567 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> 12 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> 5000 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <button>
//                   <img src="/images/shape.svg" alt="actions"></img>
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <div className="flex items-center">
//                   <img
//                     src="/images/Avatar.png"
//                     alt="Avatar"
//                     className="rounded-full w-8 h-8 mr-4 ml-10"
//                   />
//                   <span className="data-table-text"> John David</span>
//                 </div>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-email">joedavid@gmail.com</span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> +92-3334567 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> 12 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> 5000 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <button>
//                   <img src="/images/shape.svg" alt="actions"></img>
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <div className="flex items-center">
//                   <img
//                     src="/images/Avatar-rec.png"
//                     alt="Avatar"
//                     className=" w-8 h-8 mr-4 ml-10"
//                   />
//                   <span className="data-table-text"> John David</span>
//                 </div>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-email">joedavid@gmail.com</span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> +92-3334567 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> 12 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> 5000 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <button>
//                   <img src="/images/shape.svg" alt="actions"></img>
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <div className="flex items-center">
//                   <img
//                     src="/images/Avatar.png"
//                     alt="Avatar"
//                     className="rounded-full w-8 h-8 mr-4 ml-10"
//                   />
//                   <span className="data-table-text"> John David</span>
//                 </div>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-email">joedavid@gmail.com</span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> +92-3334567 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> 12 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> 5000 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <button>
//                   <img src="/images/shape.svg" alt="actions"></img>
//                 </button>
//               </td>
//             </tr>

//             <tr>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <div className="flex items-center">
//                   <img
//                     src="/images/Avatar-rec.png"
//                     alt="Avatar"
//                     className=" w-8 h-8 mr-4 ml-10"
//                   />
//                   <span className="data-table-text"> John David</span>
//                 </div>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-email">joedavid@gmail.com</span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> +92-3334567 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> 12 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> 5000 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <button>
//                   <img src="/images/shape.svg" alt="actions"></img>
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <div className="flex items-center">
//                   <img
//                     src="/images/Avatar.png"
//                     alt="Avatar"
//                     className="rounded-full w-8 h-8 mr-4 ml-10"
//                   />
//                   <span className="data-table-text"> John David</span>
//                 </div>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-email">joedavid@gmail.com</span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> +92-3334567 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> 12 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <span className="data-table-no"> 5000 </span>
//               </td>
//               <td className="p-3 border-b border-gray-300 text-center">
//                 <button>
//                   <img src="/images/shape.svg" alt="actions"></img>
//                 </button>
//               </td>
//             </tr>

//             {/* Add more rows as needed */}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td className="p-3 text-left footer-text" colSpan="6">
//                 Showing 1 to 7 of 100 entries
//               </td>
//               <td className="p-3 text-right " colSpan="6">
//                 {/* Pagination controls can go here */}
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
//     </>
//   );
// }
