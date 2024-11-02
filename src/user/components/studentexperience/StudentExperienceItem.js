import './StudentExperienceItem.css'

function StudentExperienceItem({name, content, image}) {

    return (
        <div className='StudentExperienceItem'>
            <div className="StudentExperienceItem__heading">
                <div className="StudentExperienceItem__heading--image">
                <img src={image} alt='img' />
                </div>
                <div className="StudentExperienceItem__heading--name">
                    <p>{name}</p>
                </div>
            </div>
            <div className="StudentExperienceItem__content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default StudentExperienceItem;