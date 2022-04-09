import React from 'react';
import "./index.css";

import post01 from"./img/post01.jpg";
import post02 from"./img/post02.jpg";
import post03 from"./img/post03.jpg";
import clip from"./img/clip.png";
import comment from"./img/comment.png";

const Dashboard = () => {
    return (
        <>
            <div className="container">
                <section>
                    <div className="block">
                        <div className="block__header-wrapper">
                            <h3 className='block__title block-backlog'>Backlog</h3>
                            <b>...</b>
                        </div>

                        <div className="block__card">
                            <div className="block__card-wrapper">
                                <div className="block__card-inner">
                                    <p className="block__card-title">Landingpage</p>
                                    <button className="block__card_btn-edit">Edit</button>
                                </div>
                                <p className="block__card-subtitle">Revisit Homepage Wickrpark.io</p>    
                            </div>

                            <img className="block__card_icon" src={post01} alt="post"/>

                            <div className="block__card_actions">
                                <img className="block__card_icons-clip" src={clip} alt="clip"/>
                                <p>2 files</p>

                                <img  className="block__card_icons-comment" src={comment} alt="comment"/>
                                <p>2 commemt</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="block">
                        <div className="block__header-wrapper">
                            <h3 className="block__title block_progress">In Progress</h3>
                            <b>...</b>
                        </div>

                        <div className="block__card">
                            <div className="block__card-wrapper">
                                <div className="block__card-inner">
                                    <p className="block__card-title">Landingpage</p>
                                    <button className="block__card_btn-edit">Edit</button>
                                </div>
                                <p className="block__card-subtitle">Revisit Homepage Wickrpark.io</p>    
                            </div>
                            <img className="block__card_icon" src={post03} alt=""/>

                            <div className="block__card_actions">
                                <img className="block__card_icons-clip" src={clip} alt="clip"/>
                                <p>2 files</p>

                                <img  className="block__card_icons-comment" src={comment} alt="comment"/>
                                <p>2 commemt</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="block">
                        <div className="block__header-wrapper">
                            <h3 className='block__title block_review'>In Review</h3>
                            <b>...</b>
                        </div>

                        <div className="block__card">
                            <div className="block__card-wrapper">
                                <div className="block__card-inner">
                                    <p className="block__card-title">Landingpage</p>
                                    <button className="block__card_btn-edit">Edit</button>
                                </div>
                                <p className="block__card-subtitle">Revisit Homepage Wickrpark.io</p>    
                            </div>

                            <div className="block__card_actions">
                                <img className="block__card_icons-clip" src={clip} alt="clip"/>
                                <p>2 files</p>

                                <img  className="block__card_icons-comment" src={comment} alt="comment"/>
                                <p>2 commemt</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="block">
                        <div className="block__header-wrapper">
                            <h3 className='block__title block_done'>Done</h3>
                            <b>...</b>
                        </div>

                        <div className="block__card">
                            <div className="block__card-wrapper">
                                <div className="block__card-inner">
                                    <p className="block__card-title">Landingpage</p>
                                    <button className="block__card_btn-edit">Edit</button>
                                </div>
                                <p className="block__card-subtitle">Revisit Homepage Wickrpark.io</p>    
                            </div>
                            
                            <img className="block__card_icon" src={post02} alt=""/>

                            <div className="block__card_actions">
                                <img className="block__card_icons-clip" src={clip} alt="clip"/>
                                <p>2 files</p>

                                <img  className="block__card_icons-comment" src={comment} alt="comment"/>
                                <p>2 commemt</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;