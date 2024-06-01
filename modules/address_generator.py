# bitcoin_wallet_module.py

from bitcoinlib.wallets import Wallet

def create_wallet_and_get_address(wallet_name):
    """
    Create a Bitcoin wallet and retrieve the first key's address.

    Args:
        wallet_name (str): The name for the wallet.

    Returns:
        str: The address associated with the first key in the wallet.
    """
    # Create a wallet on the Bitcoin mainnet
    wallet = Wallet.create(wallet_name)

    # Get the first key (address) from the wallet
    key1 = wallet.get_key()

    # Return the address associated with the first key
    return key1.address
