import './styles.scss';
import React, { ReactNode, useState } from 'react';

interface TabsList {
  name: string;
  id: number;
  content: ReactNode;
}
const tabs: TabsList[] = [
  {
    name: 'Tab1',
    id: 1,
    content: 'Tab1 content goes here',
  },
  {
    name: 'Tab2',
    id: 2,
    content: 'Tab2 content goes here',
  },
  {
    name: 'Tab3',
    id: 3,
    content: 'Tab3 content goes here',
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const onTabclick = (e: any, id: number) => {
    e.preventDefault();
    setActiveTab(id);
  };

  const BuildTab = () => {
    return tabs.map(({ id, name }) => (
      <li key={id} className={id === activeTab ? 'tab active' : 'tab'}>
        <button onClick={(e) => onTabclick(e, id)}>{name}</button>
      </li>
    ));
  };

  const GetTabContent = () => {
    const activeTabContetn = tabs.find(({ id }) => id === activeTab);
    return (
      <div className="tab-content">
        <p>{activeTabContetn?.content}</p>
      </div>
    );
  };
  return (
    <div className="tab-container">
      <ul className="tab-list">{BuildTab()}</ul>
      {GetTabContent()}
    </div>
  );
};

export default Tabs;
