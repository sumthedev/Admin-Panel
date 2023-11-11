import { Link } from "react-router-dom";

const handleDel = () => {
  alert("We add the functionality soon");
};
function EventActions() {
  return (
    <>
      <div
        className="w-[159px] [h-196px] relative bottom-[250px] 
        left-[569px] flex flex-col p-[1rem]
      rounded-4 gap-5 custom-shadow"
      >
        <Link to="/events-edit">
          <button className="  absolute bottom-[80px] ">
            <img src="/images/view.svg" alt="edit"></img>
          </button>
        </Link>

        <Link to="/events-views">
          <button className="ml-[5px] ">
            <img src="/images/edit.svg" alt="edit"></img>
          </button>
        </Link>
        <button className="ml-[5px] " onClick={handleDel}>
          <img src="/images/delete.svg" alt="del"></img>
        </button>
      </div>
    </>
  );
}

export default EventActions;
