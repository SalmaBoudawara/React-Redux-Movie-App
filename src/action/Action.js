import{ADD_CARD,DELETE_CARD,EDIT_CARD,SEARCH_CARD,SEARCH_STAR} from './ActionType'

export const addCard=(movieName,movieDate,img,ratingMovie,movieDescription)=>(
    {type:ADD_CARD, 
         payload: {id:Date.now(),movieName,movieDate, img,ratingMovie,movieDescription}
    }
  )
  export const deleteCard=(id)=>(
    {type:DELETE_CARD,
     payload:id
    }
  )

  export const editCard=(id,movieName,movieDate,img,ratingMovie,movieDescription)=>(
    {type:EDIT_CARD,payload:{id,movieName,movieDate,img,ratingMovie,movieDescription
    }}
)
export  const searchCard=(movieName)=>({
  type: SEARCH_CARD,
  payload:movieName
})
export  const searchStar=(rating)=>({
  type: SEARCH_STAR,
  payload:rating
})