const Header = ({ name }) => <h1>{name}</h1>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map(part =>
      <Part key={part.id} part={part} />
    )}
  </>

const Course = ({ course }) =>
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </>

const Total = ({ exercises }) => 
  <>
  <strong><p>total of {exercises.reduce((total, current) => total + current, 0)} exercises</p></strong>
  </>


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <>
      <Course course={course} />
      <Total exercises={course.parts.map(part => part.exercises)} />
    </>
  )
}

export default App