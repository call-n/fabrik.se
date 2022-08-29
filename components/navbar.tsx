import {
Box,
Center,
Circle,
Drawer,
DrawerContent,
DrawerOverlay,
Flex,
HStack,
Icon,
Stack,
StackDivider,
StackProps,
Text,
useBreakpointValue,
useDisclosure,
VisuallyHidden,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ElementType, ReactNode, useEffect, useState } from 'react';
import {
EventIcon,
CloseIcon,
HamburgerMenuIcon,
MenuIcon,
BookingIcon,
GiftCardIcon,
DrinksIcon,
} from './nav-icons';

type NavItemProps = {
children: ReactNode;
active?: boolean;
icon: ElementType;
href?: string;
large?: boolean;
};

function NavItem(props: NavItemProps) {
const { children, icon, active, href, large } = props;
return (
    <Link href={href} passHref>
    <HStack
        as="a"
        spacing="1"
        paddingX="2"
        paddingY={large ? '5' : '2.5'}
        rounded="lg"
        aria-current={active ? 'page' : undefined}
        _hover={{ color: 'sage.base' }}
        _activeLink={{ bg: 'maincolor.midbg', border: '1px solid', borderColor: 'maincolor.bordergray' }}
    >
        <Icon as={icon} color="#FEB48C" fontSize="lg" />
        <Text fontFamily="heading">{children}</Text>
    </HStack>
    </Link>
);
}

const items = [
{ label: 'Boka bord', href: 'https://www.google.com/maps/reserve/v/dine/c/Ank1tAv6oqk?source=pa&hl=en-SE&gei=s34MY8_6DLGDxc8P-cGmwAc&sourceurl=https://www.google.com/search?client%3Dfirefox-b-d%26q%3Dfabrik%2Bosby', icon: BookingIcon },
{ label: 'Events', href: '/events', icon: EventIcon },
{ label: 'Presentkort', href: 'https://giftup.app/place-order/b5d667d8-fafe-4b92-5a4d-08da4ded4b33?platform=hosted', icon: GiftCardIcon },
{ label: 'Meny', href: '/#meny', icon: MenuIcon },
{ label: 'Drinkar', href: '/drinkar', icon: DrinksIcon },
];

function DesktopNavItemGroup(props: StackProps) {
const { asPath } = useRouter();
return (
    <HStack as="nav" aria-label="Main navigation" spacing="8" {...props}>
    {items.map((item) => (
        <NavItem
        key={item.label}
        href={item.href}
        icon={item.icon}
        active={asPath.startsWith(item.href)}
        >
        {item.label}
        </NavItem>
    ))}
    </HStack>
);
}

function MobileNavItemGroup(props: StackProps) {
return (
    <Stack
    divider={<StackDivider borderColor="whiteAlpha.300" />}
    as="nav"
    aria-label="Main navigation"
    spacing="0"
    {...props}
    >
    {items.map((item) => (
        <NavItem key={item.label} href={item.href} icon={item.icon} large>
        {item.label}
        </NavItem>
    ))}
    </Stack>
);
}

function Headshot() {
return (
    <Flex flexWrap="nowrap" gap="5px" justifyContent="flex-start" alignItems="center">
    <Link href="/" passHref>
        <a style={{height: "25px"}}>
            <Image src="/static/images/farbiklogo.webp" width="125" height="25px" alt="Fabrik i osby logo" />
        </a>
    </Link>
    </Flex>
);
}

function MobileNavMenu() {
const menu = useDisclosure();

const breakpoint = useBreakpointValue({ base: true, lg: false });

useEffect(() => {
    if (menu.isOpen && !breakpoint) {
    menu.onClose();
    }
}, [breakpoint, menu]);

return (
    <Flex flexWrap="nowrap" gap="5px" justifyContent="flex-start" alignItems="center">
    <Center
        width="10"
        height="10"
        display={{ base: 'flex', lg: 'none' }}
        as="button"
        aria-haspopup="true"
        aria-expanded={menu.isOpen}
        aria-controls="nav-menu"
        id="nav-menu--trigger"
        type="button"
        onClick={menu.onOpen}
    >
        {menu.isOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
    </Center>
    <Drawer isOpen={menu.isOpen} onClose={menu.onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent id="nav-menu" bg="rgba(4, 4, 4, 0.8)" padding="6">
        <MobileNavItemGroup />
        </DrawerContent>
    </Drawer>
    </Flex>
);
}

export default function Navbar() {
    const [color, setColor] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY > window.innerHeight - 73){
                setColor(true)
            } else {
                setColor(false)
            }
        }

        console.log(window.innerHeight);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


return (
    <Box as="header" display="flex" justifyContent="space-between" alignContent="center" minHeight="73px" fontSize="18px" color='main.tan' backgroundColor={color ? 'main.darkblue' : 'rgba(4, 4, 4, 0.5)'} padding="0 clamp(1.375rem, 1.2rem + 0.89vw, 2rem)" borderBottom="1px solid" borderColor="main.tan" lineHeight="1" position="fixed" width="100%" zIndex="100" transition="all .3s ease">
    <Headshot />
    <MobileNavMenu />
    <DesktopNavItemGroup display={{ base: 'none', lg: 'flex' }} />
    </Box>
);
}