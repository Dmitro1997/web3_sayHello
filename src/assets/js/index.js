import HelloWorld from '../../abis/HelloWorld.json'

let networkAccount = null
let contract = null

const mint_btn = document.getElementById('mint_btn')
const mint_label = document.getElementById('mint_result')


const loadBlockchainData = async (web3Info) => {
  if (web3Info) {
    const accounts = await web3Info.eth.getAccounts()
    if (accounts.length > 0) {

      networkAccount = accounts[0]
      const networkId = await web3Info.eth.net.getId()
      const networkData = HelloWorld.networks[networkId]
      if (networkData) {
        const abi = HelloWorld.abi
        const address = networkData.address
        contract = new web3Info.eth.Contract(abi, address)
        const result = await contract.methods.getHello().call()
        mint_label.innerText = result
        return
      }
    }
  }
  alert('web3Info is not valid')

}
async function sayHello(name) {
  return new Promise((resolve) => {
    contract.methods.sayHello(name).send({ from: networkAccount }, function (receipt) {
      resolve(receipt)
    })
  })
}

mint_btn.addEventListener('click', async () => {
  try {

    const name = document.getElementById('mint_name').value
    if (name) {
      await sayHello(name)
      loadBlockchainData()
    } else {
      alert('name is null')
    }
  } catch (error) {
    console.error(error)
  }
})

window.onload = async function () {
  mint_btn.disabled = true
  let web3 = null
  if (window.ethereum) {
    web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  }

  if (window.web3) {
    web3 = new Web3(window.web3.currentProvider)
  } else {
    window.alert('Please use metamask')
    return null
  }
  await loadBlockchainData(web3)
  mint_btn.disabled = false
}




