import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from '../ColorModeSwitch';

export default function NavBar() {
  return (
    <HStack justifyContent="space-between"padding='10px'>
      <Image boxSize={40} src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
}
