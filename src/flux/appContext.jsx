import React, {useState, useEffect, createContext} from "react";
import {getState} from "./store";

export const Context = createContext(null);

const injectContext = (ChildrenComponents) =>{

    const Wrapper = (props) =>{
        const [state, setState ] = useState(
            getState({
                getStore:()=> state.store,
                getActions: ()=> state.actions,
                setStore: updateStore => setState({
                    store: Object.assign(state.store, updateStore),
                    actions: {...state.actions}
                })
            })
        );

        useEffect(()=>{
            state.actions.getAllCharacter();
        }, []);

        return (
            <Context.Provider value={state}>
                <ChildrenComponents {...props} />
            </Context.Provider>
        )
    }

    return Wrapper
}

export default injectContext;