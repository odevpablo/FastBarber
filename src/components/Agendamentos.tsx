import React from 'react';
import { Card } from 'antd';
import ModalView from './Modal';
import barbeiro from '../assets/barbeiro.jpg';

const { Meta } = Card;

const Agendamento: React.FC = () => (
  <Card
    id='agendamentos'
    hoverable
    style={{ width: 300, background:'none', borderRadius:'1em'}}
    cover={<img alt="example" src={barbeiro} style={{borderRadius: '2%'}} />}
  >
    <Meta
      title="Emerson Júneo" 
      description=""
    />
    <ModalView />
  </Card>
);

export default Agendamento;
