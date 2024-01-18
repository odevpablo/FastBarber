import React, { useState, useEffect } from 'react';
import { Button, Modal, Input, Select, Card, Col, Row } from 'antd';
import degrade from '../assets/degrade.jpg';
import axios from 'axios';
import moment from 'moment';
import Cortes from './Cortes';

const ModalView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [horarios, setHorarios] = useState<string[]>([]);
  const [cliente, setCliente] = useState('');
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState(null);
  

  useEffect(() => {
    const obterHorariosDaAPI = async () => {
      try {
        const response = await axios.get('http://localhost:8080/horarios');
        const horariosDaAPI = response.data;

        if (horariosDaAPI && horariosDaAPI.length > 0) {
          setHorarios(horariosDaAPI);
        } else {
          console.warn('Não há horários disponíveis');
        }
      } catch (error) {
        console.error('Erro ao obter horários da API', error);
      }
    };

    obterHorariosDaAPI();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  };

  const handleOk = async () => {
    try {
      const response = await axios.post('http://localhost:8080/agendamentos', {
        cliente: cliente,
        data: horarioSelecionado, 
        servico: selectedCard,
      });
  
      console.log('Agendamento criado:', response.data);
  
      setIsModalOpen(false);
    } catch (error) {
      console.error('Erro ao agendar:', error);
  
      if (error.response) {
        console.log('Resposta do servidor:', error.response.data);
      }
  
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const modalContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const modalTitleStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '30px',
  };
  

  return (
    <>
      <Button id='agendar' type="primary" onClick={showModal}>
        Agendar
      </Button>
      <Modal
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        okText="Agendar"
      >
        <div style={modalContentStyle}>
          <div style={modalTitleStyle}>Agendar Horário</div>
          <Input
            placeholder="Digite seu nome"
            style={{ marginBottom: '16px' }}
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
          <div className="Horarios">
            <Select
              placeholder="Selecione um horário"
              allowClear
              value={horarioSelecionado}
              onChange={(value) => setHorarioSelecionado(value)}
            >
              {horarios.length > 0 ? (
                horarios.map((horario) => (
                  <Select.Option key={horario} value={horario}>
                    {horario}
                  </Select.Option>
                ))
              ) : (
                <Select.Option disabled value="">
                  Não há horários disponíveis
                </Select.Option>
              )}
            </Select>
            <div className=''>
              <Row gutter={16}>
              <Col span={8}>
                <Card
                  title="Degradê"
                  bordered={false}
                  onClick={() => handleCardClick('Degradê')}
                  style={{ cursor: 'pointer', backgroundColor: selectedCard === 'Degradê' ? '#f0f0f0' : 'inherit' }}
                >
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Card title 1"
                  bordered={false}
                  onClick={() => handleCardClick('Card title 1')}
                  style={{ cursor: 'pointer', backgroundColor: selectedCard === 'Card title 1' ? '#f0f0f0' : 'inherit' }}
                >
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Card title 2"
                  bordered={false}
                  onClick={() => handleCardClick('Card title 2')}
                  style={{ cursor: 'pointer', backgroundColor: selectedCard === 'Card title 2' ? '#f0f0f0' : 'inherit' }}
                >
                  Card content
                </Card>
              </Col>
            </Row>
          </div>
            
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalView;
