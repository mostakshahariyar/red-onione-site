import React, { createContext, useEffect, useState } from 'react';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Breakfast from './Breakfast';

export const foodsContext = createContext();

const Foods = () => {
        const [breakfastFoods, setbreakfastFoods] = useState();
        const [dinnerFoods, setdinnerFoods] = useState();
        const [launchFoods, setlaunchFoods] = useState();
        const [loadDate, setLoadDate] = useState(true);
        useEffect( ()=>{
                setLoadDate(true)
                fetch('https://raw.githubusercontent.com/mostakshahariyar/red-onione_data/main/breakfast.json')
                .then( res=> res.json())
                .then( data => setbreakfastFoods(data))
                .finally(()=>setLoadDate(false));
        },[])
        useEffect( ()=>{
                setLoadDate(true)
                fetch('https://raw.githubusercontent.com/mostakshahariyar/red-onione_data/main/dinner.json')
                .then( res=> res.json())
                .then( data => setdinnerFoods(data))
                .finally(()=>setLoadDate(false));
        },[])
        useEffect( ()=>{
                setLoadDate(true)
                fetch('https://raw.githubusercontent.com/mostakshahariyar/red-onione_data/main/launch.json')
                .then( res=> res.json())
                .then( data => setlaunchFoods(data))
                .finally(()=>setLoadDate(false));
        },[])
        console.log("Breakfast : ", breakfastFoods);
        console.log("dinner : ", dinnerFoods);
        console.log("launch : ", launchFoods);
        return (
                <foodsContext.Provider value={{breakfastFoods, dinnerFoods, launchFoods}}>
                      {
                        breakfastFoods?.map(breakfastFood=> <Breakfast
                                key = { breakfastFood.id }
                                breakfastFood = { breakfastFood }
                                loadDate = {loadDate}
                        >

                        </Breakfast>)
                     }   
                     {
                        dinnerFoods?.map(dinnerFood=><Dinner
                                key = { dinnerFood.id }
                                dinnerFood = { dinnerFood }
                                loadDate = {loadDate}
                        >

                        </Dinner>)
                     }   
                     {
                        launchFoods?.map(launchFood=><Lunch
                                key = { launchFood.id }
                                launchFood = { launchFood }
                                loadDate = {loadDate}
                        >

                        </Lunch>)
                     }
                </foodsContext.Provider>
        );
};

export default Foods;