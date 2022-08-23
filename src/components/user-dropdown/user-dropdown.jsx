import {ReactComponent as UserIcon} from '../../assets/chibuzo.svg'
import {ReactComponent as ProfileIcon} from '../../assets/User.svg'
import {ReactComponent as SettingsIcon} from '../../assets/Settings.svg'
import {ReactComponent as LoginIcon} from '../../assets/Login.svg'
import {ReactComponent as HelpIcon} from '../../assets/Help-Circle.svg'
import { ReactComponent as UsersIcon } from "../../assets/Users.svg";


import './user-dropdown.scss'
import { useState } from 'react'


const UserDropdown = () => {


  return (
    <div className='user-dropdown'>
        <p className='user-profile'>User Profile</p>
        <div className='user-info'>
            <UserIcon />
            <div>
                <p className='username'>Chibuzo Michael</p>
                <p className='job'>System Designer</p>
            </div>
        </div>
        <div className='active'>
            <ProfileIcon />
            <p>Profile</p>
        </div>
        <div>
            <UsersIcon fill='black'/>
            <p>Team Management</p>
        </div>
        <div>
            <SettingsIcon />
            <p>Settings</p>
        </div>
        <div>
            <HelpIcon />
            <p>Need Help?</p>
        </div>

        <button><span><LoginIcon /></span> LOG OUT</button>
    </div>
  )
}

export default UserDropdown