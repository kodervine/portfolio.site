import {
  Accordion,
  Anchor,
  Badge,
  Box,
  createStyles,
  Flex,
  Text,
  Title,
} from "@mantine/core";
import { AiFillCaretDown } from "react-icons/ai";
import { certificationsData } from "../data";
import { nanoid } from "nanoid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
      // transform: "scale(1.0002)",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,

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
    width: "80px",
    height: "100px",
  },
}));

const Certifications = () => {
  const { classes } = useStyles();
  return (
    <main style={{ padding: "0px 20px" }}>
      <Navbar title="CHINENYE ANIKWENZE" />
      <Title order={4} style={{ paddingBottom: " 10px" }} mt="md">
        Courses & Certifications
      </Title>
      <Accordion
        chevron={<AiFillCaretDown size={16} />}
        styles={{
          chevron: {
            "&[data-rotate]": {
              transform: "rotate(45deg)",
            },
          },
        }}
        // mx="20px"
        variant="filled"
        classNames={classes}
        className={classes.root}
        defaultValue={certificationsData[0].year}
      >
        {certificationsData.map((certItems) => {
          const { certifications, year } = certItems;
          return (
            <Accordion.Item value={year} key={nanoid()}>
              <Accordion.Control>{year}</Accordion.Control>
              {certifications?.map((certs) => {
                const { link, organisation, title, date } = certs;
                return (
                  <Accordion.Panel key={nanoid()}>
                    <Text weight="bold" size={16}>
                      {title}
                    </Text>
                    <Flex
                      align={innerWidth < 700 ? "start" : "center"}
                      gap="10px"
                      direction={innerWidth < 700 ? "column" : "row"}
                    >
                      <Text display="flex">
                        {" "}
                        Issued by:
                        <Badge
                          color="purple"
                          size="sm"
                          variant="dot"
                          mt={1.5}
                          ml={2}
                        >
                          {organisation}
                        </Badge>{" "}
                      </Text>

                      <Text>
                        ● {"  "}
                        {date}
                      </Text>
                    </Flex>
                    <Box>
                      <Anchor href={link} target="_blank">
                        See credentials
                      </Anchor>
                    </Box>
                  </Accordion.Panel>
                );
              })}
            </Accordion.Item>
          );
        })}
      </Accordion>
      <Footer />
    </main>
  );
};

export default Certifications;
