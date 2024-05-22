import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV3R2, WalletContractV4 } from "@ton/ton";

async function main() {
    const mnemonic = "lecture vote simple output clutch person open sunset scan clarify bundle trick jar tide lift soccer benefit sphere shed fresh stick result thumb history";
    const key = await mnemonicToWalletKey(mnemonic.split(" "));
    const walletV3R2 = WalletContractV3R2.create({ publicKey: key.publicKey, workchain: 0 });
    const walletV4 = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });

    console.log("wallet address V3R2:", walletV3R2.address.toString({testOnly: false}));
    console.log("wallet address V3R2 test only:", walletV3R2.address.toString({testOnly: true}));
    console.log("wallet address V4:", walletV4.address.toString({testOnly: false}));
    console.log("wallet address V4 test only:", walletV4.address.toString({testOnly: true}));
}

//EQB92XHT-O_MKI3x2oQ4lLbx9-YPKq7e2pHxQ21VErqoKAAg
//kQB92XHT-O_MKI3x2oQ4lLbx9-YPKq7e2pHxQ21VErqoKLuq
//EQB2Wo3uAjW8eYKnU1pc7TIt_aO__HsMrlcCVMvRiwBpb5XQ
//kQB2Wo3uAjW8eYKnU1pc7TIt_aO__HsMrlcCVMvRiwBpby5a

main();