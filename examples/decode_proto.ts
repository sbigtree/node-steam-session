import Protos from '../src/protobuf-generated/load';


let data = 'CgUxMTI1MRABGAI='
let proto = Protos['CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request']
let de = proto.decode(Buffer.from(data,'base64'))
console.log(proto)
