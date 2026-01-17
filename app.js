import { connectWallet } from "./web3.js";
import { saveIdentity, verifyIdentity } from "./identity.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  document.getElementById("status").innerText = "Wallet connected";
};

document.getElementById("saveBtn").onclick = async () => {
  const data = document.getElementById("dataInput").value;
  const hash = await saveIdentity(data);
  document.getElementById("status").innerText = "Saved hash: " + hash;
};

document.getElementById("verifyBtn").onclick = async () => {
  const data = document.getElementById("dataInput").value;
  const result = await verifyIdentity(data);
  document.getElementById("status").innerText = "Verified: " + result;
};
