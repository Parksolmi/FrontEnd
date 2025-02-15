import styled from "styled-components";


export const SearchContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 107px;
  background-color: #F8F8F8;

  .userWrap {
    font-size: 18px;
    width: 90%;
    padding-bottom: 10px;
  }
  span {
    font-weight: bold;
    font-size: 18px;
  }
  .textWrap {
    width: 90%;
    font-size: 18px;
  }
`;

export const ButtonWrap = styled.article`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const ItemsBtn = styled.div`
  text-align: center;
  line-height: 45px;
  background-color: white;
  width: 210px;
  height: 41px;
  margin: 25px 25px 25px 25px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: rgba(50, 50, 93, 0.25)
  0px 2px 5px -1px, rgba(0, 0, 0, 0.3)
  0px 1px 3px -1px;
  cursor: pointer;
  font-size: 14px;
`;

export const CardSection = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 335px;
  background-color: #F8F8F8;
  //border: solid 1px red;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-top: 30px;
  margin-left: 10px;
  //border: solid 1px red;
  
  .titleDeco {
    width: 4px;
    height: 21px;
    background-color: gainsboro;
    margin-right: 10px;
  }

  .recommendGuide {
    cursor: pointer;
    font-weight: initial;
  }

  .arrow{
    cursor: pointer;
    margin-left: 5px;
    width: 10px;
    height: 15px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: auto;
  //border: solid 1px red;
`;

export const CardWrap = styled.div`
  width: 167px;
  height: 229px;
  flex: 0 0 auto;
  margin-left: 26px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: rgba(50, 50, 93, 0.25)
  0px 2px 5px -1px, rgba(0, 0, 0, 0.3)
  0px 1px 3px -1px;
  
  .tourImage {
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    height: 77%;
    background-color: gainsboro;
    object-fit : cover;
  }

  .cardInfoWrap {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 20%;
    background-color: white;
    border-radius: 0px 0px 10px 10px;
    .cardTitle {
      margin: 4px;
    }
    .cardRecommend {
      margin: 4px;
      color: #ababab;
      font-size: 4px;
    }
  }
`;

export const RecommendContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 213px;
  background-color: white;
  padding-bottom: 20px;
`;

export const RecommendTitleWrap = styled.div`
  display: flex;
  width: 90%;
  height: 40px;
  margin-top: 40px;
  margin-left: 10px;
  //border: solid 1px red;
  
  .recommendTitle {
    font-weight: initial;
  }

  .titleDeco {
    width: 4px;
    height: 21px;
    background-color: gainsboro;
    margin-right: 12px;
  }

  .arrow{
    margin-left: 5px;
    width: 10px;
    height: 15px;
  }
`;

export const ContainerItemsWrap = styled.div`
  width: 100%;
  background-color: white;
`;

export const RecommendItemsWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
  overflow-y: hidden;
  margin-left: 20px;
  margin-top: 5px;

  height: 180px;
  //border: solid 1px red;
`;

export const RecommendImageWrap = styled.div`
  flex: 0 0 auto;
  margin-left: 26px;
  width: 167px;
  height: 134px;
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
  
  .itemImage {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10px 10px 10px 10px;
  }

  .flagIcon {
    position: relative;
    bottom: 95%;
    left: 86%;
    right: 15%;
    width: 12px;
    height: 14px;
  }

  .itemsName {
    z-index: 0;
    position: relative;
    bottom: 24%;
    color: black;

    font-size: 13px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
