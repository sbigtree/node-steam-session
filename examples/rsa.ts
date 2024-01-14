import {hex2b64, Key as RSAKey, linebrk, byte2Hex, b64tohex} from 'node-bignumber';
// Generate a key
let key = new RSAKey();
// key.generate(2048, "10001");
// console.log("Key:\n");
// console.log("n:" + key.n.toString(16));
// console.log("e:" + key.e.toString(16));
// console.log("d:" + key.d.toString(16));
// console.log("\n");
// 公钥
const n = 'e370737d3d38652730a756084d2d2c1c9d4aac6f56c0085ca105b0c72dd74ce1fea43bd759708a8e4fa97326c674afd198bee95bc9539676c44be2685c689e6b3c9e758248bf2b925b644e5017548488d344f91988b2eb67cda1dc4d744bc78164b56ac74e07625cfc6fc8de510aa2cb4960c6a1a8b294d8001b0960b6d19897'


//
const e = '10001'
// 私钥
const d = '49fd2314f2fd8daa9a2155d38d87cc79e29190570819a09ec1a36046eb9ac6e01e3ebf58e737bd5b5e7ef97efbc0aa11bd671df3462373275fe46fdb1374d553e07c0e75ceb679957950d620f6d9bd2128ec320d5fe826c8d544b766ccd5d8fde58754c1436202d06533e04af4a6c16b9a97c9f324de6ab009a191ba6cf96701'





// const publickey_mod = 'f2e1b1aa70ab0ef3f71f9e2b14718c514e978512e0884f127aa8d862c173591069c72903525699e207cd56c2f4e2573c017d62764ef34f6c866bbe8b307d54f27eb60406f381d27d56f76b1034cf2b5b2448fd77610ebbdeb5f76340cab6e3e7b2cd3d6cad077064ea800cef3ae3ac940e4eb8cea80c3557efea446774c0fe3d'

// const publickey_exp = '10001'
// key.setPublic(n, e);
key.setPrivate(n,e,d)

// var encrypted = key.encrypt('222');
// console.log("Encrypted:\n" + linebrk(encrypted, 64) + "\n" );

// Decrypt
// var decrypted = key.decrypt(encrypted);
// console.log("Decrypted:" + linebrk(decrypted, 64) + "\n");


const content = '22222'
const encrypted_hex = key.encrypt(content)
let encrypted = hex2b64(encrypted_hex)
const encrypted_64 = Buffer.from(encrypted_hex, 'hex').toString('base64')
console.log('encrypted_hex', encrypted_hex)
console.log('encrypted_hex_b64', encrypted_64)
console.log('encrypted_b64', encrypted)

const hex = b64tohex(encrypted)
const buf1 = Buffer.from(encrypted, 'base64')
const buf2 = Uint8Array.from(Buffer.from(hex, 'hex'))
// const b64 = byte2Hex(buf2)
let decrypted = buf1.toString('hex')
// decrypted = '8b7abc332c0a22c89a699f268ab7c7376f250d03d38e4ac924ef639a03adab4cc7cbfb4192a3fe48f861725738d757c99cd7a276c31467d6fbc9966584a7d1cb11fd1c64e40f16642c2d8f7cb88824f69a278bffc880fc658a2679eb94214aba5d8beb8189b6afb48ecc14840c6e5454a5dab592c19b633cfbd9572a6'
decrypted = key.decrypt(decrypted)
console.log('decrypted', decrypted?.toString())
//
// const buf = Buffer.from('22222',)
// console.log(buf)

