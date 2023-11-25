import { Hourglass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#4b49ac", "#72a1ed"]}
      />
    </div>
  );
};

export default Loader;
