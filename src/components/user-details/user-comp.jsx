import {ReactComponent as BellIcon} from '../../assets/Notification.svg'
import {ReactComponent as UserImage} from '../../assets/chibuzo.svg'
import {ReactComponent as DropdownArrow} from '../../assets/dropdown-arror.svg'

import { useContext } from "react";
import { UserContext } from '../../context/UserContext';

import './user-comp.scss'
import { NotificationContext } from '../../context/NotificationContext';

const UserComp = () => {

  const {isOpen, setIsOpen} = useContext(UserContext);
  const {isNotiOpen, setIsNotiOpen} = useContext(NotificationContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const handleNotiClick = () => {
    setIsNotiOpen(!isNotiOpen);
  }

  return (
    <div className='user-details-container'>
        <div className='notifications' onClick={handleNotiClick}>
          <span>2</span>
            <BellIcon />
        </div>

        <div className='user' onClick={handleClick}>
            <UserImage />
            <p>chibuzor <span><DropdownArrow /></span></p>
        </div>
    </div>
  )
}

export default UserComp