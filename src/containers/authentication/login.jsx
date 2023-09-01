import React, {useState} from "react"
import { LoginWrapper } from "./loginStyle";
import { Button, Col, Form, Input, Row, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () =>{
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState({ isError: false, message: "" });
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const handleSubmit =() =>{
      localStorage.setItem("islogged",true);
    }



    return (
        <LoginWrapper>
            <img src={require('../../static/common/logo.png')} />
            <Col className="subtitle">
                
                <h4>WELCOME BACK!!</h4>
                <div>Happy to see you again</div>
                
            </Col>
            <Row>
            <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      layout="vertical"
      autoComplete="off"
      className="formLogin"
      name="login"
      form={form}
      onFinish={handleSubmit}
    >
      
      <Form.Item
      
        name="username"
        onChange={e => setUsername(e.target.value)}
        rules={[{  message: 'Please input your username!' }]}
        className="items"
      >
        <Row>
        <label>Email</label>
        {/* <img src={require('../../static/img/username.png')} alt="" className='userspace'/> */}
        <Input placeholder='Email' className="inputplac"/>
        </Row>
      </Form.Item>

      <Form.Item
        name="password"
        onChange={e => setPassword(e.target.value)}
        rules={[{  message: 'Please input your password!' }]}
        className="items"
      >
        <Row>
        <label>Password</label>
        {/* <img src={require('../../static/img/pwd.png')} alt="" className='userspace'/> */}
        <Input.Password placeholder='Password' className="inputplac"/>
        </Row>
      </Form.Item>
{isLoading?
( <Spin />):(
<div className='error'>
{error.message}
</div>
)
  
}

<Form.Item >
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
      
    </Form>

            </Row>
        </LoginWrapper>
    )
}

export default Login;
