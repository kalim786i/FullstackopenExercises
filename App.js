const Header= (props) =>{
return(
<h1>{props.course}</h1>
)
}

const Content= (props) =>{
  const part=props.part
   
  return(
    <p>
      {part.map((value) =><>{value.name}:<br></br>{value.exercises}<br></br></>)}
    </p>
  )
  }
  const Part = (props)=>{
    const part=props.part
  return(
      <p>
    {part.name} {part.exercises}
  </p>
    )
  }

const Total = (props) =>{
const part=props.part
let total=0;
part.forEach(
  value =>{ 
    total=total+value.exercises
  })
return(
  <>
  <p>Number of exercises: {total}</p>
  </>
)

}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course}/>
      <Content part={parts} />
      <Total part={parts}  />
    </div>
  )
}

export default App
