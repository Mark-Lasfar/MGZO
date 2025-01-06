import logo from "../../images/logo.png"
import Image from "next/image"
import cartIcon from "../../images/cart.png";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { stateProps } from "../../../type";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useContext, useState } from "react";
import { addUser } from "@/store/nextSlice";
import { SessionProvider } from "next-auth/react";


import { ColorModeContext } from "../../theme";




import {
    IconButton,
    ListItem,
    useTheme,
    // useTheme,
} from "@mui/material";


import {
    DarkModeOutlined,
    ExpandMore,
    LightModeOutlined,
} from "@mui/icons-material";


import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import { ExpandMore } from "@mui/icons-material";



const options = [
    'EN',
    'AR',

];


const Header = () => {
    // const colorMode = useContext(ColorModeContext);
    // const theme = useTheme();
    const { data: session } = useSession();
    const { productData, favoriteData, userInfo } = useSelector(
        (state: stateProps) => state.next);
    const dispatch = useDispatch()
    console.log(userInfo)
    useEffect(() => {
        if (session) {
            dispatch(addUser({
                name: session?.user?.name,
                email: session?.user?.email,
                image: session?.user?.image,


            })
            );
        }
    }, [session]);


    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
            <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4 ">
                {/* logo */}
                <Link href={"/"} className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
                    <Image className="w-32 object-cover " src={logo} alt="logoImg" />
                </Link>
                {/* delivery */}
                <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
                    <SlLocationPin />
                    <div className="text-xs">
                        <p>Deliver to</p>
                        <p className="text-white font-bold uppercase">India</p>
                    </div>
                </div>
                {/* searchbar */}
                <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative ">
                    <input className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none
                focus-visible:border-amazon_yellow" type="text" placeholder="Search amazon products" />
                    <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex
                items-center justify-center absolute right-0 rounded-md rounded-br-md">
                        <HiOutlineSearch />
                    </span>
                </div>




                <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            )}
          </div>










                <List
                    component="nav"
                    aria-label="Device settings"
                    sx={{ p: 0, m: 0 }}
                >
                    <ListItem
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClickListItem}
                        sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
                    >
                        <ListItemText
                            sx={{
                                ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                            }}
                            secondary={options[selectedIndex]}
                        />
                        <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "lock-button",
                        role: "listbox",
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>














                {/* signin */}
                {
                    userInfo ? <div
                        className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
                        <img src={userInfo.image} alt="userImage"
                            className="w-8 h-8 rounded-full object-cover" />
                        <div className="text-xs text-gray-100 flec flex-col
                    justify-between">
                            <p className="text-white font-bold">{userInfo.name}</p>
                            <p>{userInfo.email}</p>
                        </div>
                    </div> : <div onClick={() => signIn()} className="text-xs text-gray-100 flex flex-col justify-center px-2 border
            border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
                        <p>Hello, sign in</p>
                        <p className="text-white font-bold flex">Account & Lists{" "}<span>
                            <BiCaretDown /></span></p>
                    </div>
                }
                {/* favorite */}

                <Link href={"/Love"} className="text-xs text-gray-100 flex flex-col justify-center px-2 border
                        border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">

                    <div >
                        <p>Marked</p>
                        <p className="=text-white font-bold">& Favorite</p>
                        {
                            favoriteData.length > 0 && (
                                <span className="absolute right-2 top-2 w-4 h-4
                                    border-[1px] border-gray-400 flex items-center justify-center text-xs
                                    text-amazon_yellow">{favoriteData.length}</span>
                            )
                        }
                    </div>
                </Link>
                {/* cart */}
                <Link href={"/cart"} className="flex items-center px-2  border
            border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
                    <Image className="w-auto object-cover h-8" src={cartIcon} alt="cartImg" />
                    <p className="text-xs text-white font-bold mt-3">Cart</p>
                    <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
                        {productData ? productData.length : 0}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Header;