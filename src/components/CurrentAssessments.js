import JavaIcon from "../assets/technologies/java.png";
import PythonIcon from "../assets/technologies/python.png";

function CurrentAssessments() {
  return (
    <section className="mb-20">
      {/**  Header */}
      <h2 className="w-[24%] pb-1 mb-[1rem] font-[800] text-[1.6rem] border-b-2 border-b-[#3C0071] border-dashed">
        <span className="text-[#3C0071]"># </span>Current Assessments
      </h2>

      <div className="grid grid-cols-3 justify-center mt-20 gap-y-20">
        {/**    Card */}
        <section className="text-[#B76D68] border-2 border-[#E59D95] rounded shadow-xl w-[26rem] flex mx-auto">
          <article className="flex flex-col text-end border-r-2 w-[16rem] p-4 border-[#E59D95]">
            <p className="flex justify-end">
              <img src={JavaIcon} alt="language" width="18" className="me-2" />
              Java
            </p>
            <h3 className="py-1 w-[14rem] line-clamp-1">
              NareshItNewtest-D54A83CC
            </h3>
            <b className="text-sm py-2">
              <span className="text-black opacity-70">By</span>{" "}
              <span className="font-semibold text-[#B17368]">Bharath</span>
            </b>
          </article>
          <aside className="grid grid-rows-3 p-4 pr-0 w-[7rem]">
            <time className="w-[6rem]">20-06-2023</time>
            <span className="text-center text-black opacity-70">|</span>
            <time className="w-[6rem]">20-06-2023</time>
          </aside>
        </section>

        <section className="text-[#B76D68] border-2 border-[#E59D95] rounded shadow-xl w-[26rem] flex mx-auto">
          <article className="flex flex-col text-end border-r-2 w-[16rem] p-4 border-[#E59D95]">
            <p className="flex justify-end">
              <img
                src={PythonIcon}
                alt="language"
                width="18"
                className="me-2"
              />
              Python
            </p>
            <h3 className="py-2 w-[14rem] line-clamp-1">
              NareshItNewtest-D54A83CC
            </h3>
            <b className="text-sm py-2">
              <span className="text-black opacity-70">By</span>{" "}
              <span className="font-semibold text-[#B17368]">Bharath</span>
            </b>
          </article>
          <aside className="grid grid-rows-3 p-4 pr-0 w-[7rem]">
            <time className="w-[6rem]">20-06-2023</time>
            <span className="text-center text-black opacity-70">|</span>
            <time className="w-[6rem]">20-06-2023</time>
          </aside>
        </section>

        <section className="text-[#B76D68] border-2 border-[#E59D95] rounded shadow-xl w-[26rem] flex mx-auto">
          <article className="flex flex-col text-end border-r-2 w-[16rem] p-4 border-[#E59D95]">
            <p className="flex justify-end">
              <img
                src={PythonIcon}
                alt="language"
                width="18"
                className="me-2"
              />
              Python
            </p>
            <h3 className="py-2 w-[14rem] line-clamp-1">
              NareshItNewtest-D54A83CC
            </h3>
            <b className="text-sm py-2">
              <span className="text-black opacity-70">By</span>{" "}
              <span className="font-semibold text-[#B17368]">Bharath</span>
            </b>
          </article>
          <aside className="grid grid-rows-3 p-4 pr-0 w-[7rem]">
            <time className="w-[6rem]">20-06-2023</time>
            <span className="text-center text-black opacity-70">|</span>
            <time className="w-[6rem]">20-06-2023</time>
          </aside>
        </section>

        <section className="text-[#B76D68] border-2 border-[#E59D95] rounded shadow-xl w-[26rem] flex mx-auto">
          <article className="flex flex-col text-end border-r-2 w-[16rem] p-4 border-[#E59D95]">
            <p className="flex justify-end">
              <img src={JavaIcon} alt="language" width="18" className="me-2" />
              Java
            </p>
            <h3 className="py-2 w-[14rem] line-clamp-1">
              NareshItNewtest-D54A83CC
            </h3>
            <b className="text-sm py-2">
              <span className="text-black opacity-70">By</span>{" "}
              <span className="font-semibold text-[#B17368]">Bharath</span>
            </b>
          </article>
          <aside className="grid grid-rows-3 p-4 pr-0 w-[7rem]">
            <time className="w-[6rem]">20-06-2023</time>
            <span className="text-center text-black opacity-70">|</span>
            <time className="w-[6rem]">20-06-2023</time>
          </aside>
        </section>

        <section className="text-[#B76D68] border-2 border-[#E59D95] rounded shadow-xl w-[26rem] flex mx-auto">
          <article className="flex flex-col text-end border-r-2 w-[16rem] p-4 border-[#E59D95]">
            <p className="flex justify-end">
              <img
                src={PythonIcon}
                alt="language"
                width="18"
                className="me-2"
              />
              Python
            </p>
            <h3 className="py-2 w-[14rem] line-clamp-1">
              NareshItNewtest-D54A83CC
            </h3>
            <b className="text-sm py-2">
              <span className="text-black opacity-70">By</span>{" "}
              <span className="font-semibold text-[#B17368]">Bharath</span>
            </b>
          </article>
          <aside className="grid grid-rows-3 p-4 pr-0 w-[7rem]">
            <time className="w-[6rem]">20-06-2023</time>
            <span className="text-center text-black opacity-70">|</span>
            <time className="w-[6rem]">20-06-2023</time>
          </aside>
        </section>

        <section className="text-[#B76D68] border-2 border-[#E59D95] rounded shadow-xl w-[26rem] flex mx-auto">
          <article className="flex flex-col text-end border-r-2 w-[16rem] p-4 border-[#E59D95]">
            <p className="flex justify-end">
              <img src={JavaIcon} alt="language" width="18" className="me-2" />
              Java
            </p>
            <h3 className="py-2 w-[14rem] line-clamp-1">
              NareshItNewtest-D54A83CC
            </h3>
            <b className="text-sm py-2">
              <span className="text-black opacity-70">By</span>{" "}
              <span className="font-semibold">Bharath</span>
            </b>
          </article>
          <aside className="grid grid-rows-3 p-4 pr-0 w-[7rem]">
            <time className="w-[6rem]">20-06-2023</time>
            <span className="text-center text-black opacity-70">|</span>
            <time className="w-[6rem]">20-06-2023</time>
          </aside>
        </section>

        <section className="text-[#B76D68] border-2 border-[#E59D95] rounded shadow-xl w-[26rem] flex mx-auto">
          <article className="flex flex-col text-end border-r-2 w-[16rem] p-4 border-[#E59D95]">
            <p className="flex justify-end">
              <img src={JavaIcon} alt="language" width="18" className="me-2" />
              Java
            </p>
            <h3 className="py-2 w-[14rem] line-clamp-1">
              NareshItNewtest-D54A83CC
            </h3>
            <b className="text-sm py-2">
              <span className="text-black opacity-70">By</span>{" "}
              <span className="font-semibold">Bharath</span>
            </b>
          </article>
          <aside className="grid grid-rows-3 p-4 pr-0 w-[7rem]">
            <time className="w-[6rem]">20-06-2023</time>
            <span className="text-center text-black opacity-70">|</span>
            <time className="w-[6rem]">20-06-2023</time>
          </aside>
        </section>

        <section className="text-[#B76D68] border-2 border-[#E59D95] rounded shadow-xl w-[26rem] flex mx-auto">
          <article className="flex flex-col text-end border-r-2 w-[16rem] p-4 border-[#E59D95]">
            <p className="flex justify-end">
              <img
                src={PythonIcon}
                alt="language"
                width="18"
                className="me-2"
              />
              Python
            </p>
            <h3 className="py-2 w-[14rem] line-clamp-1">
              NareshItNewtest-D54A83CC
            </h3>
            <b className="text-sm py-2">
              <span className="text-black opacity-70">By</span>{" "}
              <span className="font-semibold text-[#B17368]">Bharath</span>
            </b>
          </article>
          <aside className="grid grid-rows-3 p-4 pr-0 w-[7rem]">
            <time className="w-[6rem]">20-06-2023</time>
            <span className="text-center text-black opacity-70">|</span>
            <time className="w-[6rem]">20-06-2023</time>
          </aside>
        </section>
      </div>
    </section>
  );
}

export default CurrentAssessments;
