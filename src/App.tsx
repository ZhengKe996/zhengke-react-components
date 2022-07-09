import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      <Button className="123  " btnType={"primary"}>
        Hello
      </Button>
      <Button>Hello</Button>
      <Button btnType={"link"} href="https://www.baidu.com">
        Link
      </Button>
      <Button btnType={"danger"}>Hello</Button>
      <hr />
      <Button btnType={"primary"} size={"lg"}>
        Hello
      </Button>
      <Button btnType={"primary"} size={"sm"}>
        Hello
      </Button>
      <hr />
      <Button btnType={"default"} disabled={true}>
        Hello
      </Button>
      <Button btnType={"link"} disabled={true}>
        Hello
      </Button>
    </div>
  );
}

export default App;
