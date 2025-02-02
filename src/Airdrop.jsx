import { useConnection , useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";


export default function Airdrop(){

    const [amount , setAmount] = useState();

    const wallet = useWallet();
    const {connection} = useConnection();

    async function handleAirdrop(){
        if(!wallet.publicKey || !amount){
            return;
        }

        
        await connection.requestAirdrop(wallet.publicKey,amount*1e9);

            // await connection.confirmTransaction(txSignature);
        console.log("Airdrop successful ");

    }



    return(
        
        <div>
            <input type="number" placeholder="Amount" className="border-2 p-2 rounded" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <button className="border-2 bg-blue-600 rounded p-2 text-white " onClick={handleAirdrop}>SendAirdrop</button>

        </div>
    )
}