import { useEffect, useState  } from "react";
import axios from "axios";
export const ShowStudents = () => {
    const [data1, setData1] = useState([]);
    const getData = () => {
        axios.get('http://localhost:8080/students').then((res) => {
            setData1(res.data);
            console.log("SetData1",res.data);
        });
    };

    useEffect(() => {
        getData();
    },[]);
    
    return (
    
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {data1[0] && data1.map((e,i) => (
                <tr className="row" key={i}>
                <td>{e.id}</td>
                <td className="first_name">{e.first_name}</td>
                <td className="last_name">{e.last_name}</td>
                <td className="email">{e.email}</td>
                <td className="gender">{e.gender}</td>
                <td className="age">{e.age}</td>
                <td className="tenth_score">{e.tenth_score}</td>
                <td className="twelth_score">{e.twelth_score}</td>
                <td className="preferred_branch">{e.preferred_branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };