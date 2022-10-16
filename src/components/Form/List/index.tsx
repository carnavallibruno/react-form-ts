interface ListProps {
  name: string,
  age: string,
  occupation: string,
  height: string
}

export default function List({ name, age, occupation, height }: ListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Occupation</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{name}</th>
          <th>{age}</th>
          <th>{occupation}</th>
          <th>{height}</th>
        </tr>
      </tbody>
    </table>
  )
}