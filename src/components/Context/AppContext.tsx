import { HELIUS_RPC_ENDPOINT } from "@/utils/constants";
import { Connection } from "@solana/web3.js";
import { createContext, useEffect, useMemo, useState } from "react";

import * as solana from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";

interface AppContextType {
  connection: Connection;
}

export const AppContext = createContext<AppContextType>({
  connection: new Connection(HELIUS_RPC_ENDPOINT),
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { publicKey } = useWallet();
  const connection = useMemo(
    () => new Connection(HELIUS_RPC_ENDPOINT, "confirmed"),
    []
  );

  return (
    <AppContext.Provider value={{ connection }}>{children}</AppContext.Provider>
  );
};
