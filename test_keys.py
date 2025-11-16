import os
from cdp import CdpClient
from dotenv import load_dotenv

# Load .env if present
load_dotenv()

print("=== Testing CDP Keys & Wallet Secret ===")

api_key_id = os.getenv("CDP_API_KEY_ID")
api_key_secret = os.getenv("CDP_API_KEY_SECRET")
client_key = os.getenv("NEXT_PUBLIC_CDP_CLIENT_KEY")

print(f"CDP_API_KEY_ID loaded: {bool(api_key_id)}")
print(f"CDP_API_KEY_SECRET loaded: {bool(api_key_secret)}")
print(f"NEXT_PUBLIC_CDP_CLIENT_KEY loaded: {bool(client_key)}")

print("\nInitializing CDP client...")

try:
    cdp = CdpClient(api_key_id=api_key_id, api_key_secret=api_key_secret)
    print("✔️ CDP client initialized successfully")
except Exception as e:
    print("❌ CDP client initialization FAILED")
    print(e)
    exit(1)

print("\nTesting account creation (no funds required)...")

try:
    acct = cdp.evm.create_account()
    print("✔️ Account created successfully")
    print(f"Address: {acct['address']}")
except Exception as e:
    print("❌ Failed to create account")
    print(e)
    exit(1)

print("\n=== TEST COMPLETE ===")
