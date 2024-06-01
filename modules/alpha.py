# bitcoin_wallet_module.py

from bitcoinlib.wallets import Wallet, WalletError

def display_balance(wallet):
    """
    Display the balance of the given wallet.

    Args:
        wallet (Wallet): The wallet object.

    Returns:
        float: The balance of the wallet.
    """
    return wallet.balance()

def send_bitcoin(wallet, recipient_address, amount):
    """
    Send bitcoin from the given wallet to the specified address.

    Args:
        wallet (Wallet): The wallet object.
        recipient_address (str): The recipient's Bitcoin address.
        amount (float): The amount of Bitcoin to send.

    Returns:
        str: The transaction ID if the transaction is successful.
        str: An error message if the transaction fails.
    """
    try:
        tx = wallet.send_to(recipient_address, amount, fee=0.0001)  # Assuming a fixed transaction fee
        return f"Successfully sent {amount} BTC to {recipient_address}. Transaction ID: {tx.txid}"
    except WalletError as e:
        return f"Error sending bitcoin: {e}"

def load_or_create_wallet(wallet_name):
    """
    Load an existing wallet or create a new one if it doesn't exist.

    Args:
        wallet_name (str): The name of the wallet.

    Returns:
        Wallet: The loaded or created wallet object.
        str: A message indicating the result of the operation.
    """
    try:
        # Attempt to load the wallet
        wallet = Wallet(wallet_name)
        return wallet, "Wallet loaded successfully!"
    except WalletError:
        # Create new wallet if it doesn't exist
        wallet = Wallet.create(wallet_name)
        return wallet, "Wallet created successfully!"
