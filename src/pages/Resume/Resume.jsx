import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Haldia Institute of Technology"
            date="2022 — 2024"
            description="Master Of Computer Application"
          />
          <TimelineItem
            title="Global Institute Of Sciece & Technology"
            date="2019 — 2022"
            description="Bachelor of Computer Application"
          />
          <TimelineItem
            title="10 + 2"
            date="2002 — 2019"
            description="Poura Pathabhaban"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Full Stack Developer"
            date="Sep 2023 — Present"
            description="Logicro Software Solutions"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Html/Css" value={80} />
          <SkillItem title="Javascript/Typescript" value={70} />
          <SkillItem title="React" value={90} />
          <SkillItem title="Nodejs" value={90} />
          <SkillItem title="Nextjs" value={90} />
          <SkillItem title="Mongodb" value={90} />
          <SkillItem title="Mysql" value={90} />
          <SkillItem title="Firebase" value={90} />
          <SkillItem title="WordPress" value={80} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
