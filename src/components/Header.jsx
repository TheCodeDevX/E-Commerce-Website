



    import React, {useState} from 'react'
    import { brainwave } from '../assets'
    import { navigation } from '../constants'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import MenuSvg from '../assets/svg/MenuSvg'
import {HamburgerMenu} from './design/Header'
import {disablePageScroll, enablePageScroll} from 'scroll-lock'
    
    const Header = () => {
        // const [isActive, setIsActive] = useState('');
       // ${  isActive === title ? 'lg:text-n-1 z-2' : 'lg:text-n-1/50' }
       // the main different betweeen useState('') and useLocation() to make a current color for each link when u hover it
       // the useState method u need onClick and u need ensure from the title cuz it reprents a string but in useLocation
       // we reprents the path or href whatever is it so u need to add hash property to the pathname in the verification method
       // and u don't have to use onClick ....  
        const pathname = useLocation();
        const [openNavigation, setOpenNavigation] = useState(false);


        const toggleNavigation = () => {
           if(openNavigation) {
            setOpenNavigation(false);
            // if opennav.. is false then we set it in else block so open the navigation and stop scrolling 
            //  but if true then set it in if block and close the navigation and enable scrolling 
            enablePageScroll()
           } else {
            setOpenNavigation(true)
            disablePageScroll()
           }
        }

        
        const handleClick = () =>  {
            setOpenNavigation(false) // true state
            if(!openNavigation) return; //this true state
            enablePageScroll()
            //  so if openNavigation here already opend nothing happend but
            //  if was open then when click then active the scrolling and close the menu
        }


        // const handleClick = () => {
        //   setOpenNavigation(false); // this is the false state it's closed here so 
        //    // do not forget in toggle we click to openNavigation and closed it so here we active the scrolling  
        // }
      return (
        <div className={`fixed top-0 left-0 w-full z-5 bg-n-8/100 border-b border-n-6
        lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
          
          <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
          <a href="/" className='block w-[12rem] xl:mr-8'>
            <img src={brainwave} width={190} height={40} alt="brainwave"/>
          </a>
          <nav className={` ${openNavigation ? 'flex' : 'hidden'}
           fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto 
          lg:bg-transparent`}>
             <div className='relative z-2 flex flex-col items-center justify-center mx-auto lg:flex-row'>
               {navigation.map(({id, title, url, onlyMobile}) => (
                <a onClick={handleClick}  key={id} href={url} className={`block relative font-code text-[16px] uppercase
                    ${url === pathname.hash ? 'lg:text-n-1 z-2' : 'lg:text-n-1/50' } 
                      transition-colors lg:leading-5 lg:hover:text-n-1 xl:px-12
                px-6 py-6 md:py-8 lg:mr-0.25 lg:font-semibold hover:text-color-1 ${onlyMobile && 'lg:hidden'}`}>
                 {title}
                </a>
               ))}
             
             </div>
             <HamburgerMenu/>
          </nav>
          <a href="#signup" className='button hidden mr-8 text-[16px] text-n-1/50 transition-colors hover:text-n-1 lg:block'>
          New account
          </a>
          <Button className="hidden lg:flex " href="#login">
          Sign In
          </Button>
           
          <Button className="ml-auto lg:hidden" px="px-3"
           onClick={toggleNavigation} ><MenuSvg openNavigation={openNavigation}/></Button>
          </div>
         
        </div>
      )
    }
    
    export default Header
    