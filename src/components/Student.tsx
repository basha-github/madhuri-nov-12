import React from 'react'

export default function Student() {

let student = [
    {
      name: "Ramu",
      rollNo: 1234,
      college: "DRK",
      fee: 45000,
    },
    {
      name: "Shyam",
      rollNo: 4567,
      college: "CBIT",
      fee: 65000,
    },
  ];
const des = "-----------------------------------";
  return (
    <div>

{student.map(

    (eachStudent)=>(
        <div>
        {des}
                <br></br>
            MYName:{eachStudent.name}
            <br></br>
            RollNo:{eachStudent.rollNo}
            <br></br>
            MyCollege:{eachStudent.college}
            <br></br>
            CollegeFee:{eachStudent.fee}
        <br></br>
        {des}
        </div>
    )
)}


    </div>
  )
}
