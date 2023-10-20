import React from "react";
import { tours } from "../assets/data/Data.jsx";
export const Tours = () => {
  return (
    <section className="tours" id="tours">
      <article>
        <h2>Tour dates</h2>
      </article>
      <article>
        <table>
          <thead>
          <tr>
            <th>date</th>
            <th>city</th>
            <th>venue</th>
            <th>{''}</th>
          </tr>
          </thead>
          <tbody>
          {tours.map((entry, index) => {
            return (
              <tr key={`tour-${index}`}>
                <td>{entry.date}</td>
                <td>{entry.city}</td>
                <td>{entry.venue}</td>
                <td>{entry.guest}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </article>
    </section>
  );
};
