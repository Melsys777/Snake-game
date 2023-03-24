const signInButton = document.getElementById('sign-in-with-ethereum');
signInButton.addEventListener('click', signInWithEthereum);

async function signInWithEthereum() {
  // Connect to the Ethereum network using Web3.js
  const web3 = new Web3(Web3.givenProvider);

  // Get the user's Ethereum address
  const accounts = await web3.eth.getAccounts();
  const ethereumAddress = accounts[0];

  // Use a smart contract to verify the user's signature and sign them in
  const contract = new web3.eth.Contract(contractAbi, contractAddress);
  const message = "Sign in to My Website";
  const signature = await web3.eth.personal.sign(message, ethereumAddress);
  const result = await contract.methods.signIn(ethereumAddress, signature).send({ from: ethereumAddress });

  // Handle the sign-in result
  console.log(result);
}
