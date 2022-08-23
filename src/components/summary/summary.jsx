import {ReactComponent as PlanSetting} from '../../assets/change-plan.svg'

import './summary.scss'

const Summary = () => {
  return (
    <div className='summary-container'>
        <div className='header-container'>
            <p>Overall Summary</p>
            <div className='change-duration'>
                <p>Annual</p>
                <PlanSetting />
            </div>
        </div>
        <div className='summary-data'>
            <div className='summary-total'>
                <p>$1.2m</p>
                <p>12 completed projects</p>
            </div>
            <div className='chart-info'>
                <div>
                    <div className='color purple'></div>
                    <p>Completed Project: $1.2m</p>
                </div>
                <div>
                    <div className='color blue'></div>
                    <p>Total Revenue: $1.2m</p>
                </div>
                <div>
                    <div className='color green'></div>
                    <p>Pending Project: 1.2m</p>
                </div>
                <div>
                    <div className='color orange'></div>
                    <p>Project Brief: 1.2m</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Summary