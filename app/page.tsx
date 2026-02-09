export default function Home() {

	function myFunction<T>(value: T) {
	  return value	
	}
  return (
	<>
		<p>The value is: {myFunction(4)}</p>
	</>	
  );
}
