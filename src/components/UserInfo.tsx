import { useContext } from "react";
import UsersContext from "../context/UsersContext";
import "./css/UserInfo.css"

const SingleProduct = ({user}:{user: User}) => {

  const {setUserId} = useContext(UsersContext);

  /*
 const handleView = (UserId: number) => {
  setUserId(UserId);

 };
*/
 //<button onClick={()=>handleView(user.id)}>View</button>

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