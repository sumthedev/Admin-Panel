import { Link, useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/users");
  };
  return (
    <div className="contact custom-shadow">
      <div>
        <h3 className="new-user">Add new user</h3>
        <Link to="/users">
          <img
            src="/images/Vector.svg"
            alt="vector"
            className=" relative 
          bottom-[1px] left-[478px] "
          ></img>
        </Link>
        <img
          className=" relative 
        top-[22px] p-[12px]"
          src="/images/Line-84.svg"
          alt="vector"
        ></img>
      </div>

      <form>
        <label>
          <span className="form-name">Name</span>
          <input
            className="form-input  border-gray-200 py-2 px-3"
            type="text"
            name="name"
            required
            placeholder="John Doe"
          />
        </label>
        <label>
          <span className="form-email">Email</span>
          <input
            className="form-input-email  border-gray-200 py-2 px-3"
            type="email"
            name="email"
            required
            placeholder="johndoe12@gmail.com"
          />
        </label>

        <div className="relative top-[290px] left-[23px]">
          <Link to="/users">
            <button className="button-form w-[208px] h-12 px-6 py-2 border-2 border-gray-300 rounded-md mx-2">
              Cancel
            </button>
          </Link>

          <button
            onClick={handleClick}
            className="button-form w-[208px] h-12 px-6 py-2 border-2 border-gray-300 rounded-md mx-2"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

// export const contactAction = async ({ request }) => {
//   const data = await request.formData();

//   // const submission = {
//   //   name: data.get("name"),
//   //   email: data.get("email"),
//   // };

//   return redirect("/users");
// };
