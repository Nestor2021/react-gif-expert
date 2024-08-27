import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (NewCategory) => {
        //valoran
        //console.log(NewCategory);

        if(categories.includes(NewCategory)) return;
        
        setCategories([NewCategory,...categories]);
       // setCategories(cate => [...cate,'valorant'])
    }

    return (
        <>
            {/* Titulo /*/}
            <h1>GifExpertApp</h1>

            {/* Input /*/}
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* Listado de Gif /*/}          
           
                {categories.map((category) =>
                    (
                        <GifGrid key={ category } 
                        category={category}/>
                    )
                )}
                
            
           
        </>
        
    )
}