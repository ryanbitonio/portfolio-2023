import { Tooltip } from "@chakra-ui/react";
const CustomTooltip = ({ label, children, placement }) => {
  return (
    <Tooltip
      label={label}
      fontSize="14px"
      placement={placement}
      aria-label="A tooltip"
      color="white"
      bg="gray.600"
      openDelay={300}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
