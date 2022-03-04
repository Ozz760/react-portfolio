import React from "react";
import "../styles/AboutMe.css"
const profile = require("../images/Student-Profile.jpg")

function AboutMe() {
  return (
    <div>
      <h2 id="AboutM">About Me</h2>
      <img src={profile} id="imgO" alt="Oscar Silva"/>
      <p id="AboutP">
        My name is Oscar Silva. The most significant challenge I’ve faced is
        being born into a family of immigrants who were previously undocumented
        and growing up in the rough neighborhoods of east Oceanside. Modern day
        Oceanside is divrse, thriving community that has overcome a dark history
        of gang violence. The east side of Oceanside--otherwise known as
        “Posole”--was for decades a hub of gang activity, drug dealing, and
        violence for many people who look like me. It is also a neighborhood
        that many immigrant families like mine call home. Coming from an
        immigrant background, it can often seem that the deck is stacked against
        you. As a result, I learned to live in the shadows in constant fear of
        not only the gang members in my neighborhood, but also of being taken
        away from the nation that holds my American dream. I could have easily
        chosen the route of illegal activity that was so well established in my
        community, but I didn’t--I always knew I could find another route to
        achieve my goals. Although my family has faced numerous challenges over
        the years, we never lost sight of the goal to not only live in America
        but thrive here. I would go out of my way to avoid those gang “sets”
        that enticed so many others who didn’t have the best start in life. It
        may have put an invisible target on my back, but I still managed to live
        my life away from the gang activity.
      </p>
    </div>
  );
}; 

export default AboutMe;