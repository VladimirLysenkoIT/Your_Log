import React from 'react';
import M from 'materialize-css';

export const NutrientsForm = ({addNewProductToDb}) => {
    React.useEffect(()=>{
        initCategorySelector();
    }, [])

    const initCategorySelector = ()=>{
        const select = document.getElementById('categorySelector');
        M.FormSelect.init(select,{});
    } 

    const initialFormStateData = {
        name: '',
        calories: 0,
        category: 0,
        nutrients:{
            fat: 0,
            fat_st: 0,
            fat_mst: 0,
            fat_pst: 0,
            cholesterol: 0,
            carbs: 0,
            fiber: 0,
            sugar: 0,
            proteins: 0,
            salt: 0,
            vitamin_A: 0,
            vitamin_B1: 0,
            vitamin_B2: 0,
            vitamin_B3: 0,
            pantothenic_acid: 0,
            vitamin_B6: 0,
            vitamin_B7: 0,
            folate: 0,
            folic_acid: 0,
            vitamin_B12: 0,
            vitamin_C: 0,
            vitamin_D: 0,
            vitamin_E: 0,
            vitamin_K: 0,
            calcium: 0,
            iodine: 0,
            iron: 0,
            beta_carotene: 0,
            chromium: 0,
            cobalt: 0,
            copper: 0,
            magnesium: 0,
            manganese: 0,
            molybdenum: 0,
            phosphorus: 0,
            potassium: 0,
            selenium: 0,
            sodium: 0,
            zinc: 0,
        }
    }

    const [formData, setFormData] = React.useState(initialFormStateData)

    const refreshFormData = (fieldName, fieldValue)=>{
        const newFormData = {...formData}
        if(
                fieldName === 'name'
            || fieldName === 'calories'
            || fieldName === 'category'
        ){
            newFormData[fieldName] = fieldValue
        }else{
            newFormData.nutrients[fieldName] = fieldValue
        }

     setFormData(newFormData)
    }

    const onChangeHandler = (e)=>{
        refreshFormData(e.target.name, e.target.value)
    }

    const onFocusFieldHandler = (e)=>{
        const fieldName = e.target.name
        let fieldValue = e.target.value

        if(fieldName === 'category'){
            return true
        }else if(fieldName === 'name' || fieldName === 'calories'){
            if(fieldValue === initialFormStateData[fieldName].toString()){
                fieldValue = ''
            }
        }else{
            console.log('onFocusFieldHandler')
            console.log('fieldName:', fieldName)
            console.log('to str:', initialFormStateData.nutrients[fieldName])
            if(fieldValue === initialFormStateData.nutrients[fieldName].toString()){
                fieldValue = ''
            }
        }

        refreshFormData(fieldName, fieldValue)
    }

    const onLeaveFieldHandler = (e)=>{
        const fieldName = e.target.name
        let fieldValue = e.target.value

        if(fieldValue === ''){
            if(fieldName === 'category'){
                return true
            }else if(fieldName === 'name' || fieldName === 'calories'){

                refreshFormData(fieldName, initialFormStateData[fieldName])
            }else{
                refreshFormData(fieldName, initialFormStateData.nutrients[fieldName])
            }
        }else{
            return true
        }
    }

    const onSubmitForm = async ()=>{
        const isAdded = await addNewProductToDb(formData)
        
        if(isAdded){
            setFormData(initialFormStateData)
        }
    }


    return (
        <form onSubmit={onSubmitForm} className='nutrientsForm'>
            <div className='formContentWrapper'>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Titre</label></div>
                    <div className='inputBox'><input type='text' name={'name'} value={formData.name} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                </div>
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Categories</label></div>
                    <div className='inputBox'>
                        <div className='input-field col s12'>
                            <select onChange={onChangeHandler} name={'category'} value={formData.category} id='categorySelector' >
                                <option value={'0'} >Choose your option</option>
                                <option value={'1'}>Fruit</option>
                                <option value={'2'}>Legumes</option>
                                <option value={'3'}>Sugar</option>
                                <option value={'4'}>Protein</option>
                                <option value={'5'}>Autre</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Calories</label></div>
                    <div className='inputBox'><input type='number' min={0} step={0.1} name='calories' value={formData.calories} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}   id=''/></div>
                </div>
                
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Lipides totales:</label></div>
                    <div className='inputBox'><input type='number' min={0} step={0.1} name='fat'  value={formData.nutrients.fat} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>

                    <div className="nutrimentDetails">
                        <label>Dont:</label>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Saturés:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='fat_st'  value={formData.nutrients.fat_st} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Mono-insaturés:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='fat_mst'  value={formData.nutrients.fat_mst} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Poly-insaturés:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='fat_pst'  value={formData.nutrients.fat_pst} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Cholestérol:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='cholesterol'  value={formData.nutrients.cholesterol} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                    </div>
                </div>
               
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Glucides totales:</label></div>
                    <div className='inputBox'><input type='number' min={0} step={0.1} name='carbs'  value={formData.nutrients.carbs} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                    <div className="nutrimentDetails">
                        <label>Dont:</label>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Fibres alimentaires:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='fiber'  value={formData.nutrients.fiber} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Sucres:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='sugar'  value={formData.nutrients.sugar} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                    </div>
                </div>

                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Proteines</label></div>
                    <div className='inputBox'><input type='number' min={0} step={0.1} name='proteins'  value={formData.nutrients.proteins} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                </div>
                
                <div className='formLineBox'>
                    <div className='labelBox'><label htmlFor=''>Sel</label></div>
                    <div className='inputBox'><input type='number' min={0} step={0.1} name='salt'  value={formData.nutrients.salt} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                </div>

                <div className='formLineBox'>
                    <div className='labelBox viaminsLabel'><label htmlFor=''>Vitamins & Minerals:</label></div>
                    <div className='inputBox'></div>

                    <div className="nutrimentDetails">
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>A:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='vitamin_A'  value={formData.nutrients.vitamin_A} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>B1:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='vitamin_B1'  value={formData.nutrients.vitamin_B1} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>B2:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='vitamin_B2'  value={formData.nutrients.vitamin_B2} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>B3:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='vitamin_B3'  value={formData.nutrients.vitamin_B3} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>pantothenic_acid (B4):</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='pantothenic_acid'  value={formData.nutrients.pantothenic_acid} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>B6:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='vitamin_B6'  value={formData.nutrients.vitamin_B6} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>B7:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='vitamin_B7'  value={formData.nutrients.vitamin_B7} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>folate (B7):</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='folate'  value={formData.nutrients.folate} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>folic_acid (B8):</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='folic_acid'  value={formData.nutrients.folic_acid} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>B12:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='vitamin_B12'  value={formData.nutrients.vitamin_B12} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>C:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='vitamin_C'  value={formData.nutrients.vitamin_B12} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>D:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='vitamin_D'  value={formData.nutrients.vitamin_D} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>E:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='vitamin_E'  value={formData.nutrients.vitamin_E} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>K:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='vitamin_K'  value={formData.nutrients.vitamin_K} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Calcium:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='calcium'  value={formData.nutrients.calcium} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Iodine:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='iodine'  value={formData.nutrients.iodine} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Iron:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='iron'  value={formData.nutrients.iron} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>beta_carotene:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='beta_carotene'  value={formData.nutrients.beta_carotene} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>chromium:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='chromium'  value={formData.nutrients.chromium} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>cobalt:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='cobalt'  value={formData.nutrients.cobalt} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>Copper:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='copper'  value={formData.nutrients.copper} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>magnesium:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='magnesium'  value={formData.nutrients.magnesium} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>manganese:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='manganese'  value={formData.nutrients.manganese} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>molybdenum:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='molybdenum'  value={formData.nutrients.molybdenum} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>phosphorus:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='phosphorus'  value={formData.nutrients.phosphorus} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>potassium:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='potassium'  value={formData.nutrients.potassium} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>selenium:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='selenium'  value={formData.nutrients.selenium} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>sodium:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='sodium'  value={formData.nutrients.sodium} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                        <div className='formLineBox'>
                            <div className='labelBox'><label htmlFor=''>zinc:</label></div>
                            <div className='inputBox'><input type='number' min={0} step={0.1} name='zinc'  value={formData.nutrients.zinc} onBlur={onLeaveFieldHandler} onFocus={onFocusFieldHandler} onChange={onChangeHandler}  id=''/></div>
                        </div>
                    </div>
                </div>
                <button type={'button'} onClick={onSubmitForm} className="waves-effect waves-light btn">button</button>
            </div>
        </form>
    );
}