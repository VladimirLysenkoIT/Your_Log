import React from "react";
import M from 'materialize-css'

import "./style.scss";

export const TabsComponent = ({tabsArray}) => {
  const isTabsExists = typeof tabsArray !== 'undefined'

  React.useEffect(()=>{
    if(isTabsExists){
      initAutocomplete()
    }
  })


  const initAutocomplete = ()=>{
      const tabs = document.getElementById('tabs');
      const instance = M.Tabs.init(tabs);
   }

  if(!isTabsExists){
    return false
  }
  return (
    <div className="tabsComponent">
        <div className="tabButtons">
          <ul id="tabs" className="tabs">
            {tabsArray.map((tab, index)=>{
              return (<li key={index} className={`tab ${tab.tabButtonClassName}`}><a href={`#${tab.uniqName}`}>{tab.tabTitle}</a></li>)
            })}
          </ul>
        </div>
        {tabsArray.map((tab, index)=>{
          return (
            <div key={index} id={tab.uniqName} className={`col s12 ${tab.tabContentClasName} `}>
             {tab.components}
            </div>
          )
        })}
    </div>
  )
}
