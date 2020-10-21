import React from "react";
import M from 'materialize-css'

import "./style.scss";

export const ProductSearch = ({getDataForAutocomplete, searchSubmitHandler}) => {
    /* 
        заебенить сюда стейт со списком для автокомплита
        повесить слушателя на этот стейт и когда он обновляется пушить его в поле автокомплита
        
        если он пустой отображать в поле автокомплита лоадер
    */

    const [searchQuery, setSearchQuery] = React.useState('')
    const [autocompleteItems, setAutocompleteItems] = React.useState(1)
    const [autocompleteInstance, setAutocompleteInstance] = React.useState('')

    React.useEffect(()=>{
        initAutocomplete()
    }, [])

    React.useEffect(()=>{
        if (autocompleteItems !== 1) {
            autocompleteInstance.updateData(autocompleteItems)
            autocompleteInstance.open()
            console.log('autocomplete items', autocompleteItems);
        }
    }, [autocompleteItems])

   

    const initAutocomplete = ()=>{
     const options = {
            data: autocompleteItems,
            limit: 10,
            onAutocomplete: function(selectedValue){
                autocompleteOnSelectHandler(selectedValue)
            },
            minLength: 1
        }

        const searchField = document.getElementById('autocomplete');
        setAutocompleteInstance(M.Autocomplete.init(searchField, options))
    }


    const autocompleteOnSelectHandler = (selectedValue)=>{
        console.log(selectedValue)
    }

    const onChangeHandler = (e)=>{
        setSearchQuery(e.target.value)
    }

    const refreshAutocomplete = async ()=>{
        setAutocompleteItems('')
        console.log('refreshAutocomplete')
        if (searchQuery.length > 2) {
            const dataForAutocomplete = await getDataForAutocomplete({item:searchQuery})
            console.log('dataForAutocomplete', dataForAutocomplete)
            setAutocompleteItems(dataForAutocomplete)
        }
    }

    const onSubmitHandler = () => {
        console.log('on submit');
        searchSubmitHandler({item:searchQuery})
    }

    React.useEffect(()=>{
        refreshAutocomplete()
     }, [searchQuery])

    return (
        <div className="productSearch">
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12 productSearchFormWrapper">
                            <div className="productSearchFieldsWrapper">
                                <i className="material-icons prefix">textsms</i>
                                <input type="text" id="autocomplete-input" value={searchQuery} onChange={onChangeHandler} onSubmit={onSubmitHandler} id="autocomplete" className="autocomplete" />
                                <label htmlFor="autocomplete-input">Rechercher un produit</label>
                            </div>
                            <div className="productSearchButtonWrapper">
                                <span className="waves-effect waves-light btn" onClick={onSubmitHandler}>Submit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
