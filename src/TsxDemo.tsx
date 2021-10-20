import React from 'react';

interface DemoProps {
    name: string;
    age: number;
}

const TsxDemo = (props: DemoProps) => {
  const { name, age } = props;
  return (
    <>
      {name}
      hh
      {age}
    </>
  );
};

export default TsxDemo;
