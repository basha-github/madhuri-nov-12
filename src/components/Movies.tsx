
export default function Movies() {
  // int[] a
  // for (int i=1;i<=5;i++{})
    const cities  =[10,1.345,45000,"Delhi","HYD","Bangalore","Vizag"];
  

  return <div>
    {cities.map(

        (kk)=>(
           
                <div>
                    {kk}
                    <br></br>
                </div>
            
        )
    )}
    
    </div>;
}
