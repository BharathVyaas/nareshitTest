import { useEffect, useState } from "react";
import AssessmentTable from "./components/AssessmentTable";
import Modal from "./ui/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsStart } from "./store/posts.slice";

function App() {
  const [createAssessmentModal, setCreateAssessmentModal] = useState();

  const dispatcher = useDispatch();
  const posts = useSelector((state) => state.posts); // Adjusted selector to access the posts slice

  useEffect(() => {
    dispatcher(fetchPostsStart());
  }, [dispatcher]);

  useEffect(() => {
    console.log(posts); // Logging posts instead of postsSlice
  }, [posts]);

  console.log(createAssessmentModal);

  return (
    <main className="App p-4 bg-[#f9e1de] min-h-[100vh] w-full">
      {createAssessmentModal && <Modal setter={setCreateAssessmentModal} />}
      <AssessmentTable popupSetter={setCreateAssessmentModal} />
    </main>
  );
}

export default App;
