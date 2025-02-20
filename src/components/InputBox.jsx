import React, {useId} from "react";

function InputBox({
    label,   // from | to
    amount,  // total amount
    currencyOptions=[], 
    onCurrencyChange,   //for changing state in App.jsx of 'setAmount'
    selCurrency="usd", 
    onAmountChange, 
    amountDisable=false,  
    currencyDisable=false, 
    className = ""}) {

    // useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
    const amountInputId = useId()

    return (
        // js css | if at any case user wants to set the css
        <div className={`bg-white p-3 rounded-lg text-lg flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}

                    // sometimes js get value in string data type so first convert it into number just for surity
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} // changing the amount in 'state' in App.jsx  ||  when we change the amount here it will reflect in App.jsx
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"  
                    value={selCurrency}
                    
                    // if onCurrencyChange is defined then only call the onCurrencyChange : && operator ensures `onCurrencyChange` is defined before calling it 
                    // onCurrencyChange is undefined it will not be executed | as we know undefined is false
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}  // changing the currency in 'state' in App.jsx

                    disabled={currencyDisable}>
                       
                    {currencyOptions.map((currency)=>(
                        // always use key when writing code in jsx file, without it performance will be dead  : remember the key in react
                        // while loopoing
                        <option key={currency} value={currency}>   
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;