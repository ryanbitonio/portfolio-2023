import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const ProjectCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="174px" />
      <CardBody>
        <SkeletonText />
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
};

export default ProjectCardSkeleton;
