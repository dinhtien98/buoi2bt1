import Hook1 from "./components/hook/Hook1";
import HookNavbar from "./components/hook/HookNavbar";
import img1 from "./logo192.png"

function App(){
    return(
        <>
            <HookNavbar/>
            <img src={img1}/>
            <Hook1/>
        </>
    )
}
export default App;