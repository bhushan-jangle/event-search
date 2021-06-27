import { ADD_NEWS_DATA, GET_NEWS_DATA } from "./ActionType"

const news = [{
          id:1,
          category:"corona-virus",
          title:"Russia records 14,723 new COVID-19 cases",
          desc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          id:2,
          category:"corona-virus",
          title:"Russia records 14,723 new COVID-19 cases",
          desc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          id:3,
          category:"corona-virus",
          title:"Russia records 14,723 new COVID-19 cases",
          desc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          id:4,
          category:"corona-virus",
          title:"Russia records 14,723 new COVID-19 cases",
          desc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          id:5,
          category:"favourite-events",
          title:"ENG vs NZ 2nd Test: BJ Watling ruled out with back injury",
          desc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          +"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          id:6,
          category:"favourite-events",
          title:"ENG vs NZ 2nd Test: BJ Watling ruled out with back injury",
          desc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          id:7,
          category:"favourite-events",
          title:"ENG vs NZ 2nd Test: BJ Watling ruled out with back injury",
          desc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
          id:8,
          category:"favourite-events",
          title:"ENG vs NZ 2nd Test: BJ Watling ruled out with back injury",
          desc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            id:9,
            category:"weather",
            title:"EXPLAINED: What Northern Limit And Eastern, Western Arms Mean For Monsoons In India",
            desc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          },
          {
            id:10,
            category:"weather",
            title:"EXPLAINED: What Northern Limit And Eastern, Western Arms Mean For Monsoons In India",
            desc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          },
          {
            id:11,
            category:"weather",
            title:"EXPLAINED: What Northern Limit And Eastern, Western Arms Mean For Monsoons In India",
            desc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          },
          {
            id:12,
            category:"weather",
            title:"EXPLAINED: What Northern Limit And Eastern, Western Arms Mean For Monsoons In India",
            desc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          }
      ]

const NewsDataReducer = (state=news, action)=>{
    switch(action.type){
        case GET_NEWS_DATA:
            return state
        case ADD_NEWS_DATA:
            return[...state, action.payload]
        default : return state   
    }
}

export default NewsDataReducer