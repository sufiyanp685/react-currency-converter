function InputBox({
    label,
    OnAmountChange,
    OnCurrencyChange,
    readonly=false,
    CurrencyOptions=[],
    amount,
    selectvalue







}){



    return(
         <div className="bg-white p-3 rounded-lg text-sm flex $ ">
          
            <div className="w-1/2">
                <label    className="text-black/40 mb-2 inline-block">
                {label}
                    
                </label>
                
                <input

                type="number"
                placeholder="0"
                value={amount}
                readOnly={readonly}
                onChange={(e)=>{OnAmountChange && OnAmountChange(Number(e.target.value))}}




                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                     
                    
                    

                  

                    
                  
                    
                   
                    
                    
                    
             />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                

                <select
                label ={"CurrencyOptions"}

                selected value={selectvalue}
                onChange={(e)=>{OnCurrencyChange && OnCurrencyChange((e.target.value))}}
              
               
               
  
                >

                    {CurrencyOptions.map((currency)=>(
                    <option value={currency} key={currency}>
                        {currency}
                    </option>
                    
                    
                    
                    ))}
                   
               
               




                        
                  

                </select>
            </div>
         
        </div>
    )
    
}
export default InputBox