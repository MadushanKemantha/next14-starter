const Loading = () => {
  return (
    <>
      <div class="fixed inset-0 z-50 bg-white flex items-center justify-center">
        <div class="w-20 h-20 border-t-4 border-b-4 border-red-500 border-solid rounded-full animate-spin"></div>
      </div>
      <div class="container mx-auto px-6">
        {/* <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
          Loading
        </h2> */}
        {/* <p class="text-center text-black mb-8">
          Please wait while the data is being loaded.
        </p> */}
      </div>
    </>
  );
};

export default Loading;
