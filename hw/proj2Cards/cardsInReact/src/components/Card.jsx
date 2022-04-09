import React from "react";
import styled from "styled-components";
import { DeleteButton, EditButton } from "./DashboardColumn";

const Card = ({data, setCards, setIsModalVisible}) => {
   const onDelete = (id) => {
      setCards(prev => prev.filter(card => card.id !== id))
   }

   const onEdit = (id) => {
      setIsModalVisible(prevState => !prevState)
   }

   return (
      <DashboardColumnCard className="dashboard__column-item column-item">
         <DashboardColumnCardHeader>
            <h3>{data.title}</h3>

            <EditButton onClick={() => onEdit(data.id)}>edit</EditButton>
            <DeleteButton onClick={() => onDelete(data.id)}>delete</DeleteButton>
         </DashboardColumnCardHeader>
         
         <Image src={data.imgUrl} alt={data.title} />
         <p>{data.description}</p>
      </DashboardColumnCard>
   )
}

export default Card;

const DashboardColumnCard = styled.div`
   margin: 10px 0;
   padding: 10px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   border-radius: 7px;
   box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.2);
`;

const DashboardColumnCardHeader = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-around;
`;

const Image = styled.img`
   width: 80%;
   margin: 0 auto;
`;