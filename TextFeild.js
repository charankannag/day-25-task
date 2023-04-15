import React from "react";

export default function TextFeild({label ="", id="", onChange=()=>{}, type="text", placeholder="" })
{
    return (
        <div class="mb-3">
        <label for="password" class="form.label">{label}</label>
        <input type={type} class="form.control" id={id}
         onChange={onChange}
         placeholder={placeholder}></input>
    </div>
)
}