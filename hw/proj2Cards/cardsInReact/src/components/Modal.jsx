import React, { useState } from "react";
import styled from "styled-components";

export const Modal = ({isVisible, onHide, allCards, createCardHandler, status}) => {
   const [title, setTitle] = useState('');
   const [imgUrl, setImgUrl] = useState('');
   const [description, setDescription] = useState('');
   const [error, setError] = useState(false);

   const onCreateCardHandler = () => {
      if (title && imgUrl && description) {
         createCardHandler(prev => [
            ...prev,
            {
               id: Date.now(),
               title,
               imgUrl,
               description,
               status
            }
         ]);

         setTitle('');
         setImgUrl('');
         setDescription('');
         onHide(false);
         setError(false);
      } else {
         setError(true);
      }
   }

   return (
      <>
         {isVisible
         ? (
            <Overlay>
               <ModalWrapper>
                  <ModalHeader>
                     <h1>Create card</h1>
                     <CloseBtn onClick={() => onHide(false)}>&times;</CloseBtn>
                  </ModalHeader>
                  
                  <input style={inputStyles} type="text" placeholder="Title" value={title}  onChange={(event) => setTitle(event.target.value)} />
                  <input style={inputStyles} type="text" placeholder="Image URL" value={imgUrl}  onChange={(event) => setImgUrl(event.target.value)} />
                  <textarea style={inputStyles} placeholder="Description" value={description}  onChange={(event) => setDescription(event.target.value)} />


                  <button style={{width: '150px', height: '40px'}} onClick={onCreateCardHandler}>Create</button>
                  
                  {error ? <span style={{color: 'red'}}>Все поля должны быть заполнены!</span> : null}
               </ModalWrapper>
            </Overlay>
         )
         : null}
      </>
   )
}

export default Modal;

const inputStyles = {
   width: '100%',
   height: '40px'
}

const Overlay = styled.div`
   width: 100%;
   height: 100vh;
   position: absolute;
   top: 0;
   left: 0;
   background-color: rgba(0,0,0,0.5);
`;

const ModalWrapper = styled.div`
   width: 700px;
   height: 400px;
   padding: 20px 30px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background-color: #fff;
   border: 3px solid rgba(0,0,0,0.4);
   border-radius: 7px;
`;

const ModalHeader = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const CloseBtn = styled.div`
   font-size: 30px;
   cursor: pointer;
`;