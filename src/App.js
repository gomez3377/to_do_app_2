import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const [checkListItems, setChecklistItems] = React.useState([])

  function addCheckListItem(){
    setChecklistItems(prevCheckListItems => [...prevCheckListItems])
  }

  return (
    <div className="App">
     <Header />
     <body className="app-content">
     <Sidebar />
     <Main checkListItems={checkListItems} />
      
     </body>
    </div>
  );
}

export default App;
