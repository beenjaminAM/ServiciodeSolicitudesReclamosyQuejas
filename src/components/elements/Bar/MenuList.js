import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { 
    HomeOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
    PayCircleOutlined,
    BarsOutlined
} from '@ant-design/icons'


const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
        <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="registrar" icon={<AppstoreOutlined />}>
            <Link to="/formularioRQS">Registrar</Link>
        </Menu.Item>
        <Menu.SubMenu
            key='tasks'
            icon={<BarsOutlined />}
            title="Tasks"
        >
            <Menu.Item key='task-1'><Link to="/Reclamos">Solicitudes</Link></Menu.Item>
            <Menu.Item key='task-2'><Link to="/Reclamos">Reclamos</Link></Menu.Item>
                <Menu.SubMenu
                key='subtasks'
                title="Quejas"
                >
                    <Menu.Item key='subtask-1'><Link to="/Reclamos">Resueltas</Link></Menu.Item>
                    <Menu.Item key='subtask-2'><Link to="/Reclamos">Pendientes</Link></Menu.Item>
                    
                </Menu.SubMenu>
            
        </Menu.SubMenu>
        <Menu.Item key="progress" icon={<AreaChartOutlined />}>
            <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="payment" icon={<PayCircleOutlined />}>
            Payment
        </Menu.Item>
    </Menu>
  )
}

export default MenuList