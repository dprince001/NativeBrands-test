import './notification.scss'

const Notification = () => {
  return (
    <div className='notification-dropdown'>
        <p className='title'>Notification</p>
        <div className='notication-info'>
            <p>Dear Chibuzo, you have not verify your Email. Please click the link on the verification email sent to you. 
            <a> Click here</a> to resend verification link.</p>

            <p>New project “GMA project” created. <a>Click here</a> to edit project details.</p>
        </div>
    </div>
  )
}

export default Notification