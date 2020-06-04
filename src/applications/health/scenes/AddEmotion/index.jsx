import React from "react";
import M from 'materialize-css';

import "./style.scss";
import { BodyContentBox } from "../../components/BodyContentBox";
import { BackButton } from "../../../components/BackButton";
import { EmotionCirclesWithDescription } from "../../../components/EmotionCirclesWithDescription/Index.jsx";
import { HeaderTitleAndBackButton } from "../../components/HeaderTitleAndBackButton";

export const AddEmotion = () => {
  React.useEffect(()=>{
    initCollapsible();
  }, [])

  const initCollapsible =  ()=>{
    const collapsibleElement = document.getElementById('collapsible');
    const instances = M.Collapsible.init(collapsibleElement)
  }

  return (
    <BodyContentBox customClass={"addEmotion"}>
      <div className="header">
        <HeaderTitleAndBackButton title={'Describe your state of mind'} />
        <h3>Describe what you feel now. Why you feel it and what do you think you can do about it.</h3>
      </div>
      <div className="body">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s7">
                <label htmlFor=""> With what title you want to store this emotion ?</label>
                <input  id="" type="text" className="validate" />
              </div>
              <div className="emotionCirclesWrapper col s5">
                <p>Write a title that will help you to remember what it was this day. Name it lake
                "euphoria when i anderstood what to deal with ... .", "2nd week of morning running ...", "work finded". </p>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s5">
              <p>What do you feel ? What is this emotion ? Are you angry, calm or happy ?</p>
              </div>
              <div className="input-field col  s1">
                <i className="material-icons">arrow_forward</i>
              </div>
              <div className="input-field col s5">
                
                <EmotionCirclesWithDescription />
              </div>
            </div>
            <div className="row">
              <div className="input-field col  s5">
              <p>how are you feeling ? are you fine ? How would you assess your state? </p>
              </div>
              <div className="input-field col  s1">
                <i className="material-icons">arrow_forward</i>
              </div>
              <div className="input-field col 1 s5">
              <EmotionCirclesWithDescription />
              </div>
            </div>
            <div className="row">
              <div className="input-field col push-s1 s4">
                <p>How strong is this emotion ? Has it completely captured you, or are you rather calm ?</p>
              </div>
              <div className="input-field col push-s1 s1">
                <i className="material-icons">arrow_forward</i>
              </div>
              <div className="input-field col push-s1 s5">
                <EmotionCirclesWithDescription />
              </div>
            </div>
            <div className="row">
              <div className="input-field col push-s1 s4">
                <p>
                  It can be helpful when you track regularly your emotions. For example you want to find the best time for slipping,
                  you change it often and you write your feels. Each time when you add an emotion related with slipping you add "slipping"
                  tag and after you can easily find all emotions by this tag and see all emotions related to this tag on a graph. 
                </p>
              </div>
              <div className="input-field col push-s1 s1">
                <i className="material-icons">arrow_forward</i>
              </div>
              <div className="input-field col push-s1 s5">
                <p>Add tags related for this emotion.</p>
                <textarea name="" id="" cols="30" rows="20"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 center">
                <p>
                  Is it related with something already stored in "YourLog" ?
                </p>
              </div>
              <div className="input-field col s12 center isRelatedWrapper">
                <div className="labelsWrapper">
                  <label>
                    <input name="group1" type="radio" onChange={()=>{}} />
                    <span>Yes</span>
                  </label>
                  <label>
                    <input name="group1" type="radio" onChange={()=>{}} checked />
                    <span>No</span>
                  </label>
                </div>
                <div className="arrowsWrapper" >
                  <i className="material-icons">arrow_downward</i>
                  <i className="material-icons">arrow_downward</i>
                  <i className="material-icons">arrow_downward</i>
                </div>
              </div>

              <div className="col push-s3 s9">
                <div className="eventsListWrapper">
                  <ul id="collapsible" className="collapsible">
                    <li className="applicationPart">
                      <div className="collapsible-header">
                        <label htmlFor="eventListItem_health">
                          Health 
                          <input type="checkbox" name="eventsList" id="eventListItem_health"/>
                          <i className="material-icons">keyboard_arrow_down</i>
                        </label>
                      </div>
                      <div className="collapsible-body">
                        <ul className="eventsList">
                          <li>Event 1</li>
                          <li>Event 2</li>
                          <li>Event 3</li>
                          <li>Event 4</li>
                          <li>Event 5</li>
                        </ul>
                      </div>
                    </li>
                    <li className="applicationPart">
                    <div className="collapsible-header">
                      <label htmlFor="eventListItem_todo">
                        ToDo 
                        <input type="checkbox" name="eventsList" id="eventListItem_todo"/>
                        <i className="material-icons">keyboard_arrow_down</i>
                      </label>
                    </div>
                    <div className="collapsible-body">
                      <ul className="eventsList">
                        <li>Event 1</li>
                        <li>Event 2</li>
                        <li>Event 3</li>
                        <li>Event 4</li>
                        <li>Event 5</li>
                      </ul>
                    </div>
                    </li>
                    <li className="applicationPart">
                      <div className="collapsible-header">
                        <label htmlFor="eventListItem_finances">
                          Finances
                          <input type="checkbox" name="eventsList" id="eventListItem_finances"/>
                          <i className="material-icons">keyboard_arrow_down</i>
                        </label>
                      </div>
                      <div className="collapsible-body">
                        <ul className="eventsList">
                          <li>Event 1</li>
                          <li>Event 2</li>
                          <li>Event 3</li>
                          <li>Event 4</li>
                          <li>Event 5</li>
                        </ul>
                      </div>
                    </li>
                    <li className="applicationPart">
                    <div className="collapsible-header">
                      <label htmlFor="eventListItem_trainings">
                        Trainings
                        <input type="checkbox" name="eventsList" id="eventListItem_trainings"/>
                        <i className="material-icons">keyboard_arrow_down</i>
                      </label>
                    </div>
                    <div className="collapsible-body">
                      <ul className="eventsList">
                        <li>Event 1</li>
                        <li>Event 2</li>
                        <li>Event 3</li>
                        <li>Event 4</li>
                        <li>Event 5</li>
                      </ul>
                    </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <p>Finally add several lines of description.</p>
                <textarea name="" id="" cols="30" rows="20"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <div className="saveButtonWrapper">
                 <button class="waves-effect waves-light btn">Save</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </BodyContentBox>
  );
};