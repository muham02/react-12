import { Card, Table,Select,Popconfirm,message} from 'antd'
import Meta from 'antd/es/card/Meta'
import axios from '../api'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { GiBasket } from "react-icons/gi";
import { useDispatch } from 'react-redux'
import { ADDCARD } from '../redux/action/types'
const User = () => {
  const [data,setData] = useState([])
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
    
  });
  let dispatch = useDispatch()
  useEffect(()=>{
    try{
     const getData = async()=>{
   let respnce = await axios("/recipes")
   setData(respnce.data.recipes);
     } 
     getData()
    }
   
    catch(error){
      console.log(error);
    }
  },[])
  const [isDisabled, setIsDisabled] = useState(false);
  const confirm = (data) => {
    dispatch({type:ADDCARD,foods:data})
    message.success('Food added ');
    
  };
  const cancel = (e) => {
    console.log(e);
    message.error('No food added');
  };
  
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
   <button  style={{background:'none',border:"none"}}>
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
    <Table  dataSource={data} columns={columns} onChange={handleTableChange}   pagination={tableParams.pagination} />
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

export default User