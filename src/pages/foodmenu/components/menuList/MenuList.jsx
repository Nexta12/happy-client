import SubTitle from "@components/subTitle/SubTitle";
import styles from "./menuList.module.scss";
import { FoodData } from "@data/FoodListData";
import SingleMenuCard from "../menuCard/SingleMenuCard";
import { paths } from "@routes/path";

const MenuList = () => {

 const Dishs = FoodData.filter(item => item.category === "dish");
 const SpecialSoup = FoodData.filter(item => item.category === "special");


  return (
    <div className={styles.container} id="Menu-List" >
      <SubTitle font="script">Our Menu List</SubTitle>
       {/* Starters */}
      <div className={styles.menuContainer}>
        <SubTitle className={styles.startertext}>Starters</SubTitle>
        <div className={styles.mainMenuDisplay}>
          <div className={styles.soups}>
            <SubTitle font="script" className={styles.subTitleText}>
              Soups
            </SubTitle>
            <div className={styles.cardDisplay}>
              {FoodData.map((item) => {
                if (item.category === "soup") {
                  return (
                  <SingleMenuCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    menuImg={item.menuImg}
                    path={`${paths.foodmenu}/${item.id}`}
                  />
                   )
                }
                 return null; 
              })}
            </div>
          </div>

          <div className={styles.lightFingers}>
            <SubTitle font="script" className={styles.subTitleText}>
              Light Fingers
            </SubTitle>
            <div className={styles.cardDisplay}>
              {FoodData.map((item) => {
                if (item.category === "light-fingers") {
                  return (
                    <SingleMenuCard
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      menuImg={item.menuImg}
                      path={`${paths.foodmenu}/${item.id}`}
                    />
                  );
                }
                return null; 
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Dishes */}
      <div className={styles.menuContainer}>
        <SubTitle className={styles.startertext}>Dishes</SubTitle>
        <div className={styles.mainMenuDisplay}>
          <div className={styles.soups}>

            <div className={styles.cardDisplay}>
              {Dishs.slice(0, 4).map((item)=>(
                  <SingleMenuCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    menuImg={item.menuImg}
                    path={`${paths.foodmenu}/${item.id}`}
                  />
              ))}
            </div>
          </div>

          <div className={styles.lightFingers}>
          
            <div className={styles.cardDisplay}>
              {Dishs.slice(4).map((item)=>(
                  <SingleMenuCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    menuImg={item.menuImg}
                    path={`${paths.foodmenu}/${item.id}`}
                  />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Native Soups */}

       <div className={styles.menuContainer}>
        <SubTitle className={styles.startertext}>Special Soups </SubTitle>
        <div className={styles.mainMenuDisplay}>
          <div className={styles.soups}>
            <SubTitle font="script" className={styles.subTitleText}>
              Native Soups
            </SubTitle>
            <div className={styles.cardDisplay}>
               {SpecialSoup.slice(0, 4).map((item)=>(
                  <SingleMenuCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    menuImg={item.menuImg}
                    path={`${paths.foodmenu}/${item.id}`}
                  />
              ))}
            </div>
          </div>

          <div className={styles.lightFingers}>
             <SubTitle font="script" className={styles.subTitleText}>
              Native Soups
            </SubTitle>
            <div className={styles.cardDisplay}>
              {SpecialSoup.slice(4).map((item)=>(
                  <SingleMenuCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    menuImg={item.menuImg}
                    path={`${paths.foodmenu}/${item.id}`}
                  />
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MenuList;
