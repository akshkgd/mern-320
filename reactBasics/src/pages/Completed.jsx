import ItemComponent from '../components/Item'
let todos = [
    {
      id: 1,
      task: "Complete coding assignment",
      description: "Finish the coding assignment for the upcoming project.",
      completed: false,
    },
    {
      id: 2,
      task: "Buy groceries",
      description: "Purchase fruits, vegetables, and other essential items.",
      completed: true,
    },
    {
      id: 3,
      task: "Exercise",
      description: "Go for a 30-minute jog or do a home workout session.",
      completed: false,
    },
    {
      id: 4,
      task: "Read a book",
      description: "Spend some time reading a novel or a non-fiction book.",
      completed: false,
    },
    {
      id: 5,
      task: "Attend meeting",
      description: "Join the team meeting at 2:00 PM to discuss the project updates.",
      completed: true,
    }
  ];
function Completed(){
    return(
        <div className="home-container">
            <h2>List of all my completed task</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde repudiandae culpa!</p>
        
        
            {
                todos.filter((todo)=>{
                    return todo.completed == true
                }).map((todo)=>{
                    return <ItemComponent title={todo.task} status={todo.completed} desc={todo.description} />
                })
            }
        </div>
    )
}

export default Completed;