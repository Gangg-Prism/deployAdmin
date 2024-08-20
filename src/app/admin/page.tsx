"use client";

import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import '../css/styles.css';


interface HeaderProps {
  title: string;
}

interface MenuItem {
  label: string;
  path: string;
}

export default function Admin() {
  const { data: session} = useSession();
  const [data, setData] = useState<{ customer_id: string; site_id: string } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!session) {
    redirect("/landing");
  }
  const menuItems: MenuItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Ministries', path: '/ministries' },
    { label: 'Social Media', path: '/social-media' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!session) {
    redirect("/landing");
  }

  return (
    
    <><header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img
            src="https://storage.cloud.google.com/beaconbridge/logo.png?authuser=2"
            alt="Logo"
            className="h-12 mr-4" // Adjust the height and margin as needed
          />
          <h1 className={styles.title}>Welcome to our Church</h1>
        </div>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        {menuItems.map((item) => (
          <a key={item.label} href={item.path} className={styles.navItem} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
      {data && (
        <div>
          <p>Customer ID: {data.customer_id}</p>
          <p>Site ID: {data.site_id}</p>
        </div>
      )}
      <div className="login-container">
        {session.user ? (
          <>
            <p>Name: {session.user.name}</p>
            <p className="text-xs">Email: {session.user.email}</p><br />
          </>
        ) : (
          <p>Not logged in</p>
        )}
        <button className='btn' onClick={() => signOut()}>Sign out</button>
      </div>
    </header><div>
    <section className="relative">
        <div> &nbsp;&nbsp;</div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">

            {/* Section content */}
            <div className="md:grid md:grid-cols-12 md:gap-6">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-5 md:mt-6" data-aos="fade-right">
                {/* Tabs buttons */}
                {/*<div className="mb-4 md:mb-4">*/}
                  <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                    <div className="text-gray-600"><b>Bible Study Tools</b>
                      <span className="flex text-green-600">
                        Psalm 119:105 ESV Your word is a lamp to my feet and a light to my path.
                      </span>
                      <a href="https://salemnet.vo.llnwd.net/media/cms/pdf/BST-144-2018biblereadingplan_bst.pdf"
                         target="_blank"
                         className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">The Best one year Bible reading plan
                      </a>
                      <div>
                      <a href="https://docs.google.com/file/d/0B8LARGbZJpifazVOQkhuMXA0U0U/edit"
                         target="_blank"
                         className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">New Testament - 30 Days Reading Plan
                      </a>
                      </div>
                      <div>
                      <a href="http://interlinear.biblos.com/"
                         target="_blank"
                         className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Interlinear Bible
                      </a>
                      </div>
                      <div>
                      <a href="http://bible.org/passage/"
                         target="_blank"
                         className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Bible Commentaries
                      </a>
                      </div>
                    </div>
                  </div>

                {/*</div>*/}
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-7 md:mt-6" data-aos="fade-right">
                {/* Tabs buttons */}
                <div className="mb-6 md:mb-12">
                  <div className="flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg">
                    <div className="text-gray-600">
                      <div className="text-gray-600"><b>Bible Audio Links</b>
                        <div>
                        <a href="http://www.tamilbible.com/index.php?option=com_content&view=article&id=114&Itemid=465&mp3t=1"
                           target="_blank"
                           className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Tamil Audio Bible
                        </a>
                        </div>
                        <div>
                          <a href="https://www.wordproject.org/bibles/audio/29_telugu/index.htm"
                             target="_blank"
                             className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Telugu Audio Bible
                          </a>
                        </div>
                        <div>
                          <a href="http://www.sathyavedapusthakam.com/"
                             target="_blank"
                             className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Malayalam Audio Bible
                          </a>
                        </div>
                        <div>
                          <a href="http://doubleblessings.info/mp3-audio-bible/bible-kannada/"
                             target="_blank"
                             className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Kannada Audio Bible
                          </a>
                        </div>
                        <div>
                          <a href="https://www.bible.com/bible/1686/MAT.5.marathi-bsi"
                             target="_blank"
                             className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Marathi Audio Bible
                          </a>
                        </div>
                        <div>
                          <a href="https://listen.talkingbibles.org/en/language/hin"
                             target="_blank"
                             className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Hindi Audio Bible
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="max-w-3xl mx-auto text-left pb-1 md:pb-6">
              <h1 className="h2 mb-4">
                Godly Married Life
              </h1>
              <div className="font-bold leading-snug tracking-tight mb-1">Key Bible Verses
              </div>
              <div className="text-green-600">
                Colossians 3:18-19
                18 Wives, submit to your husbands, as is fitting in the Lord. 19 Husbands, love your wives and do not be harsh with them
              </div>
              <div className="text-green-600">
                Hebrews 13:4
                4 Marriage should be honored by all, and the marriage bed kept pure, for God will judge the adulterer and all the sexually immoral.
              </div>

            </div>

            <div className="max-w-3xl mx-auto text-left pb-1 md:pb-6">
              <div className="font-bold leading-snug tracking-tight mb-1"> Useful Resources</div>
              <div>
                <a href="http://www.focusonthefamily.com/marriage/gods-design-for-marriage"
                   className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                   target="_blank">God's Design for Marriage</a>
              </div>
              <div>
                <a href="http://livingontheedge.org/group-studies/browse-all-studies/house-or-home-marriage-edition"
                   className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                   target="_blank">House or Home - Marriage Edition</a>
              </div>
              <div>
              <a href="http://www.insight.org/resources/insights-by-topic/marriage"
                 className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                 target="_blank">From Surviving to Thriving</a>
              </div>
              <div>
                <a href="http://fba.org/married-life/resource-links"
                   className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                   target="_blank">More Resources</a>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-left pb-1 md:pb-6">
              <h1 className="h2 mb-4">
                Biblical Parenting
              </h1>
              <div className="font-bold leading-snug tracking-tight mb-1">Key Bible Verses
              </div>
              <div className="text-green-600">
                Proverbs 22:6
                6 Train up a child in the way he should go; even when he is old he will not depart from it.
              </div>
              <div className="text-green-600">
                Ephesians 6:4
                4 Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord.
              </div>

            </div>

            <div className="max-w-3xl mx-auto text-left pb-1 md:pb-6">
              <div className="font-bold leading-snug tracking-tight mb-1"> Useful Resources</div>
              <div>
                <a href="http://www.focusonthefamily.com/parenting/spiritual-growth-for-kids"
                   className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                   target="_blank">Spiritual Growth for Kids</a>
              </div>
              <div>
                <a href="http://livingontheedge.org/series/house-or-home-parenting-edition/daily-radio"
                   className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                   target="_blank">House or Home - Parenting Edition</a>
              </div>
              <div>
                <a href="http://www.firstredeemer.org/ministries/childrens-ministry/"
                   className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                   target="_blank">Vacation Bible School at First Redeemer</a>
              </div>
              <div>
                <a href="http://www.insight.org/resources/topics/parenting/"
                   className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                   target="_blank">Useful Resources from Insight for Living</a>
              </div>
              <div>
                <a href="http://www.focusonthefamily.com/family-q-and-a/parenting/parent-concerned-about-kids-vulnerability-to-human-trafficking"
                   className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                   target="_blank">Parent Concerned about Kids' Vulnerability to Human Trafficking</a>
              </div>
            </div>

          </div>

          <div className="max-w-3xl mx-auto text-left pb-1 md:pb-6">
            <h1 className="h2 mb-4">
              Families with Special Needs Children
            </h1>
            <div className="font-bold leading-snug tracking-tight mb-1">Key Bible Verses
            </div>
            <div className="text-green-600">
              John 9:1-3

              1 As he went along, he saw a man blind from birth. 2 His disciples asked him, “Rabbi, who sinned, this man or his parents, that he was born blind?”
              <span className="text-red-600"> 3 “Neither this man nor his parents sinned,” said Jesus, “but this happened so that the works of God might be displayed in him.
                </span>
            </div>
            <div className="text-green-600">
              Exodus 4:10-11
              10 Moses said to the Lord, “Pardon your servant, Lord. I have never been eloquent, neither in the past nor since you have spoken to your servant. I am slow of speech and tongue.” 11 The Lord said to him, “Who gave human beings their mouths? Who makes them deaf or mute? Who gives them sight or makes them blind? Is it not I, the Lord? 12 Now go; I will help you speak and will teach you what to say.”
            </div>

          </div>

          <div className="max-w-3xl mx-auto text-left pb-1 md:pb-6">
            <div className="font-bold leading-snug tracking-tight mb-1"> Useful Resources</div>
            <div>
              <a href="http://www.focusonthefamily.com/parenting/parenting-challenges/parenting-a-special-needs-child/parenting-a-special-needs-child"
                 className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                 target="_blank">Parenting a Special Needs Child</a>
            </div>
            <div>
              <a href="http://www.fba.org/children/gods-masterpieces"
                 className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                 target="_blank">God's Masterpieces - Special Needs Ministry</a>
            </div>
            <div>
              <a href="http://www.focusonthefamily.com/pro-life/special-needs/special-needs-and-marriage-version2/special-needs-and-marriage-following-the-lords-plan"
                 className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                 target="_blank">Marriage with Special Needs Children</a>
            </div>

          </div>


          <div className="max-w-3xl mx-auto text-left pb-1 md:pb-6">
            <h1 className="h2 mb-4">
              Focus on the Families
            </h1>
            <div className="font-bold leading-snug tracking-tight mb-1">Helping Families Thrive
            </div>
            <div>
              Focus on the Family is a global Christian ministry dedicated to helping families thrive.
              They provide help and resources for couples to build healthy marriages that reflect God’s design,
              and for parents to raise their children according to morals and values grounded in biblical principles.
            </div>
            <div className="text-green-600">
              Exodus 4:10-11
              10 Moses said to the Lord, “Pardon your servant, Lord. I have never been eloquent, neither in the past nor since you have spoken to your servant. I am slow of speech and tongue.” 11 The Lord said to him, “Who gave human beings their mouths? Who makes them deaf or mute? Who gives them sight or makes them blind? Is it not I, the Lord? 12 Now go; I will help you speak and will teach you what to say.”
            </div>

          </div>

          <div className="max-w-3xl mx-auto text-left pb-1 md:pb-6">
            <div className="font-bold leading-snug tracking-tight mb-1"> Useful Resources</div>
            <div>
              <a href="http://tunein.com/program/?ProgramId=39957&StationId=21452"
                 className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                 target="_blank">Focus on the Family Radio</a>
            </div>
            <div>
              <a href="http://www.focusonthefamily.com/"
                 className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                 target="_blank">Focus on the Family Website</a>
            </div>

          </div>


        </div>

      </section>
      </div></>
  ); 
}

// src/app/Header.tsx

// "use client"
// import React, { useEffect, useState } from 'react';
// import styles from './Header.module.css';
// import { signOut, useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
// interface HeaderProps {
//   title: string;
// }

// interface MenuItem {
//   label: string;
//   path: string;
// }

// const Header: React.FC<HeaderProps> = ({ title }) => {
//   const [data, setData] = useState<{ customer_id: string; site_id: string } | null>(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const { data: session} = useSession();

//   if (!session) {
//     redirect("/landing");
//   }
//   const menuItems: MenuItem[] = [
//     { label: 'Home', path: '/' },
//     { label: 'About Us', path: '/about' },
//     { label: 'Ministries', path: '/ministries' },
//     { label: 'Social Media', path: '/social-media' },
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.headerContent}>
//         <div className={styles.logoContainer}>
//           <img
//             src="https://storage.cloud.google.com/beaconbridge/logo.png?authuser=2"
//             alt="Logo"
//             className="h-12 mr-4" // Adjust the height and margin as needed
//           />
//           <h1 className={styles.title}>{title}</h1>
//         </div>
//         <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
//           <span className={styles.hamburgerLine}></span>
//           <span className={styles.hamburgerLine}></span>
//           <span className={styles.hamburgerLine}></span>
//         </button>
//       </div>
//       <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
//         {menuItems.map((item) => (
//           <a key={item.label} href={item.path} className={styles.navItem} onClick={() => setIsMenuOpen(false)}>
//             {item.label}
//           </a>
//         ))}
//       </nav>
//       {data && (
//         <div>
//           <p>Customer ID: {data.customer_id}</p>
//           <p>Site ID: {data.site_id}</p>
//         </div>
//       )}
//       <div className="login-container">
//           {session.user ? (
//             <>
//               <p>Name: {session.user.name}</p>
//               <p className="text-xs">Email: {session.user.email}</p>
//             </>
//           ) : (
//             <p>Not logged in</p>
//           )}
//           <button className='btn' onClick={() => signOut()}>Sign out</button>
//         </div>
//     </header>
//   );
// };

// export default Page;