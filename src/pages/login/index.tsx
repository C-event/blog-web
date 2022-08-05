import { Form, Input, Button } from 'antd'
import { user } from '../../utils/apis'
import { setSession } from '@/utils/tool'

type Props = {}

export default function index({}: Props) {

  const [loginForm] = Form.useForm()

  const Login = () => {
   let data = loginForm.getFieldsValue(true)
   user.login(data).then((res:any) => {
    setSession(res.token)
   })
  }

  return (
    <>g
      <h1 style={{textAlign:'center'}}>登录</h1>
      <Form form={loginForm}>
        <Form.Item label='用户名' name='nickname'>
          <Input/>
        </Form.Item>
        <Form.Item label='密码' name='password'>
          <Input type='password' />
        </Form.Item>
      </Form>
      <Button onClick={Login}>登录</Button>
    </>
  )
}