import React, { useEffect, useState } from "react";
import "./profile.css";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
  const getUser = async () => {
    const thisUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(await thisUser.json())

    console.log(user)
  };
    getUser();
  }, []);
 
  return (
    <div className="profile_wrapper">
      <div className="profile_top_box">
        <div className="profile_top">
          <div className="top_space"></div>
          <div className="profile_name_box">
            <div className="profile_name">{user.name}</div>
          </div>
          <div className="top_space1"></div>
        </div>
      </div>
      <div className="profile_bottom">
        <div className="bottom_space"></div>
        <div className="bottom_city">{user.city}Springfield</div>
        <div className="bottom_mail">{user.email}</div>
        <div className="bottom_number">{user.phone}</div>
        <button className="btn_write">
            <Link to={`/Profile/comment`} className="button_link">Написать сообщение</Link>
        </button>
        <button className="btn_invite">Предложить сходить на концерт</button>
        <div className="bottom_space1"></div>
      </div>

      <div className="posts_wrapper">
        <div className="posts_header">Посты</div>
        <div className="posts">
          <div className="post">
            <div className="post_top">
              <div className="post_name">Twenty One Pilots</div>
              <div className="post_data">12.01.22</div>
            </div>
            <div className="post_body">
              Просто шикарный альбом, Пилоты после Blurryface решили не идти
              проторенной дорожкой, и сделали что то новое. На мой взгляд у них
              на 100% получилось, альбом слушается на одном дыхании, каждая
              песня чем то запоминается, естественно нужно понимать тексты,
              чтобы вникнуть до конца во весь сюжет и атмосферу альбома....
            </div>
          </div>
          <div className="post">
            <div className="post_top">
              <div className="post_name">Twenty One Pilots</div>
              <div className="post_data">12.01.22</div>
            </div>
            <div className="post_body">
              Просто шикарный альбом, Пилоты после Blurryface решили не идти
              проторенной дорожкой, и сделали что то новое. На мой взгляд у них
              на 100% получилось, альбом слушается на одном дыхании, каждая
              песня чем то запоминается, естественно нужно понимать тексты,
              чтобы вникнуть до конца во весь сюжет и атмосферу альбома....
            </div>
          </div>
        </div>
      </div>
      <div className="public_wrapper">
        <div className="public_top">Публикации</div>
        <div className="publics">
          <div className="public1"></div>
          <div className="public2"></div>
          <div className="public3"></div>
          <div className="public4"></div>
          <div className="public5"></div>
          <div className="public6"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
