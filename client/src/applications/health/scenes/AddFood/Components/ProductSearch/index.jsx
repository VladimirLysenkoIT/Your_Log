import React from "react";
import M from 'materialize-css'

import "./style.scss";

export const ProductSearch = () => {

    const [searchQuery, setSearchQuery] = React.useState('')

    React.useEffect(()=>{
       initAutocomplete()
    }, [])

    const autocompleteOnSelectHandler = (selectedValue)=>{
        console.log(selectedValue)
    }

    const initAutocomplete = ()=>{
        const options = {
            data: {
                "Apple": null,
                "Microsoft": null,
                "Google": 'https://placehold.it/250x250'
            },
            limit: 10,
            onAutocomplete: function(selectedValue){
                autocompleteOnSelectHandler(selectedValue)
            },
            minLength: 1
        }

        const searchField = document.getElementById('autocomplete');
        const autocompleteInstansce = M.Autocomplete.init(searchField, options);
    }

    const onChangeHandler = (e)=>{
        setSearchQuery(e.target.value)
    }

    return (
        <div className="productSearch">
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">textsms</i>
                            <input type="text" id="autocomplete-input" value={searchQuery} onChange={onChangeHandler} id="autocomplete" className="autocomplete" />
                            <label htmlFor="autocomplete-input">Autocomplete</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};