import React from "react";
import styles from "./Company.module.css";

import rectangle_blue_1 from "@src/assets/images/pages/company/HD-wallpaper-mountains-landscape-nature-art-vector 1.png";

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.slogan}>
        <div className={styles.blueRectangle1} />
        <div className={styles.redRectangle1} />
        <div className={styles.hdWallpaperMountains} />
        <div className={styles.redRectangle2} />
        <div className={styles.slogan4}>
          <button className={styles.travelToBulgaria}>
            <span className={styles.travel}>“Travel to </span>
            <span className={styles.bulgaria}>Bulgaria</span>
            <span className={styles.travel5}> with </span>
            <span className={styles.bulgaria6}>confidence</span>
            <span className={styles.travel7}> and </span>
            <span className={styles.bulgaria8}>convenience</span>
            <span className={styles.travel9}>. </span>
            <span className={styles.weWillShowYouHow}>
              We’ll show you how.”
            </span>
          </button>
          <div className={styles.rectangleA} />
        </div>
        <div className={styles.blueRectangle2} />
      </div>
      <div className={styles.rectangleC}>
        <div className={styles.path} />
        <div className={styles.ourMission}>
          <span className={styles.ourMissionD}>
            Our Mission
            <br />
            <br />
          </span>
          <span className={styles.our}>Our</span>
          <span className={styles.ourE}> </span>
          <span className={styles.missionIsToInspireYouToTravelMore}>
            mission is to inspire you to travel more, to travel better, and to
            travel smarter. Whether you are looking for a weekend getaway, a
            cultural immersion, or an adventure in nature, we have something for
            you.
          </span>
        </div>
        <div className={styles.mapVectorArt}>
          <div className={styles.layer}>
            <div className={styles.divG} />
          </div>
        </div>
        <div className={styles.divPath} />
      </div>
      <div className={styles.text}>
        <div className={styles.churchVectorArt} />
        <div className={styles.mountainSunriseWithPineForestVector} />
        <div className={styles.background} />
        <div className={styles.rectangle15} />
        <span className={styles.bgTrek16}>BG-TREK</span>
        <div className={styles.rectangle17} />
        <div className={styles.rectangle18} />
        <div className={styles.weAreWebsite}>
          <span className={styles.we}>WE</span>
          <span className={styles.nbsp}> </span>
          <span className={styles.are}>are</span>
          <span className={styles.nbsp19}>
            website that provides information about tourism, traveling,
            landmarks, and personal travel map maker. It
          </span>
          <span className={styles.are1a}>was</span>
          <span className={styles.nbsp1b}>
            created by two students, one male and one female.
          </span>
        </div>
      </div>
      <div className={styles.rectangle1c}>
        <span className={styles.theTeam}>The Team</span>
      </div>
      <div className={styles.background1d}>
        <div className={styles.frame}>
          <div className={styles.employee}>
            <div className={styles.defaultAvatarProfile} />
            <div className={styles.text1e}>
              <span className={styles.teodorAtanasov}>Teodor Atanasov</span>
              <span className={styles.programmerDesigner}>
                Programmer & Designer
              </span>
              <span className={styles.responsibleProgramming}>
                Responsible for the programming of the website, also responsible
                with designing the website
              </span>
            </div>
          </div>
          <div className={styles.horizontalWhiteDottedLine} />
          <div className={styles.employee1f}>
            <div className={styles.text20}>
              <span className={styles.tsvetelinaTsoneva}>
                Tsvetelina Tsoneva
              </span>
              <span className={styles.designerCoWriter}>
                Designer & Co-Writer
              </span>
              <span className={styles.responsibleDesigning}>
                Responsible for designing the website, additionally assists the
                article writer
              </span>
            </div>
            <div className={styles.defaultAvatarProfile21} />
          </div>
          <div className={styles.horizontalWhiteDottedLine22} />
          <div className={styles.employee23}>
            <div className={styles.defaultAvatarProfile24} />
            <div className={styles.text25}>
              <span className={styles.rashideSelim}>Rashide Selim</span>
              <span className={styles.writerEditor}>Writer & Editor</span>
              <span className={styles.responsibleWriting}>
                Responsible for writing and editing articles, blog posts and
                more. Also assists in the direction of the website
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
