import "./style.css";
import SkillCard from "./SkillCard";
import skillsData from "./skills.json";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(skillsData[activeTab]);
  }, [activeTab]);

  const tabs = ["Frontend", "Backend", "Database", "Other"];

  return (
    <section className="skills" id="skills">
      <h2 className="title">My Skills</h2>
      <div className="semiTitleContainer">
        <p className="semiTitleBgWhite">A Skill Showcase</p>
      </div>
      
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tabButton ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="skillContainer max-width">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="skillItems"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filteredData.length > 0 &&
              filteredData.map((skill, index) => <SkillCard key={index} skill={skill} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;
