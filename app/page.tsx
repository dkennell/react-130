export default function Home() {

	function myFunction<T>(value: T) {
		const finalValue = value + 'asdf'
	  return finalValue
	}
  return (
	<>
		<p>The value is: {myFunction(4)}</p>
	</>	
  );
}
