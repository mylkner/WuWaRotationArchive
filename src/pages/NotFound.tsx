const NotFound = () => {
    return (
        <div className="w-full h-[95vh] text-white flex flex-col items-center justify-center">
            <h1 className="mb-5 text-4xl font-bold">Oops!</h1>
            <p className="text-2xl">
                The character you are looking for could not be found.
            </p>
        </div>
    );
};

export default NotFound;
