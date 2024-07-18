import { useState } from 'react'
import { Card, Table,Select,Popconfirm,message} from 'antd'
import { ADDCARD } from '../redux/action/types'
import { useDispatch } from 'react-redux'
import { GiBasket } from "react-icons/gi";

const MainTable = ({user}) => {
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
          <Popconfirm
    title="Add Foods"
    description="Are you sure to add this foods?"
    onConfirm={()=>confirm(data)}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
    >
    <button style={{background:'none',border:"none"}}>
            <GiBasket style={{width:"50px",height:"50px"}}/>
          </button>
    </Popconfirm>
        }
       
      
      ];
    
      const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
          pagination,
          filters,
          sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
          sortField: Array.isArray(sorter) ? undefined : sorter.field,
        });
      }
      const confirm = (data) => {
        dispatch({type:ADDCARD,foods:data})
       
        message.success('Food added ');
      };
      const cancel = (e) => {
        console.log(e);
        message.error('No food added');
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
    <Table  dataSource={user} columns={columns} onChange={handleTableChange}   pagination={tableParams.pagination} />
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