import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { auth } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const MenuDrawer = (props) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const { onClose, isOpen, onClickHome, onClickLogin, onClickSignUp } = props;

  const logout = async () => {
    await signOut(auth);
    navigate("login");
  };

  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            {user ? (
              <Button
                onClick={() => {
                  logout();
                  onClose();
                }}
                w="100%"
                bg="blackAlpha.100"
              >
                ログアウト
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    onClickHome();
                    onClose();
                  }}
                  w="100%"
                  bg="blackAlpha.100"
                >
                  HOME
                </Button>
                <Button
                  onClick={() => {
                    onClickLogin();
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
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
