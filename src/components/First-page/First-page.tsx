import {SunIcon , MoonIcon ,SearchIcon} from "@heroicons/react/outline"
import { useState ,useEffect, DOMAttributes } from "react"
export default function FirstPage(){
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    const [items ,setItems] = useState<string[]>([])
    const [inputValue , setInputValue] = useState<string>()


  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDarkMode])

const addTask = () =>{
    console.log(inputValue)
    setItems([inputValue , ...items])
    if(inputValue?.trim() === ""){
      return
    }
    setInputValue('')
}
const deleteTask = (index: number) =>{
  setItems(prevItems =>prevItems.filter((_,i)=>i!==index))
}

    return(
        <>
        <div className="md:w-screen md:h-screen dark:bg-black bg-white flex flex-col justify-around items-center gap-y-6">
            <div className="flex flex-col gap-y-4 w-full  md:w-[750px] h-2/5 p-12 ">
            <div>
                <h1 className="text-center dark:text-white text-[26px]">TO DO List</h1>
            </div>
            <div className="flex gap-x-6 justify-center items-center">
                <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Search note..." className="md:w-[600px] dark:border-white dark:text-white border-[1px] border-black placeholder:text-purple-600 dark:bg-black  dark:placeholder:text-white  w-full relative h-[38px] p-4 rounded-lg" type="text" />
                <button onClick={addTask} className="bg-purple-500  rounded-sm text-white px-[12px] py-[4px]">Add</button>
                <button onClick={() => setIsDarkMode(!isDarkMode)} className="bg-purple-500 p-[6px] rounded-full flex justify-center items-center">
                    <SunIcon className="w-6 h-6 dark:flex hidden text-white"/>
                    <MoonIcon className="w-6 h-6 flex dark:hidden text-white"/>
                </button>
            </div>
            </div>
            <div className="flex flex-col w-full md:w-[750px] p-12 h-3/5 gap-y-4 dark:text-white bg-white dark:bg-black ">
              {items.map((item,index)=>(
                <div className="flex justify-between rounded-md px-4 h-14 items-center bg-purple-500 ">
                  <p key={index}>{item}</p>
                  <button onClick={()=>deleteTask(index)} className="bg-purple-400 dark:hover:text-black hover:bg-red-500 transition-colors rounded-lg px-5 py-2">Delete</button>
                </div>
              ))}
            </div>
        </div>
        </>
    )
} 