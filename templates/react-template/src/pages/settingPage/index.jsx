import { useEffect, useState } from "react";
import { Select, Form, Button } from "antd";
import { imageUrl } from "../../constants/Resources";
import { useNavigate } from 'react-router-dom';
import { setShelfId, setWarehouseId } from '../../utils/session';
import LoginApi from "../../api/loginApi";
import "../../style/settingPage.scss";

function SettingPage(props) {
  const [loginWarehouse, setLoginWarehouse] = useState([]);
  const [shelfList, setShelfList] = useState([]);
  const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    // 获取仓库信息
    getAllLoginWarehouse();
  }, []);

  useEffect(() => {
    if (!selectedWarehouseId) return;
    // 获取货架信息
    getShelf(selectedWarehouseId);
  }, [selectedWarehouseId]);

  let getAllLoginWarehouse = () => {
    LoginApi.loadWarehouseSearch().then((res) => {
      if (!res) return;
      setLoginWarehouse(
        res.data.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        })
      );
    }).catch(err => {
      console.log(err)
    })
  };

  let getShelf = (id) => {
    let param = { warehouseId: id, shelfTypes: ['LAYER_SHELF'] };
    LoginApi.getAutoShelfList(param).then((res) => {
      if (!res) return;
      setShelfList(
        res.data.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        })
      );
    }).catch(err => {
      console.log(err)
    })
  };

  let onSubmit = async() => {
    try {
      const values = await form.validateFields();
      setShelfId(values.shelfId);
      setWarehouseId(values.warehouseId);
      navigate("/login");
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }

  let warehouseIdChange = (value) => {
    setSelectedWarehouseId(value);
    form.setFieldsValue({shelfId: null})
  };

  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(${imageUrl.SETTING_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="system-label">
				<div style={{fontSize:'4vw'}}>XXXX</div>
				<div style={{fontSize:'3vw'}}>XXXX系统</div>
			</div>
      <div className="login-content">
        <div className="login-content-form">
          <Form form={form}>
            <Form.Item
              className="login-content-formItem"
              name="warehouseId"
              label="登录仓库"
              rules={[
                {
                  required: true,
                  message: '仓库不能为空',
                },
              ]}
            >
              <Select
                options={loginWarehouse}
                placeholder="请选择仓库"
                onChange={warehouseIdChange}
              />
            </Form.Item>
            <Form.Item
              className="login-content-formItem"
              name="shelfId"
              label="登录货架"
              rules={[
                {
                  required: true,
                  message: '货架不能为空',
                },
              ]}
            >
              <Select
                placeholder="请选择货架"
                options={shelfList}
              />
            </Form.Item>
            <Form.Item>
              <Button className="login-content-btn" type="primary" onClick={onSubmit}>
                确认
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SettingPage;
