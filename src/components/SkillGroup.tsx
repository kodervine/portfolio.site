import { Badge, Box, Group, Text } from "@mantine/core";

const SkillGroup = ({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) => {
  return (
    <Box mb="md">
      <Text weight={700} size="md" color="dimmed" transform="uppercase" mb={5}>
        {title}
      </Text>
      <Group spacing={8}>
        {items.map((item, index) => (
          <Badge key={index} color={color} variant="dot" size="sm" radius="sm">
            {item}
          </Badge>
        ))}
      </Group>
    </Box>
  );
};

export default SkillGroup;
