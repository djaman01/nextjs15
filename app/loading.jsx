import { PulseLoader } from "react-spinners";

const loading = () => {
  return (
    <>
      <div className="my-20 flex items-center justify-center">
        <PulseLoader color="#FA7A35" size={40} />
      </div>
    </>
  );
};

export default loading;
