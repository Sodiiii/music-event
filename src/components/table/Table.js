import React from "react";
import { useEffect, useState } from "react";
import "./table.css";
import { getUsers } from "../../network";
import { Link } from 'react-router-dom'

const Table = () => {
  const [users, setUsers] = useState(null);
  const getResourse = async () => {
    const users = await getUsers().then((users) => users);

    const  usersList  = users
      .map((element) => {
        return {
          id: element.id,
          name: element.name,
          city: element.address.city,
          mail: element.email,
          phone: element.phone,
        };
      })
      .slice(0, 4);
      console.log(usersList)
    setUsers(usersList);
  };

  useEffect(() => {
    getResourse("https://jsonplaceholder.typicode.com/users");
  }, []);

 

  return (
    <div className="table_wrapper">
      <div className="table_top">
        <h1 className="top">Купили билеты</h1>
        <div className="count">
          <h1>932/</h1>
          <h1 className="count_max">1000</h1>
        </div>
      </div>
      {users && (
        <div className="users_cards">
          {users.map(({id, name, city }) => (
            <div className="card">
              <div className="user_name" key={name}>
                {name}
              </div>
              <div className="user_city" key={city}>
                {city}
              </div>
              <div >
                  <button className="button_view">
                    <Link to={`/Profile/${id}`} className="button_link">Смотреть профиль</Link>
                  </button> 
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="info_table">
        <div className="info">
          <div className="info_block">
            <div className="about"> О площадке </div>
            <div className="info_top">
              Современная площадка для проведения концертов и других мероприятий
              любой сложности.
            </div>
            <div className="info_bottom">
              Мы предоставляем всю необходимую для организаторов инфраструктуру
              и готовые решения под все основные задачи любого события, а также
              современное оборудование, соответствующее самым высоким мировым
              стандартам.
            </div>
          </div>
        </div>
        <div className="request">
          <div className="req_top">Оставить заявку на проведение концерта</div>
          <textarea
            className="req_input"
            placeholder="Расскажите о вашем предложении"
          ></textarea>
          <button className="send_btn">Отправить</button>
        </div>
      </div>
      <div className="table_bottom">
        <div className="bottom_title">О группе</div>
        <div className="bottom_about">
          Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа
          образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа
          и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty
          One Pilots в 2009 и Regional at Best в 2011.
        </div>
      </div>
    </div>
  );
};

export default Table;
