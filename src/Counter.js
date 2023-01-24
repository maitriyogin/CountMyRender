import {useRerenderCount} from "./useRerenderCount";

export const Counter = ({id, handleUpdateCount, count}) =>{
  useRerenderCount(id)
  return <button className={'Count-button'} onClick={() => handleUpdateCount(id)}>{id} - Count - {count}</button>
}