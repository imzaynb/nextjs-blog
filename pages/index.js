import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mt-5">
        <p className="text-gray-600 text-xl text-center">Future Robotics Engineer </p>
        <div className="mt-5 text-md lg:text-lg prose">
          <p>
            I fell into a love for programming through the YouTube channels <a href="https://www.youtube.com/@thecodingtrain">
              The Coding Train
            </a> and <a href="https://www.youtube.com/@carykh">
               CaryKH 
            </a>.
            From there, I followed my interest to game making with Python, then
            website building with JavaScript, then competitive programming with
            C++, then back to Python.
          </p>
          <p>
            I'm heavily involved in STEM, both academically and
            extracurricularly: I am a part of my school's FRC Robotics team (Go <a href="https://www.feds201.com/" target="_blank">
              FEDS
            </a>!), founded my school's <a href="https://RHS-CS-Club.github.io">
              CS Club
            </a>,
            and love to program recreationally!
          </p>
          <p>
            Currently, I am getting building a stronger foundation through
            following Harvard's amazing <a href="https://www.edx.org/cs50">
              C550 course
            </a> (which actually inspired me to make this website!) before moving to
            Data Structures and Algorithms and Machine Learning!
          </p>
          <p>
            Feel free to reach out to me at <a href="mailto:imzaynb@gmail.com">
              here
            </a> and stay
            tuned for more updates!
          </p>
        </div>
      </section>
      <section className="text-md py-5">
        <h2 className="text-xl font-bold pb-2"> Blog</h2>
        <ul className="list-outside">
          {allPostsData.map(({ id, date, title }) => (
            <li className="list-item pb-2" key={id}>
              <Link className="text-blue-600 hover:underline" href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="text-gray-400">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
