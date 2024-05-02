import { useContext } from "react";
import UsersContext from "../context/UsersContext";
import "./css/Profile.css"

const SingleProduct = ({user}:{user: User}) => {

  const {setUserId} = useContext(UsersContext);

 const handleView = (UserId: number) => {
  setUserId(UserId);

 };

  return (
    <div className='result-item'>
                    <figure className="fir-image-figure">
                        <a className="fir-imageover" rel="noopener" target="_blank" >
                            <img className="fir-author-image fir-clickcircle" src={user.image} alt={user.name}></img>
                        </a>

                        <figcaption>
                            <div className="fig-author-figure-title">{user.name }</div>
                            <div className="fig-author-figure-title">Job: {user.job}</div>
                            <button onClick={()=>handleView(user.id)}>View</button>
                        </figcaption>
                    </figure>
                </div>
  )
}

export default SingleProduct