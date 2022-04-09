import React, { useState } from "react";
import styled from "styled-components";
import DashboardColumn from "./DashboardColumn";


const Dashboard = () => {
   const [cards, setCards] = useState([
      {
         id: 1,
         title: 'First',
         imgUrl: 'https://bit.ly/3KVsZQB',
         description: 'lorem ipsum bla-bla-bla',
         status: 'stopped'
      },
      {
         id: 2,
         title: 'Second',
         imgUrl: 'https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg',
         description: '2 asd asd asdawwqwfq',
         status: 'in progress'
      },
      {
         id: 3,
         title: 'Third',
         imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3i__P7KEOLbpBa_FIV1wBSE_sugx_Es-sB_4eBnwzRV949n0uLbfxuzCTS9AoDqbW-vg&usqp=CAU',
         description: '3 lkj;l kj sdlfkjhds flkajsd ',
         status: 'done'
      }
   ]);
   console.log('CARSSSS', cards);
   return (
      <DashboardWrapper className="dashboard">
         <DashboardColumn 
            titleColor="red" 
            title={'Stopped'} 
            allCards={cards}
            cards={cards.filter(card => card.status === 'stopped')} 
            status={'stopped'}
            setCards={setCards}
         />

         <DashboardColumn 
            titleColor="orange" 
            title={'In progress'} 
            allCards={cards}
            cards={cards.filter(card => card.status === 'in progress')} 
            status={'in progress'}
            setCards={setCards}
         />

         <DashboardColumn 
            titleColor="green" 
            title={'Done'} 
            allCards={cards}
            cards={cards.filter(card => card.status === 'done')} 
            status={'done'}
            setCards={setCards}
         />
      </DashboardWrapper>
   )
}

export default Dashboard;

const DashboardWrapper = styled.div`
   display: flex;
   justify-content: space-around;
`;