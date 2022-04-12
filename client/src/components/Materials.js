//imports
import React from "react";

//Materials page content
export default function Materials() {
  return (

    /* content returned to Materials page */
    <div className="materialsBody">

      {/* header for materials page */}
      <h2 className="materialsHeader">Materials Page! (placeholder)</h2>
      
      <div>
        {/* image for Intro to LMS */}
        <img
          class="avatar-square catalog-course-logo course-info_avatar--img animated fadeIn"
          src="https://d3j0t7vrtr92dk.cloudfront.net/samplecourses/1548346756_intro.png?"
          alt="Introduction to TalentLMS (001)"
          title="Introduction to TalentLMS (001)"
        />
        {/* button to link to lms website */}
        <a
          id=""
          href="https://zakariahrittenhouse.talentlms.com/catalog/info/id:123"
          target="_blank"
        >
          <button class="button">Go To Introduction to TalentLMS (001)</button>
        </a>
        <p>
          Welcome to TalentLMS! Using new software can be more frustrating than
          starting a show in the middle of the season. Watch this 15-minute
          video course to get familiar with TalentLMS and get the most out of
          your shiny new account.
        </p>
      </div>

      <div>
        <img
          class="avatar-square catalog-course-logo course-info_avatar--img animated fadeIn"
          src="https://d3j0t7vrtr92dk.cloudfront.net/iamlearninglibrary/1586608328_iAM%20Remote%20Working%20101%20Thumbnail.png?"
          alt="Remote Working 101 (iAM0036)"
          title="Remote Working 101 (iAM0036)"
        />
        <a
          id="remoteW101Link"
          href="https://zakariahrittenhouse.talentlms.com/catalog/info/id:128"
          target="_blank"
        >
          <button class="button">Go To Remote Working 101 (iAM0036)</button>
        </a>
        <p>
          FREE COURSE! The world is changing fast. Many of us are working from
          home for the first time and discovering the challenges this can bring.
          Whether you’re a total newbie or remote working veteran, you will
          benefit from these 10 essential lessons. Skills that will keep you
          productive and help to support your wellbeing. Come aboard and we’ll
          keep your output (and your spirits) high!
        </p>
      </div>

      <div>
        <img
          class=""
          src="https://d3j0t7vrtr92dk.cloudfront.net/market/1588072009_Persevere%20During%20Setbacks.png?"
          alt="Persevere During Setbacks (VD092)"
          title="Persevere During Setbacks (VD092)"
        />
        <a
          id="perseveringLink"
          href="https://zakariahrittenhouse.talentlms.com/trainer/course/id:129"
          target="_blank"
        >
          <button class="button">
            Go To Persevere During Setbacks (VD092)
          </button>
        </a>
        <p>
          "Persevering when bad things happen isn’t always easy. Sometimes the
          negative event seems too big to overcome, causing us to get stuck and
          to not move forward. Other times our emotions get the better of us and
          cloud our judgment. This is not uncommon and can happen to the best of
          us. Yet, we must move on, we must persevere. And if we’re at work, we
          must move forward quickly and competently, learning from the situation
          and solving for it in the best way we can. Learning and applying a
          technique to help you continue in the face of adversity is beneficial.
          Not only does it help in our current job, it also helps build our
          reputation as someone who is steady and capable of handling difficult
          situations—a plus for anyone wanting to make a future career move. By
          completing this course, you will know how to persevere in the face of
          setbacks. This course has been approved for 1 hour of PDU credit from
          PMI (Project Management Institute)."
        </p>
      </div>
    </div>
  );
}
