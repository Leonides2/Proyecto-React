
import "./css/UserInfo.css"

const SingleProduct = ({user}:{user: User}) => {


  return (
    <div className='result-item'>
                    <figure className="fir-image-figure">
                        <div>
                            <img className="fir-author-image fir-clickcircle" src={user.image} alt={user.name}></img>
                        </div>

                        <div>
                            <div className="fig-author-figure-title">{user.name }</div>
                            <div className="fig-author-figure-title">Job: {user.job}</div>
                        </div>
                    </figure>
    </div>
  )
}

export default SingleProduct