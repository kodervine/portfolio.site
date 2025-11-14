import { Link } from "react-router-dom";
import { Image, Text, Title, Grid } from "@mantine/core";
import HireMe from "../components/HireMe";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import profileImg from "../../public/assets/blue-profile-pic.jpg";

const About = () => {
  return (
    <main style={{ padding: "10px 20px" }}>
      <Navbar title="CHINENYE ANIKWENZE" />
      <Grid align="flex-start" justify="center" mt={10}>
        <Grid.Col md={6} lg={5}>
          <Image src={profileImg} radius="lg" />
        </Grid.Col>
        <Grid.Col md={6} lg={5}>
          <Title order={2} weight={900}>
            MEET CHINENYE
          </Title>
          <Text align="justify">
            I am a software developer dedicated to building stunning,
            user-friendly, and highly secure web applications that truly engage
            users. My interest lies squarely at the intersection of solving
            complex problems for customers and ensuring a smooth User Experience
            while prioritizing robust security throughout the development
            lifecycle.
            <br />
            <br />
            My comprehensive understanding of the client side allows me to
            approach development with a security-first mindset. I actively
            research potential vulnerabilities, ensuring the code I write
            adheres to the highest standards of safety and best practices like
            the OWASP Top 10. My commitment is to deliver elegant solutions that
            are fundamentally resilient against emerging threats.
            <br />
            <br />
            I maintain a strong, up-to-date technical stack. This includes HTML,
            CSS, Tailwind, Sass, JavaScript, Typescript, React, React Native,
            and Dart. I utilize essential tools like Git, GitHub, Netlify, and
            Firebase in my projects. I am constantly learning new technologies
            and security standards to stay at the cutting edge of the industry.
            What sets me apart is my ability to combine deep technical skill
            with exceptional clarity in communication.
            <br />
            <br />I excel at translating complex engineering and security
            requirements into clear, concise documentation and working
            effectively within a team. I am a dedicated problem-solver who
            ensures work gets done without delay. My{" "}
            <Link to="/portfolio">portfolio webpage</Link> showcases my skills
            and projects, and my{" "}
            <a href="https://github.com/kodervine">GitHub profile</a> highlights
            my programming activities. I also contribute to the community via my
            blog on Hashnode where I create detailed articles on technologies I
            use, security concepts, and frontend debugging techniques. You can{" "}
            <a href="https://kodervine.hashnode.dev/">read my articles here.</a>{" "}
            <br />
            <br />I am open to challenging opportunities in software engineering
            and security that emphasize secure code development.{" "}
          </Text>
          <HireMe />
        </Grid.Col>
      </Grid>
      <Footer />
    </main>
  );
};

export default About;
