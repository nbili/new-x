import {
  useQuery,
  useMutation,
  QueryClient,
  QueryClientProvider
} from "react-query";
import { client } from "./utils";

const queryClient = new QueryClient();

function Others() {
  const query = useQuery({
    queryKey: "list"
  });

  return (
    <>
      {query.data?.map(todo => (
        <h1 key={todo.id}>{todo.id}</h1>
      ))}
    </>
  );
}

function Todos() {
  const query = useQuery({
    queryKey: "list",
    queryFn: () => client().then(data => data)
  });

  const mutation = useMutation(post => client(post), {
    onSuccess: () => {
      console.log(`success`);
    },
    onSettled: () => {
      queryClient.invalidateQueries("list");
    }
  });

  return (
    <div className="App">
      <ul>
        {query.data?.map(todo => (
          <li key={todo.id}>{todo.id}</li>
        ))}
      </ul>

      <hr />

      <button
        onClick={() => {
          mutation.mutate({ id: Math.random().toString() });
        }}
      >
        Add
      </button>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
      <hr />

      <Others />
    </QueryClientProvider>
  );
}

export default App;
