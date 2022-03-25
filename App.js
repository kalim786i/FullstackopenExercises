const Header= (props) =>{
  const course=props.course
return(
<h1>{course.name}</h1>
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
  

const Total = (props) =>{
const part=props.part
console.log(part)
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div>
      <Header course={course}/>
       <Content part={course.parts} />
      <Total part={course.parts}  />
    </div>
  )
}

export default App
