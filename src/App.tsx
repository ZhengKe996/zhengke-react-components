import Menu from "./components/Menu/menu";
import SubMenu from "./components/Menu/sub-menu";
import MenuItem from "./components/Menu/item";
function App() {
  return (
    <div className="App">
      <Menu
        defaultIndex={"1"}
        onSelect={(index) => console.log(index)}
        mode="vertical"
        defaultOpenSubMenus={["0"]}
      >
        <MenuItem>001</MenuItem>
        <MenuItem>002</MenuItem>
        <SubMenu title="hello">
          <MenuItem>003</MenuItem>
          <MenuItem>003</MenuItem>
          <MenuItem>003</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
