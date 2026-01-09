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
            I am a software engineer and AI automation specialist. I build apps
            that look great, work well, and stay safe. I love finding the spot
            where hard problems meet great design. I make sure users have a
            smooth experience while I keep their data locked down.
            <br />
            <br />
            I focus on building autonomous systems and secure code. I create AI
            agents that work 24/7 to solve problems. These agents can watch
            security feeds, find threats, and even create marketing content.
            Security is not an afterthought for me, it is the foundation. I
            follow strict rules like the OWASP Top 10 to keep everything safe. I
            study new risks to make sure my solutions stay strong.
            <br />
            <br />
            My technical toolkit is broad. For the web, I work with Tailwind,
            React Native, React, TypeScript, and n8n. I also build
            high-performance mobile apps using Flutter and Dart. I am very
            comfortable with self-hosting my own systems on a VPS, which gives
            me full control over privacy and performance. I use tools like Git,
            Firebase, and Netlify to keep my projects organized. I am always
            looking for new ways to use AI to save time and move faster.
            <br />
            <br />I am good at making hard ideas feel simple. I can turn complex
            security rules into clear guides for a team. I also share what I
            know with others. I write about frontend bugs and security concepts
            on my blog. You can see my work in my{" "}
            <Link to="/portfolio">portfolio webpage</Link> or check out my code
            on <a href="https://github.com/kodervine">GitHub</a>. I also
            contribute to the community on Hashnode. You can{" "}
            <a href="https://kodervine.hashnode.dev/">read my articles here.</a>
            <br />
            <br />I am ready for new challenges in software engineering and AI.
            I want to work on projects that value smart automation and secure
            development.
          </Text>
          <HireMe />
        </Grid.Col>
      </Grid>
      <Footer />
    </main>
  );
};

export default About;
