from bitcoinlib.wallets import Wallet, wallet_create_or_open
from bitcoinlib.mnemonic import Mnemonic


passphrase = "stable tag detail erase senior term shove sell twist tornado night drive"


#------------------------------------------------------------------> Prompt for the wallet name
wallet_name = input("Enter your wallet name: ")

# ----------------------------------------------------------------->Create or open the wallet using the mnemonic
wallet = wallet_create_or_open(wallet_name, keys=passphrase, network='bitcoin')
key = wallet.get_key()

# Print wallet details
print("Wallet created successfully!")
print(f"Wallet ID: {wallet.wallet_id}")
print(f"Wallet Name: {wallet.name}")
print(f"Wallet Balance: {wallet.balance()}")
print(f"New Address: {key.address}")
