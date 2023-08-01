import React from 'react';

const Categories = ({categories,filteritems}) => {
  return (
    <div className='btn-conatiner'>
      {
        categories.map((category,index) => {
          return (
            <button type='button' className='filter-btn' key={index} onClick={()=>filteritems(category)}>{ category}</button>
          )
        })
      }
    </div>
  );
};

export default Categories;
