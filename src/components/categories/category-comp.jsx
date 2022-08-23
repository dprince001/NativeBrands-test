import './category.scss'

const Category = ({Image, title, Ecclipse}) => {
  return (
    <div className='category'>
        <div className='top'>
            <p>{title}</p>
            <Image />
        </div>
        <Ecclipse />
    </div>
  )
}

export default Category