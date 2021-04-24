import React, { useState, useEffect } from 'react';
import './QuestionGrid.css';
import ScoreTable from './ScoreTable';
export default function QuestionGrid({ isLoaded, items }) {
  const [no, setNo] = useState(1);
  const [check, setCheck] = useState('');
  const [score, setScore] = useState([]);
  const [alert, setAlert] = useState(true);

  if (items.length > 0 && score.length < items.length) {
    setTimeout(() => {
      var ul = document.querySelector('.btn-group-lg');
      for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[(Math.random() * i) | 0]);
      }
    }, 1);
  }
  const handleChange = (e) => {
    setCheck(true);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1000);
    setScore((oldArray) => [...oldArray, check]);
    setNo(no + 1);

    e.preventDefault();
  };
  const handleControl = (e) => {
    setCheck(false);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1000);

    setNo(no + 1);
    setScore((oldArray) => [...oldArray, check]);

    e.preventDefault();
  };

  return items.length > 0 && score.length < items.length ? (
    <section className="text-center m-5 question border border-primary">
      <header className="header">
        {check === true && alert ? (
          <div className="alert alert-success" role="alert">
            You knew it 🦾
          </div>
        ) : check === false && alert ? (
          <div className="alert alert-warning" role="alert">
            You didnt know it 😥
          </div>
        ) : (
          ''
        )}
      </header>
      <h2 className="m-4 ">
        {no}) {items[no - 1].question.replace(/([^\w\s]+[a-z0-9]+)|(;)/gi, '')}
      </h2>

      <div className="row mt-5">
        <div className="col-md-12">
          <div className="btn-group btn-group-lg d-flex flex-wrap">
            <button
              type="button"
              className="btn btn-primary shadow m-3"
              onClick={handleControl}
            >
              {items[no - 1].incorrect_answers[0]}
            </button>
            <button
              type="button"
              className="btn btn-primary shadow m-3"
              onClick={handleControl}
            >
              {items[no - 1].incorrect_answers[1]}
            </button>
            <button
              type="button"
              className="btn btn-primary shadow m-3"
              onClick={handleControl}
            >
              {items[no - 1].incorrect_answers[2]}
            </button>
            <button
              type="button"
              className="btn btn-primary shadow m-3"
              onClick={handleChange}
            >
              {items[no - 1].correct_answer}
            </button>
          </div>
        </div>
      </div>
    </section>
  ) : items.length > 0 && score.length === items.length ? (
    <div>
      <ScoreTable items={items} score={score} check={check} />
    </div>
  ) : (
    <p className="text-danger fs-2 text-center">Loading...</p>
  );
}
