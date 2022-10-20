import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

export const MenuDrawer = (props) => {
  const { onClose, isOpen, onClickHome, onClickSharePage, onClickSignUp } =
    props;
  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button
              onClick={() => {
                onClickHome();
                onClose();
              }}
              w="100%"
              bg="blackAlpha.100"
            >
              TOP
            </Button>
            <Button
              onClick={() => {
                onClickSharePage();
                onClose();
              }}
              w="100%"
              bg="blackAlpha.100"
            >
              ログイン
            </Button>
            <Button
              onClick={() => {
                onClickSignUp();
                onClose();
              }}
              w="100%"
              bg="blackAlpha.100"
            >
              新規登録
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
