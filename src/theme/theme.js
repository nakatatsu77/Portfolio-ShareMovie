import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // backgroundColor: 'blackAlpha.300',
        backgroundColor: 'gray.100',
        color: 'gray.800',
      },
    },
  },
});
export default theme;
