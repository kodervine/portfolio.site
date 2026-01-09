import {
  aiPortfolioData,
  softwarePortfolioData,
  PortfolioInterface,
} from "../data";
import {
  Accordion,
  Anchor,
  Badge,
  Box,
  createStyles,
  Flex,
  Grid,
  Group,
  Image,
  Text,
  Title,
  Tabs,
} from "@mantine/core";
import { AiOutlinePlus } from "react-icons/ai";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface PortfolioPageClasses {
  root: string;
  item: string;
  chevron: string;
  imageClass: string;
}

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    border: "1px solid transparent",
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease",

    "&[data-active]": {
      transform: "scale(1.0002)",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    "&[data-rotate]": {
      transform: "rotate(-90deg)",
    },
  },

  imageClass: {
    width: theme.breakpoints.sm ? "auto" : "387px",
    height: theme.breakpoints.sm ? "auto" : "290px",
  },
  link: {
    cursor: "pointer",
  },
  tabList: {
    marginBottom: theme.spacing.lg,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const PortfolioPage = () => {
  const { classes } = useStyles();

  // This helper function handles the display for whatever list you give it
  const renderAccordionList = (data: PortfolioInterface[]) => (
    <Accordion
      chevron={<AiOutlinePlus size={16} />}
      styles={{
        chevron: {
          "&[data-rotate]": {
            transform: "rotate(45deg)",
          },
        },
      }}
      variant="filled"
      classNames={classes as PortfolioPageClasses}
      className={classes.root}
      // Sets the first item in the list as open by default
      defaultValue={data.length > 0 ? data[0].title : undefined}
    >
      {data.map((item: PortfolioInterface) => (
        <Accordion.Item value={item.title} key={item.title}>
          <Accordion.Control style={{ fontSize: "16px" }}>
            {item.title}
          </Accordion.Control>
          <Accordion.Panel>
            <Grid justify="flex-start" align="center">
              <Grid.Col md={6} lg={5}>
                <a
                  href={item.githubLink || item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Grid gutter="xl" align="center">
                    <Grid.Col md={6} lg={6}>
                      <Image
                        src={item.image1}
                        width="100%"
                        height={290}
                        fit="contain"
                        alt="Project screenshot 1"
                      />
                    </Grid.Col>
                    <Grid.Col md={6} lg={6}>
                      <Image
                        src={item.image2}
                        width="100%"
                        height={290}
                        className={classes.imageClass}
                        fit="contain"
                        alt="Project screenshot 2"
                      />
                    </Grid.Col>
                  </Grid>
                </a>
              </Grid.Col>
              <Grid.Col md={6} lg={5}>
                <Flex />
                <Text>{item.description}</Text>
                <Group my={3} spacing="xl">
                  {item.githubLink && (
                    <Anchor
                      href={item.githubLink}
                      target="_blank"
                      className={classes.link}
                    >
                      Github link
                    </Anchor>
                  )}
                  {item.link && (
                    <Anchor
                      href={item.link}
                      target="_blank"
                      className={classes.link}
                    >
                      Project Link
                    </Anchor>
                  )}
                </Group>
                <Box>
                  <Text weight="bold" mt={2}>
                    Technologies used:
                  </Text>
                  {item.technologiesUsed.map((btn, index) => (
                    <Badge
                      color="orange"
                      size="sm"
                      variant="dot"
                      key={index}
                      mr="10px"
                    >
                      {btn}
                    </Badge>
                  ))}
                </Box>
              </Grid.Col>
            </Grid>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );

  return (
    <div style={{ padding: "10px 20px" }}>
      <Navbar title="CHINENYE ANIKWENZE" />

      <Title order={4} pb={10} mt="md">
        Works
      </Title>

      {/* Tabs organize the two different variable lists */}
      <Tabs defaultValue="ai" color="orange" variant="default">
        <Tabs.List className={classes.tabList}>
          <Tabs.Tab value="ai">AI Automation</Tabs.Tab>
          <Tabs.Tab value="software">Software Portfolio</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="ai" pt="xs">
          {renderAccordionList(aiPortfolioData)}
        </Tabs.Panel>

        <Tabs.Panel value="software" pt="xs">
          {renderAccordionList(softwarePortfolioData)}
        </Tabs.Panel>
      </Tabs>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
