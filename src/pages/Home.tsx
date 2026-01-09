import profileImg from "../../public/assets/profile-pic.jpg";
import Footer from "../components/Footer";
import { Box, Grid, Image, Text, Title } from "@mantine/core";
import HireMe from "../components/HireMe";
import Navbar from "../components/Navbar";
import SkillGroup from "../components/SkillGroup";

interface Props {
  techStack: string[];
  techTools: string[];
}

const automationSkills = [
  "n8n",
  "Agentic AI",
  "Workflow Automation",
  "Custom JS Nodes",
];

const developmentStack = [
  "React",
  "TypeScript",
  "Flutter",
  "Python",
  "Dart",
  "React Native",
  "Javascript",
  "React Query",
  "Tailwind",
  "SCSS",
  "Redux Toolkit",
];

const infrastructureTools = [
  "VPS Hosting",
  "Docker",
  "Linux / Ubuntu",
  "Firebase",
  "Git / GitHub",
  "Netlify",
  "Mantine UI",
  "Vercel",
];

const Home = () => {
  return (
    <>
      <Navbar title="" />
      <Grid
        align="center"
        justify="center"
        my="lg"
        style={{ padding: "10px 20px" }}
      >
        <Grid.Col md={6} lg={5} order={2} orderSm={2} orderLg={1}>
          <main>
            <Title order={1} weight={900} my="xs">
              CHINENYE ANIKWENZE
            </Title>

            <Text align="justify" mb="xl">
              I am a Software Engineer and AI Automation Specialist. I build
              tools that work hard so you don't have to. I focus on creating
              apps that are beautiful, fast, and very secure. I love using AI to
              turn manual work into autonomous workflows.
            </Text>

            <Title order={4} mb="md">
              Expertise:
            </Title>

            <SkillGroup
              title="AI & Automation"
              items={automationSkills}
              color="orange"
            />

            <SkillGroup
              title="Web & Mobile Development"
              items={developmentStack}
              color="blue"
            />

            <SkillGroup
              title="Infrastructure & Tools"
              items={infrastructureTools}
              color="teal"
            />

            <Box mt="xl">
              <HireMe />
            </Box>

            <Footer />
          </main>
        </Grid.Col>
        <Grid.Col md={6} lg={5} order={1} orderSm={1} orderLg={2}>
          <Image src={profileImg} radius="lg" />
        </Grid.Col>
      </Grid>
    </>
  );
};


export default Home;
