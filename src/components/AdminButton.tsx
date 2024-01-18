import React, { useState } from "react";
import { Button, Modal } from "antd";
import { EllipsisOutlined } from '@ant-design/icons';

import ModalAdmin from "./ModalAdmin";

const AdminButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
        <>
          <Button type="primary" icon={<EllipsisOutlined />} onClick={showModal}>
          </Button>
          <ModalAdmin open={isModalOpen} onOk={handleOk} onCancel={handleCancel} />
        </>
    );
};

export default AdminButton;
