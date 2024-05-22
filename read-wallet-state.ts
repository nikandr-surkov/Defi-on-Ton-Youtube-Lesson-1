import { getHttpEndpoint } from "@orbs-network/ton-access";
import { mnemonicToWalletKey } from "@ton/crypto";
import { TonClient, WalletContractV4, fromNano } from "@ton/ton";

async function main() {
    const mnemonic = "lecture vote simple output clutch person open sunset scan clarify bundle trick jar tide lift soccer benefit sphere shed fresh stick result thumb history";
    const key = await mnemonicToWalletKey(mnemonic.split(" "));
    const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });

    const endpoint = await getHttpEndpoint({ network: "testnet" });
    const client = new TonClient({ endpoint });

    const balance = await client.getBalance(wallet.address);
    console.log("balance:", fromNano(balance));

    const walletContract = client.open(wallet);
    const seqno = await walletContract.getSeqno();
    console.log("seqno:", seqno);
}

main();