import React, { useState } from 'react';
import * as S from './style';

import bed from '../../assets/bed-icon.svg';
import chair from '../../assets/chair-icon.svg';
import glass from '../../assets/dinning-room-icon.svg';
import office from '../../assets/office-icon.svg';

const roomsData = [
  { id: 'bedroom', name: 'BEDROOM', icon: bed },
  { id: 'lounge', name: 'LOUNGE', icon: chair },
  { id: 'dinning', name: 'DINING ROOM', icon: glass },
  { id: 'office', name: 'OFFICE', icon: office },
];

const RoomsNav = () => {
  // Mantém 'dinning' selecionado por padrão como no Figma
  const [activeRoom, setActiveRoom] = useState('dinning');

  return (
    <S.RoomsContainer aria-label="Navegação por cômodos">
      {roomsData.map((room) => {
        const isActive = activeRoom === room.id;

        return (
          <S.RoomCard
            key={room.id}
            $isActive={isActive}
            onClick={() => setActiveRoom(room.id)}
          >
            <img src={room.icon} alt={room.name} />
            <p>{room.name}</p>
          </S.RoomCard>
        );
      })}
    </S.RoomsContainer>
  );
};

export default RoomsNav