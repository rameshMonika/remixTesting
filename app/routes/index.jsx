import { useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export async function loader(){
  const data = {
    toDos: await db.todo.findUnique({
      where: {
        todo_id: 1,
      },
      select: {
        todo_id: true,
        description: true
      }
    })
  };
  // db.$disconnect();
  return data;
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>quizment</h1> 
      <p>Name: {data.toDos.todo_id}</p>
        <p>Uid: {data.toDos.description}</p>

{/* 
      {datas.map((data) => (
          <li key={data.todo_id}>
          
              <h3>{data.todo_id}</h3>
              <h3>{data.description}</h3>
             
          </li>
        ))}
    
  {data.map((dataT)=>(
    <li key={dataT.todo_id}>
      <h1>{dataT.description}</h1>
    </li>
  ))} */}
   
     
    </div>
  );
}
