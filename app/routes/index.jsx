import { useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export async function loader(){
  const data={
    toDo: await db.toDo.findMany()
  }
  
  return data
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>quizment</h1> 
  {data.map((dataT)=>(
    <li key={dataT.todo_id}>
      <h1>{dataT.description}</h1>
    </li>
  ))}
   
     
    </div>
  );
}
