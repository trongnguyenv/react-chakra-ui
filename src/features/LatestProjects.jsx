import { ProjectAPI } from "@/api/project";
import { Badge } from "@/components/Badge/Badge";
import { ImageSlider } from "@/components/ImageSlider/ImageSlider";
import { Box, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function LatestProjects() {
  const { t, i18n } = useTranslation("home");
  const [projects, setProjects] = useState();

  useEffect(() => {
    (async () => {
      const projectsResponse = await ProjectAPI.fetchAll();
      setProjects(projectsResponse);
    })();
  }, []);

  const renderProject = ({ id, image, title, desc, technologies }) => {
    return (
      <WrapItem key={id} flexDirection="column">
        <ImageSlider imageList={image.map((img) => img.downloadURL)} />
        <Heading size="md" color="secondary" mt={3}>
          <Box
            display={"inline-block"}
            bg={"primary.dark"}
            verticalAlign={"middle"}
            w={25}
            h={1}
            mr={3}
          />
          {title}
        </Heading>
        <Text>{desc[i18n.language]}</Text>
        <Wrap mt={4} maxW={410}>
          {technologies.map((tech) => (
            <WrapItem key={tech}>
              <Badge bg={tech}>{tech}</Badge>
            </WrapItem>
          ))}
        </Wrap>
      </WrapItem>
    );
  };

  return (
    <Flex direction={"column"} w="100%">
      <Heading>{t("LatestProjects")}</Heading>
      <Wrap mt={10} spacing={16}>
        {projects?.map(renderProject)}
      </Wrap>
    </Flex>
  );
}
