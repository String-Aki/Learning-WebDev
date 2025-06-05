import Header from "./components/Header"
import Entry from "./components/Entry"
import Data from "./data"

export default function App(){

    const EntryApi = Data.map((entry) =>{
        return (
            <Entry 
                key={entry.id}
                {...entry}
            />
        )
    })

    return (
        <div className="container">
            <Header />
            <main>
             {EntryApi}
            </main>
        </div>
    )
}