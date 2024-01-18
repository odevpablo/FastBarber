import React from "react";
import { Modal, Button } from "antd";

const ModalAdmin = ({ open, onOk, onCancel }) => {
  return (
    <Modal
      title="Configurações do Administrador"
      visible={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancelar
        </Button>,
        <Button key="ok" type="primary" onClick={onOk}>
          OK
        </Button>,
      ]}
    >
    </Modal>
  );
};

export default ModalAdmin;
