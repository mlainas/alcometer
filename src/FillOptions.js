import React from "react";

export default function FillOptions() {
   const percentages = [];
   for (let i = 0;i <=24;i = i + 1) {
    percentages.push(i);
   }

   return (
       percentages.map(percentage => {
           return <option value={percentage}>{percentage.toFixed(0)}</option>
       })
   )
}
