import React , {useState, useEffect} from 'react'
import axios from 'axios'
const User = () => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        axios.get('https://randomuser.me/api')
        .then((res) => {
            console.log('res ', res)
            setUserData(res.data.results[0])
        })
        .catch((err) => {
            console.log('err ', err)
        })
    }, [])
    return(
        <div>
            <h1> User Data </h1>
            <div className='row'>
                {userData && Object.keys(userData).length > 0 && (
                    <>
                        <div className='col-1'>
                            <img src={userData.picture.large} />  
                        </div>
                        <div className='col-2'>
                            <h1> Name:    
                               <span className='name-color'> {userData.name.title}
                                {userData.name.title  + ' ' + userData.name.first + ' ' + userData.name.last} 
                               </span> 
                            </h1>
                            <h2> Gender: 
                                <span className={userData.gender == 'male' ? 'male-color' : 'female-color' }>
                                    {userData.gender} 
                                </span> 
                            </h2>
                            <h2> Location: 
                            <span className='country-color'> {userData.location.country} </span>
                            </h2>
                            <h3> Email: 
                            <span className='email-color'> {userData.email} </span> </h3>
                            <h3> Age: 
                               <span className='age-color'> {userData.dob.age} </span>
                            </h3>
                            <h3> Phone No: 
                               <span className='phone-color'> {userData.cell} </span>
                            </h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
export default User