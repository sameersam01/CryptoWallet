from bitcoinlib.wallets import Wallet
from bitcoinlib.services.bitcoind import BitcoindClient
from bitcoinlib.mnemonic import Mnemonic

# Configure the RPC connection to Bitcoin Core
rpc_user = 'capybara'
rpc_password = 'capybara@123'
rpc_host = '127.0.0.1'
rpc_port = 8332

# Create a base URL for the RPC connection
base_url = f'http://{rpc_user}:{rpc_password}@{rpc_host}:{rpc_port}'

# Initialize BitcoindClient with the base URL
bdc = BitcoindClient(base_url=base_url)

# Verify connection to Bitcoin Core node
try:
    bdc.getinfo()
    print("Connected to Bitcoin Core node successfully.")
except Exception as e:
    print(f"Failed to connect to Bitcoin Core node: {e}")
    exit(1)

# Set the global service for bitcoinlib
Wallet.default_service = bdc

# Create or load a wallet on the Bitcoin mainnet

wallet_name = input('Enter wallet name: ')
try:
    wallet = Wallet(wallet_name)  # Try to load an existing wallet
except:
    passphrase = Mnemonic().generate()
    print(passphrase)
    wallet = Wallet.create(wallet_name, keys=passphrase, network='bitcoin')  # If it doesn't exist, create a new one

# Get the first key (address) from the wallette
key1 = wallet.get_key()

# Scan the wallet for transactions
wallet.scan()
wallet.info()

# Fetch and print the wallet balance
balance = wallet.balance() 
balance_bitcoins = balance / 100000000
print(f"Wallet Balance: {balance_bitcoins} ₿")
print("Wallet Address:", key1.address)

# Fetch transactions for
transactions = wallet.transactions()
if transactions:
    print("Transactions found in wallet:")
    for tx in transactions:
        print(tx)
else: 
    print("No transactions found.")

# Send BTC to another address
recipient_address = input("Enter the recipient Bitcoin address: ")
amount = float(input("Enter the amount of BTC to send: "))

# Ensure there is enough balance
if amount > balance:
    print("Insufficient balance to complete the transaction.")
else:
    try:
        txid = wallet.send_to(recipient_address, amount)
        print(f"Transaction successful. TXID: {txid}")
    except Exception as e:
        print(f"Failed to send BTC: {e}")

