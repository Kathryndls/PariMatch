import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Modal from "./Modal";

const DashboardColumn = ({title, titleColor, cards, allCards, setCards, status}) => {
   const [isModalVisible, setIsModalVisible] = useState(false);

   return (
      <DashboardColumnWrapper className="dashboard__column">
         <DashboardColumnHeader className="dashboard__column-header">
            <h2 className="dashboard__column-title" style={{color: titleColor}}>{title}</h2>

            <DashboardColumnHeaderActions className="dashboard__column-action">
               <AddButton onClick={() => setIsModalVisible(prevState => !prevState)}>add</AddButton>
               <EditButton>edit</EditButton>
               <DeleteButton>delete</DeleteButton>
            </DashboardColumnHeaderActions>
         </DashboardColumnHeader>

         <DashboardColumnBody className="dashboard__column-body">
            {cards.map(card => 
               <Card key={card.id} data={card} setCards={setCards} setIsModalVisible={setIsModalVisible} />
            )}

         </DashboardColumnBody>

         <Modal isVisible={isModalVisible} onHide={() => setIsModalVisible(false)} allCards={allCards} createCardHandler={setCards} status={status} />
      </DashboardColumnWrapper>
   );
}

export default DashboardColumn;

const DashboardColumnWrapper = styled.div`
   padding: 10px 20px;
   width: 20%;
   overflow: auto;
   height: 85vh;
   border: 2px solid rgba(0,0,0,0.1);
   border-radius: 7px;
`;

const DashboardColumnHeader = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const DashboardColumnHeaderActions = styled.div`
   max-width: 60%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const DashboardColumnBody = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
`;

export const AddButton = styled.button`
   width: 60px;
   height: 25px;
   background-color: #e5c50d;
   border: 3px solid #ddbc00;
   border-radius: 7px;
   color: #fff;
`;

export const EditButton = styled.button`
   width: 60px;
   height: 25px;
   background-color: #3abbea;
   border: 3px solid #00aded;
   border-radius: 7px;
   color: #fff;
`;

export const DeleteButton = styled.button`
   width: 60px;
   height: 25px;
   background-color: #ff6060;
   border: 3px solid #e50000;
   border-radius: 7px;
   color: #fff;
`;