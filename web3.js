import { ethers } from "ethers";

export function getProvider() {
  if (!window.ethereum) {
    alert("Please install MetaMask");
    return null;
  }
  return new ethers.BrowserProvider(window.ethereum);
}

export async function connectWallet() {
  const provider = getProvider();
  await provider.send("eth_requestAccounts", []);
  alert("Wallet connected");
}
