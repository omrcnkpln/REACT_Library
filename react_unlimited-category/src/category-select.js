import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function CategorySelect({ categories, selectedCategory, onCategoryChange }) {

    const [selected, setSelected] = useState([]);
    const [parents, setParents] = useState([]);
    const [parent, setParent] = useState(0);
    const filteredCategories = parent => categories.filter(category => category.parent === parent);
    const getFilteredCategories = filteredCategories(parent);
    const ref = useRef();
    useEffect(() => {
        ref.current.scrollTo({
            left: ref.current.scrollWidth,
            behavior: 'smooth'
        });
        // ref.current.scrollLeft += ref.current.scrollWidth;
    }, [selected])

    return (
        <div className="flex gap-x-4 overflow-x-auto mt-4" ref={ref}>
            {parents.length > 0 && parents.map((parent, key) => {
                const categories = filteredCategories(parent);
                return (
                    <div className="w-[400px] border divide-y border-gray-300 rounded p-4 flex-shrink-0">
                        {categories.map(c => {
                            <button
                                onClick={() => {
                                    setParent(c.id);
                                    setSelected([...selected.slice(0, key), c.id]);
                                    setParents([...parents.slice(0, key), c.parent]);
                                }}
                                className={`h-7 px-3 rounded text-left hover:bg-gray-100 pt-2 mt-2 first:pt-0 text-sm ${selected.includes(c.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-100')}`}>
                                {c.name}
                            </button>
                        })}
                    </div>
                );
            })}
            {getFilteredCategories.length > 0 && (
                <div className="w-[400px] border divide-y border-gray-300 rounded p-4 flex-shrink-0">
                    {getFilteredCategories.map(c => (
                        <button
                            onClick={() => {
                                setParent(c.id);
                                setSelected([...selected, c.id]);
                                setParents([...parents, c.parent]);
                            }}
                            className='h-7 px-3 rounded text-left hover:bg-gray-100 pt-2 mt-2 first:pt-0 text-sm'>
                            {c.name}
                        </button>
                    ))}
                </div>
            ) || (
                    <div className="bg-green-500 text-white text-sm p-5">
                        Kategori secimi tamamlandı!
                        <button className='h-7 bg-white text-green-700 px-4 rounded-md whitespace-nowrap mt-4'>Devam Et</button>
                    </div>
                )}
        </div>
    )
};
