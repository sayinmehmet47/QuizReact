import React, { useState, useEffect } from 'react';

export default function startScreen(props) {


    
  return (
    <section className="border pt-2 pb-3">
      <header className="text-center">
        <h2>Welcome to QUIZ</h2>
      </header>
      <div className="col-sm-6 m-auto">
          <form action="" onSubmit={(e)=>e.preventDefault()}>
        <input
        onChange={(e)=>(props.amount(e.target.value))}
        placeholder="Select amount of questions"
          type="number"
          name="trivia_amount"
          id="trivia_amount"
          class="form-control"
          min="1"
          max="50"
          required
        ></input>
        <select
          class="form-select form-select-md "
          aria-label=".form-select-lg example"
          onChange={(e)=>(props.category(e.target.value))}
          required

        >
          <option selected>Select the category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">
            Entertainment: Cartoon &amp; Animations
          </option>{' '}
        </select>
        <select
          class="form-select form-select-md mb-5"
          aria-label=".form-select-lg example"
          onChange={(e)=>(props.difficulty(e.target.value))}
          required

        >
          <option selected>Select the difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
       

        <button type="submit" value="true" className="btn btn-danger col-sm-4 m-auto d-flex justify-content-center"  onClick={(e)=>(props.start(e.target.value))}>
          Submit
        </button>
        </form>
      </div>
    </section>
  );
}
