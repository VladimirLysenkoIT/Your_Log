import React from "react";
import "../style.scss";
import { Link } from "react-router-dom";
import { MoreDetails } from "../../../../components/MoreDetails";

export const AddEmotionFast = () => {
  return (
    <div className="addEmotionFast">
        <div className="title">
            <span>Comment vous allez maintenant ?</span>
        </div>
        <div className="emotionCircles">
          <form action="">
            <label htmlFor="emotion1" className="circle circle1">
              <input type="radio" name="emotions" id="emotion1"/>
              <span className="lever">1</span>
            </label>
            <label htmlFor="emotion2" className="circle circle2">
              <input type="radio" name="emotions" id="emotion2"/>
              <span className="lever">2</span>
            </label>
            <label htmlFor="emotion3" className="circle circle3">
              <input type="radio" name="emotions" id="emotion3"/>
              <span className="lever">3</span>
            </label>
            <label htmlFor="emotion4" className="circle circle4">
              <input type="radio" name="emotions" id="emotion4"/>
              <span className="lever">4</span>
            </label>
            <label htmlFor="emotion5" className="circle circle5">
              <input type="radio" name="emotions" id="emotion5"/>
              <span className="lever">5</span>
            </label>
            <label htmlFor="emotion6" className="circle circle6">
              <input type="radio" name="emotions" id="emotion6"/>
              <span className="lever">6</span>
            </label>
            <label htmlFor="emotion7" className="circle circle7">
              <input type="radio" name="emotions" id="emotion7"/>
              <span className="lever">7</span>
            </label>
            <label htmlFor="emotion8" className="circle circle8">
              <input type="radio" name="emotions" id="emotion8"/>
              <span className="lever">8</span>
            </label>
            <label htmlFor="emotion9" className="circle circle9">
              <input type="radio" name="emotions" id="emotion9"/>
              <span className="lever">9</span>
            </label>






            {/* <div className="circleWrapper">
              <label for="emotion1" for="emotion1" className="circle circle1">
                <input id="emotion1" type="radio" name="emotionstate" />
                <span className="lever">1</span>
              </label>
            </div>
            <div className="circleWrapper">
              <label for="emotion2" className="circle circle2">
                <input id="emotion2" type="radio" name="emotionstate" />
                <span className="lever">2</span>
              </label>
            </div>
            <div className="circleWrapper">
              <label for="emotion3" className="circle circle3">
                <input id="emotion3" type="radio" name="emotionstate" />
                <span className="lever">3</span>
              </label>
            </div>
            <div className="circleWrapper">
              <label for="emotion4" className="circle circle4">
                <input id="emotion4" type="radio" name="emotionstate" />
                <span className="lever">4</span>
              </label>
            </div>
            <div className="circleWrapper">
              <label for="emotion5" className="circle circle5">
              <input id="emotion5" type="radio" name="emotionstate" />
              <span className="lever">5</span>
            </label>
            </div>
            <div className="circleWrapper">
              <label for="emotion6" className="circle circle6">
                <input id="emotion6" type="radio" name="emotionstate" />
                <span className="lever">6</span>
              </label>
            </div>
            <div className="circleWrapper">
              <label for="emotion7" className="circle circle7">
                <input id="emotion7" type="radio" name="emotionstate" />
                <span className="lever">7</span>
              </label>
            </div>
            <div className="circleWrapper">
              <label for="emotion8" className="circle circle8">
                <input id="emotion8" type="radio" name="emotionstate" />
                <span className="lever">8</span>
              </label>
            </div>
            <div className="circleWrapper">
              <label for="emotion9" className="circle circle9">
                <input id="emotion9" type="radio" name="emotionstate" />
                <span className="lever">9</span>
              </label>
            </div> */}
          </form>
          </div>
          <div className="emotionDescription">
            <div className="emotionDescTerrible">
              <i className="material-icons">arrow_upward</i>
              {/* <i class="material-icons">expand_less</i> */}

              <span>Terrible</span>
            </div>
            {/*
              
              arrow_upward
              expand_less
              keyboard_arrow_up
            
            */}
            <div className="emotionDescOk">
              <i className="material-icons">arrow_upward</i>
              {/* <i class="material-icons">expand_less</i> */}
              <span>ça va</span>
            </div>
            <div className="emotionDescPerfect">
              <i className="material-icons">arrow_upward</i>
              {/* <i class="material-icons">keyboard_arrow_up</i> */}
              <span>Parfait</span>
            </div>
        </div>
        <div className="buttonsBox">
          <Link to="/health/addfood/newProduct" className="center-align waves-effect waves-light btn">
            Noter pourquoi
          </Link>

          <Link to="/health/addfood/newProduct" className="center-align waves-effect waves-light btn">
            Enregistrer
          </Link>

          <MoreDetails title={'Regarder les details'} />

        </div>
    </div>
  );
};
