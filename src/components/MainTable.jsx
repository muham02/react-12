import { useState } from 'react'
import { Card, Table,Select,Popconfirm,message} from 'antd'
import { ADDCARD } from '../redux/action/types'
import { useDispatch } from 'react-redux'
import { GiBasket } from "react-icons/gi";
import { REMOVECARD } from "../redux/action/types"

const MainTable = ({user}) => {
 let dispatch = useDispatch()
    const columns = [
        {
          title: 'Rasmi',
          dataIndex: 'image',
       render:(item)=><img width={"100px"} src={item}/>
        },
        {
          title: 'Nomi',
          dataIndex: 'name',
          
        },
        {
          title: 'Tarkibi',
          dataIndex: "ingredients",
          
        },
        {
          title: 'Sotib olish',
          
      
          render:(data)=>
       
    <button onChange={()=>handleTableChange(data.id)} style={{background:'none',border:"none",cursor:"pointer"}}>
           ❌
          </button>
        }
       
      
      ];
    
    
      const handleTableChange = (id) => {
        console.log(id);
        dispatch({type:REMOVECARD,id})
        console.log(id);  
        message.success('Food added ');
      };
   
      const [tableParams, setTableParams] = useState({
        pagination: {
          current: 1,
          pageSize: 10,
        },
        
      })
      const handleChange = (value) => {
        setTableParams({
         ...tableParams,
         pagination:{
           ...tableParams.pagination,
           pageSize:value
         }
        })
         };
  return (
   <>
    <Table  dataSource={user} columns={columns}    pagination={tableParams.pagination} />
    <Select onChange={handleChange}
    defaultValue="10"
    style={{
      width: 120,
    }}
     options={[
       {
         value: '10',
         label: '10',
       },
       {
         value: '20',
         label: '20',
       },
       {
         value: '30',
         label: '30',
       },
      
     ]}
   />
   </>
  )
}

export default MainTable