
export default function SearchBar() {
    return (
        <div className="flex justify-center items-center">
            <input 
                type="text"
                placeholder="Enter US Company Symbols..."
                className="rounded-md p-5 w-1/2 bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-xl"/>
        </div>
    );
}