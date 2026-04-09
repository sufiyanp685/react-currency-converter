import useCurrencyInfo from "./Hook/UseCurrencyInfo";
import { useState } from "react";
import InputBox from "./componenets/InputBox";


function App() {
    const[amount,setAmount]=useState("")
    const[convertedAmount,setConvertedAmount]=useState("")
    const[from,setFrom]=useState("usd")
    const[to,setTo]=useState("inr")
    const currencyData = useCurrencyInfo(from)
    let options = Object.keys(currencyData || {})
    console.log(options)

    const swap=()=>{
        setAmount(convertedAmount)
        setConvertedAmount(amount)
        setFrom(to)
        setTo(from)

    }
    const convert=()=>{
        setConvertedAmount(amount*currencyData[to])
    }
  

 
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                
                }}
                
                >
                    <div className="w-full mb-1">
                    {/* Here we are passing props in InputBox  */}
                    <InputBox
                    amount={amount}
                    label={"amount"}
                    OnAmountChange={(achange)=>{setAmount(achange)}}
                    selectvalue={from}
                    CurrencyOptions={options}
                    OnCurrencyChange={(cchange)=>{setFrom(cchange)}}


                    
                    
                    
                    
                    />


                  
                    
                      
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            
                             onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        {/*Props for another input element*/ }
                        <InputBox
                          amount={convertedAmount}
                          label={"ConvertedAmount"}
                          OnAmountChange={(achange)=>{setConvertedAmount()}}
                          selectvalue={to}
                          CurrencyOptions={options}
                          OnCurrencyChange={(cchange)=>{setTo(cchange)}}

                          readonly={true}
                        
                        
                        
                        />
                       
                       
                      
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert} >
                        {from.toUpperCase()}to {to.toUpperCase()}
                        
                      
                        
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}



export default App
