const Header = ({ name }) => <h2>{name}</h2>;

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>;

const Content = ({ parts }) => (
  <>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Total = ({ exercises }) => (
  <strong>
    <p>total of {exercises.reduce((total, current) => total + current, 0)} exercises</p>
  </strong>
);

const Course = ({ course }) => (
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total exercises={course.parts.map(part => part.exercises)} />
  </>
);

export default Course;
