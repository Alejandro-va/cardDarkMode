import React from 'react';
import Card from './Card';
import './Top-Card-List.css';

const cardListData = [
  { 
      username: '@Pepito',
      id:1,
      followers:'1596',
      todayfollowers:12,
    icon:'images/icon-facebook.svg',
    name: 'facebook',
  },
  {
    username: '@Luisa',
    id:2,
    followers:'28k',
    todayfollowers: 20,
    icon:'images/icon-twitter.svg',
    name: 'twitter',
  },
  {
    username: '@Jesus',
    id:3,
    followers:'6k',
    todayfollowers: 30,
    icon:'images/icon-instagram.svg',
    name: 'instagram',
  },
  {
    username: '@Alejandro',
    id:4,
    followers:'1000',
    todayfollowers: -50,
    icon:'images/icon-youtube.svg',
    name: 'youtube',
  },
]

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">

          {
            cardListData.map((items) => <Card key={items.id} {... items}     />)
          }

          {/* <article className="card twitter">
            <p className="card-title">
              <img src="images/icon-twitter.svg" alt="" />
                  @LeonidasEsteban
              </p>
            <p className="card-followers">
              <span className="card-followers-number">28k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
                    12 Today
                </p>
          </article>
          <article className="card instagram">
            <p className="card-title">
              <img src="images/icon-instagram.svg" alt="" />
                      @LeonidasEsteban
                  </p>
            <p className="card-followers">
              <span className="card-followers-number">6k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
                        12 Today
                    </p>
          </article>
          <article className="card youtube">
            <p className="card-title">
              <img src="images/icon-youtube.svg" alt="" />
                          @LeonidasEsteban
                      </p>
            <p className="card-followers">
              <span className="card-followers-number">12k</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="" />
                            12 Today
                        </p>
          </article>*/}
        </div>
      </div>
    </section> 
  )
}
export default TopCardList