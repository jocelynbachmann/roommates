import { Box, Text } from '@chakra-ui/react';
import { Circles } from 'react-loader-spinner';

export const PageLoader = ({ isTakingTooLong = false }) => {
  return (
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Circles
        height="80"
        width="80"
        color="teal"
        ariaLabel="circles-loading"
        visible={true}
      />
      {isTakingTooLong && (
        <Text mt={6} color="teal" fontSize="lg" fontWeight="bold" textAlign="center">
          The server is taking longer than usual to respond. This may be due to the server spinning up after being idle. Please wait a moment.
        </Text>
      )}
    </Box>
  );
};
