import React, { useState, useEffect } from 'react';

export default function ScoreTable({ items, score, check }) {
  let arr = [...score]
    .concat(check)
    .slice(1, 41)
    .map((e) => e.toString());

  console.log(arr);

  return (
    <section className="m-5">
      <table
        className="table table-striped table-dark text-center
      "
      >
        <thead>
          <tr>
            <th scope="col">Question</th>
            <th scope="col">Answer</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((e, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{e}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
