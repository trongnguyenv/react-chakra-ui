import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";
import { useTranslation } from "react-i18next";
import { Badge as BadgeCP } from "@/components/Badge/Badge";

const SKILLS = [
  { label: ".NET" },
  { label: "Dart" },
  { label: "React" },
  { label: "Redux" },
  { label: "Typescript" },
  { label: "Node.Js" },
];

export function Landing() {
  const { t } = useTranslation("home");

  const leftSection = (
    <Box>
      <Heading
        fontSize={{ base: "2xl", md: "4xl", xl: "7xl" }}
        color="secondary"
        whiteSpace="pre-line"
      >
        {t("greetings")}
      </Heading>
      <Text fontSize="lg" color="secondary">
        {t("iAm")} {t("job")} <br /> {t("location")}
      </Text>

      <Wrap mt={15}>
        {SKILLS.map((skill) => (
          <WrapItem key={skill.label}>
            <BadgeCP bg={skill.label}>{skill.label}</BadgeCP>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );

  const badgeExperience = (
    <Badge bg="primary.light" borderRadius={7} p={3} textAlign="center">
      <Text fontSize="xl">{new Date().getFullYear() - 2019}</Text>
      <Text>{t("yearsOfExperience")}</Text>
    </Badge>
  );

  const rightSection = (
    <Box mt={{ base: 10, md: 0 }}>
      <Flex justify="flex-end">{badgeExperience}</Flex>
      <Image src={humanImg} w={400} />
    </Box>
  );

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      justify="space-evenly"
      mt={{ base: 50, md: 150 }}
    >
      {leftSection}
      {rightSection}
    </Flex>
  );
}
