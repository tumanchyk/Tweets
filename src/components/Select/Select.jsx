import {useContext} from 'react';
import { Select } from './Select.styled';
import { Context } from '../../App'


const SelectElem = () =>{
  const { select, setSelect } = useContext(Context)

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
       <div>
        <Select value={select} onChange={handleChange}>
        <option value="all">All</option>
        <option value="following">Following</option>
      </Select>
    </div>
    </>
  );
}
export default SelectElem