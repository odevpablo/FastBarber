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
      <div className="fromAcess">
        <Input
            placeholder="Usuário"
            style={{ marginBottom: '16px' }}
            value={adminconfig}
          />
        <Input
            placeholder="Senha"
            style={{ marginBottom: '16px' }}
            value={senha}
          />
        </div>
    </Modal>
  );
};

export default ModalAdmin;
