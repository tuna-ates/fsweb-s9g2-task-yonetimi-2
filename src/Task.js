import { differenceInDays, formatDistance, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import React from "react";

const Task = ({ taskObj, onComplete }) => {
   const taskDate=new Date(taskObj.deadline)
  let result=differenceInDays(taskDate,new Date())
  console.log(result);
  let bgClass=result<=3 ? "bg-[#ffd9d4]":"bg-[#d5d7ff]";
  
  let remaningTime=formatDistanceToNow(taskDate,{
    addSuffix:true,
    locale:tr
  })


  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-shadowDeneme ">
      <h3 className=" text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className=" text-xs pt-1">son teslim: <span title={taskObj.deadline} className={`${bgClass} py-1 px-2 rounded-sm inline-block`}>{remaningTime}</span></div>
      <p className=" py-2 px-1 text-sm text-[#444] ">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className=" inline-block py-1.5 px-3 text-sm border-2 border-solid border-[#ccc] mr-1 mb-1.5 rounded-[30px]" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button className=" block py-2 px-3 ml-auto bg-[#fecc91] shadow-shadowDeneme rounded border-none cursor-pointer " onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
