import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar({ tickers }) {
    const [searchInput, setSearchInput] = useState('');
    const [filteredTickers, setFilteredTickers] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchBarRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (searchInput) {
            const filtered = tickers.filter(ticker =>
                ticker.toLowerCase().startsWith(searchInput.toLowerCase())
            );
            setFilteredTickers(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    }, [searchInput, tickers]);

    useEffect(() => {
        const handleClickOutside = event => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputChange = event => {
        setSearchInput(event.target.value);
    };

    const handleSuggestionClick = ticker => {
        setSearchInput(ticker);
        setShowSuggestions(false);
        router.push(`/${ticker}`);
    };

    const handleKeyDown = event => {
        if (event.key === 'Enter' && searchInput) {
            router.push(`/${searchInput.toUpperCase()}`);
        }
    };

    return (
        <div ref={searchBarRef} className="flex justify-center items-center relative">
        <input
            type="text"
            value={searchInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter US Company Symbols..."
            className="rounded-md p-5 w-1/2 bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-xl"/>
        {showSuggestions && (
            <ul className="absolute top-16 w-1/2 bg-white text-black list-none p-0 m-0 max-h-40 overflow-y-auto border border-gray-300 z-50">
                {filteredTickers.map(ticker => (
                    <li key={ticker}
                        onClick={() => handleSuggestionClick(ticker)}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                        {ticker}
                    </li>))}
            </ul>)}
        </div>
    );
}