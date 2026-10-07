

export default function Counter(props) {
  const words = ['universe', 'world', 'country', 'city']
  const random_result = words[Math.floor(Math.random() * words.length)]

  return <h4>{props.curr_letter} Randomly generated value by the function {random_result}</h4>
}
