import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import { motion } from "framer-motion";
import _debounce from "lodash/debounce";
import "./Header.css";

let tabs = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleSetActive = (to) => {
    setActiveTab(to);
  };

  // Attach the scroll event listener to update the active tab
  useEffect(() => {
    const handleScroll = _debounce((to) => {
      handleSetActive(to);
    }, 650); // Adjust the debounce delay as needed

    Events.scrollEvent.register("begin", (to, element) => {
      handleScroll(to);
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  return (
    <div className="header-container">
      <div className="header-links">
        {tabs.map((tab) => (
          <ScrollLink
            key={tab.id}
            to={tab.id}
            spy={true}
            smooth={true}
            offset={-150}
            duration={1200}
            activeClass="active"
            onSetActive={handleSetActive}
            className={`tab-button ${
              activeTab === tab.id ? "active" : "hover"
            }`}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="bubble"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </ScrollLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
