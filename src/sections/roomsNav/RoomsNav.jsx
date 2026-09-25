import React, { useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

import bed from '../../assets/bed-icon.svg';
import chair from '../../assets/chair-icon.svg';
import glass from '../../assets/dinning-room-icon.svg';
import office from '../../assets/office-icon.svg';

const roomsData = [
  { id: 'bedroom', name: 'BEDROOM', icon: bed },
  { id: 'lounge', name: 'LOUNGE', icon: chair },
  { id: 'dining', name: 'DINING ROOM', icon: glass }, // 'dining' com 1 'n' para bater com o showcaseData
  { id: 'office', name: 'OFFICE', icon: office },
];

const RoomsNav = () => {
  const navigate = useNavigate();
  // Mantém 'dining' selecionado por padrão como no Figma
  const [activeRoom, setActiveRoom] = useState('dining');

  const handleRoomClick = (roomId) => {
    setActiveRoom(roomId);
    // Redireciona para a página de projects passando a categoria selecionada na URL
    navigate(`/projects?category=${roomId}`);
  };

  return (
    <S.RoomsContainer aria-label="Navegação por cômodos">
      {roomsData.map((room) => {
        const isActive = activeRoom === room.id;

        return (
          <S.RoomCard
            key={room.id}
            $isActive={isActive}
            onClick={() => handleRoomClick(room.id)}
          >
            <img src={room.icon} alt={room.name} />
            <p>{room.name}</p>
          </S.RoomCard>
        );
      })}
    </S.RoomsContainer>
  );
};

export default RoomsNav;  