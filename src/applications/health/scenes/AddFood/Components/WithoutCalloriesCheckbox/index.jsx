import React from "react";

export const WithoutCaloriesCheckbox = ({ isWithCallories, setIsWithCallories }) => {
    const onClickHandlerWithoutCalories = () => {
        setIsWithCallories(!isWithCallories)
    };

    return (
        <div className="withoutCaloriesCheckbox">
            <form action="">
                <label>
                    <input onClick={onClickHandlerWithoutCalories} checked={isWithCallories} type="checkbox" class="filled-in"  />
                    <span>Without callories</span>
                </label>
            </form>
        </div>
    );
};