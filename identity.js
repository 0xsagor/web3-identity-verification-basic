import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const identityAddress = "0xYourIdentityContract";
const abi = [];

export async function saveIdentity(data) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(identityAddress, abi, signer);

  const hash = ethers.keccak256(ethers.toUtf8Bytes(data));
  const tx = await contract.save(hash);
  const receipt = await tx.wait();

  return receipt.transactionHash;
}

export async function verifyIdentity(data) {
  const provider = getProvider();
  const contract = new ethers.Contract(identityAddress, abi, provider);

  const hash = ethers.keccak256(ethers.toUtf8Bytes(data));
  return await contract.verify(hash);
}
