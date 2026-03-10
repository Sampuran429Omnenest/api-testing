// src/components/Greeting.tsx
interface Props {
  name: string;
  age?: number;
}

const Greeting = ({ name, age }: Props) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

export default Greeting;
