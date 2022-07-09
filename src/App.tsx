import Button, { ButtonSize, ButtonType } from "./components/Button";
function App() {
  return (
    <div className="App">
      <Button className="123  " btnType={ButtonType.Primary}>
        Hello
      </Button>
      <Button btnType={ButtonType.Default}>Hello</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        Link
      </Button>
      <Button btnType={ButtonType.Danger}>Hello</Button>
      <hr />
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Hello
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        Hello
      </Button>
      <hr />
      <Button btnType={ButtonType.Default} disabled={true}>
        Hello
      </Button>
      <Button btnType={ButtonType.Link} disabled={true}>
        Hello
      </Button>
    </div>
  );
}

export default App;
