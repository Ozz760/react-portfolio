import React from "react";
import "../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <section class="page-section" id="work">
      <h2 id="work">Work</h2>
      <div class="flex-container">
        <a
          href="https://ozz760.github.io/project-01/"
          target="_blank"
          class="flex-item project-1"
          rel="noreferrer"
        >
          <div>
            <h3>Recipe Roulette</h3>
            <span>Project 1</span>
          </div>
        </a>

        <a
          href="https://ozz760.github.io/bc-Homework3/"
          target="_blank"
          class="flex-item led-wall"
          rel="noreferrer"
        >
          <div>
            <h3>Password Generator</h3>
          </div>
        </a>
        <a
          href="https://intense-waters-01613.herokuapp.com/"
          target="_blank"
          class="flex-item react-calc"
          rel="noreferrer"
        >
          <div>
            <h3>Weather IO</h3>
            <span>Project 2</span>
          </div>
        </a>

        <a
          href="https://lit-cliffs-22896.herokuapp.com/"
          target="_blank"
          class="flex-item pastel-puzzles"
          rel="noreferrer"
        >
          <div>
            <h3>Note Taker</h3>
          </div>
        </a>

        <a
          href="https://queuejump.herokuapp.com/"
          target="_blank"
          class="flex-item run-buddy"
          rel="noreferrer"
        >
          <div>
            <h3>QueueJump</h3>
            <span>Project 3</span>
          </div>
        </a>
      </div>
    </section>
  );
}
