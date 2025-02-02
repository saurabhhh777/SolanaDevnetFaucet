import React from  "react";
import { ConnectionProvider,WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider,WalletConnectButton,WalletDisconnectButton,WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import {clusterApiUrl} from "@solana/web3.js";
import Airdrop from "./Airdrop.jsx";



function App(){
  return(
    <>
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/SuvkRwo6qsFDSN3NohgZzcWFCkSoUY0w"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="h-screen w-screen flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold font-sans">Solana Devnet Faucet</h2>
              <div className="h-[80%] w-[80%] bg-[#D0E4FF] rounded-2xl flex flex-col justify-center items-center gap-4 p-8 ">
                <WalletMultiButton className="p-2"/>
                <WalletDisconnectButton/>
                <Airdrop/>

              </div>
            </div>
            {/* <WalletConnectButton /> */}
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    
    </>
  )
}


export default App;
