import eye from "../assets/eye.png";
import arrow from "../assets/right-arrow.png";

function AssessmentTable({ popupSetter }) {
  return (
    <div>
      <h2 className="flex justify-between sm:w-[100%] sm:mb-10 lg:w-[40%] xl:w-[30%] 2xl:w-[28%] pb-1 mb-[1rem] font-[800] text-[1.6rem] border-b-2 border-b-[#3C0071] border-dashed">
        <span>
          <span className="text-[#3C0071]"># </span>Assessment List
        </span>
        <button className="text-right px-4" onClick={() => popupSetter(true)}>
          <span className="font-medium">+ </span>
          <span className="font-medium text-lg">Add New</span>
        </button>
      </h2>
      {/**  Search */}
      <div className="sm:hidden w-full flex justify-end">
        <input
          className="sm:w-[16rem] w-[20rem] ps-4 text-[#3C0071] sm:text-sm text-lg bg-transparent border-b-2 border-b-[#3C0071] outline-none"
          placeholder="Enter Your Search Term..."
        />
        <button className="border-2 border-black rounded-t-xl px-10 p-1 me-[4%]">
          Search
        </button>
      </div>

      {/**  Tabel */}
      <div className="flex justify-center p-4 mt-10">
        <table className="table-fixed w-full">
          <thead className="border-b-[.5px] border-b-[#3C0071a0] border-dashed">
            <tr>
              <th className="w-[20rem] text-start py-3 sm:w-[20rem]">
                Test Name
              </th>
              <th className="w-[16%] text-start py-3 invisible sm:visible sm:w-[8rem]">
                Start Date
              </th>
              <th className="w-[16%] text-start py-3 invisible sm:visible sm:w-[8rem]">
                End Date
              </th>
              <th className="w-[15%] text-start py-3 invisible lg:visible">
                Start Time
              </th>
              <th className="w-[15%] text-start py-3 invisible lg:visible">
                End Time
              </th>
              <th className="w-[3rem]"></th>
            </tr>
          </thead>
          <tbody>
            <Tr />
            <Tr />
            <Tr />
            <Tr />
            <Tr />
            <Tr />
            <Tr />
            <Tr />
            <Tr />
            <Tr />
            <Tr />
          </tbody>
        </table>
      </div>

      {/**  Pagination */}
      <div className="w-full mt-4">
        <div className="mx-auto w-[22rem] flex justify-center rounded-lg">
          <div className="w-[10rem] flex px-8 text-xl  bg-[#f9e1de] hover:bg-[#e1a29b] hover:cursor-pointer rounded-s-lg">
            <img
              className="m-4"
              src={arrow}
              style={{ rotate: "180deg" }}
              alt="right"
              width="30"
            />
            <button>Prev</button>
          </div>
          <div className="w-[10rem] flex px-8 text-xl bg-[#f9e1de] hover:bg-[#e1a29b] hover:cursor-pointer rounded-e-lg">
            <button>Next</button>
            <img className="m-4" src={arrow} alt="right" width="30" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssessmentTable;

function Tr() {
  return (
    <tr className="border-b-[.5px] border-b-[#3c0071a0] border-dashed">
      <td className="text-start py-3">NareshItNewtest-D54A83CC</td>
      <td className="text-start invisible sm:visible">24-12-2020</td>
      <td className="text-start invisible sm:visible">26-12-2020</td>
      <td className="text-start invisible lg:visible">07:60 AM</td>
      <td className="text-start invisible lg:visible">10:60 AM</td>
      <td className="text-start sm:text-center">
        <button>
          <img width="22" height="26" src={eye} alt="view" />
        </button>
      </td>
    </tr>
  );
}
