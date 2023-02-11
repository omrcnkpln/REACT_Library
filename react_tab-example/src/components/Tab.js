import { useState, useEffect } from "react";

// setActiveTab
function Tab({ children, activeTab, onChange}) {
    const [active, setActive] = useState(activeTab);

    useEffect(() => {
        setActive(activeTab)
    }, [activeTab]);

    useEffect(() => {
        onChange(active)
    }, [active]);

    return (
        <>
            <nav>
                {children.map((tab, index) => (
                    <button
                        onClick={() => setActive(index)}
                        className={activeTab == index ? 'bg-green-100' : "bg-gray-100"}
                        key={index}
                    >
                        {tab.props.title}
                    </button>
                ))}
            </nav>

            {children[activeTab]}
        </>
    )
}

Tab.Panel = function ({ children, title }) {
    return (
        <>
            {children} {title}
        </>
    )
}
export default Tab;