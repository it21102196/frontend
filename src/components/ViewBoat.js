import axios from "axios";
import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



function View(){

    const [boats, setBoats] = useState([]);
    const Navigate=useNavigate()

 
  useEffect(() => {
    function getBoats() {
      axios
        .get("http://localhost:8080/Boat/")
        .then((res) => {
          setBoats(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getBoats();
  }, []);


  
    function getBoats(){
      axios.get("http://localhost:8080/Boat/").then((res)=>{
        setBoats(res.data);
  
      }).catch((err)=>{
        console.log(err.message)
        alert(err.message)
      })
    }
  
   
    const deleteBoat = (boatId) => {
        axios
          .delete(`http://localhost:8080/Boat/delete/${boatId}`)
          .then((res) => {
            alert(`deleted successfully`);
            window.location.reload(false);
          })
          .catch((err) => {
            alert(err);
          });
      };
    

      const UpdateBoat=(boatId)=>{
        console.log("error")
         Navigate('update',{ state: { id: boatId } }
         )
        
    
      }
    
      






//   const deleteNotice = (noticeId) => {
//     axios
//       .delete(`http://localhost:8070/notice/deleteNotice/${noticeId}`)
//       .then((res) => {
//         alert(`deleted successfully`);
//         window.location.reload(false);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   const UpdateNotice=(noticeId)=>{
//     console.log("erroe")
//      Navigate('updateNotice',{ state: { id: noticeId } }
//      )


    return(
<center>
        <div>
            <table>
        <thead>
            <tr>
            <th >Capacity</th>
              <th >Type</th>
              <th >Cost</th>
              <th >Description</th>
             
              <th >Remove</th>
              <th >Update</th>
              
            </tr>
            </thead>

            <tbody>
            {boats.map((item) => (
              <tr>
                <td>{item.Capacity}</td>
                <td>{item.Type}</td>
                <td>{item.Cost}</td>
                <td>{item.Description}</td>
                
                <td>
                  <button onClick={() => deleteBoat(item._id)}>Delete</button>
                </td>

                <td>
                <button onClick={() => UpdateBoat(item._id)}>Update</button>
                {}
                </td>

              
              </tr>
            ))}
            </tbody>
        </table>
        </div>
        </center>
    )
            
            }

export default View;