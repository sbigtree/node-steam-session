import Protos from '../src/protobuf-generated/load';

const fs = require('fs')
const path = require('path')


// let data = 'CgUxMTI1MRABGAI='
// let proto = Protos['CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request']
// let de = proto.decode(Buffer.from(data,'base64'))
// console.log(proto)


let data = 'CfvbBVwBABABIAEqJDJGN0Q2RjNGLTlBOUQtNDg2Ni05RkJGLUM5NEYxNkVBRDVCNzIBMUAC'
let proto = Protos['CTwoFactor_AddAuthenticator_Request']
let de = proto.decode(Buffer.from(data,'base64'))
console.log(de)


// let data = 'Cg4rODYxNTY3ODg4MDUyMRICQ04='
// let proto = Protos['CPhone_SetAccountPhoneNumber_Request']
// let de = proto.decode(Buffer.from(data,'base64'))
// console.log(de)

//
// let data = 'CAY='
// let proto = Protos['CPhone_SendPhoneVerificationCode_Request']
// let de = proto.decode(Buffer.from(data,'base64'))
// console.log(de)

// let data = 'CAY='
// let proto = Protos['CPhone_IsAccountWaitingForEmailConfirmation_Response']
// let de = proto.decode(Buffer.from([8, 0],))
// console.log(de)

// let data = 'CQ3EFFwBABABGILc5KgGIgUyMTU3NjAB='
// let proto = Protos['CTwoFactor_FinalizeAddAuthenticator_Request']
// let de = proto.decode(Buffer.from(data, 'base64'))
// console.log(de)

// let data = 'CQ3EFFwBABABGILc5KgGIgUyMTU3NjAB='
// let proto = Protos['CTwoFactor_FinalizeAddAuthenticator_Response']
// let de = proto.decode(Buffer.from(data, 'base64'))
// console.log(de)

// const buffer = fs.readFileSync(path.join(__dirname, 'guard'),)
//
// let proto = Protos['CTwoFactor_AddAuthenticator_Response']
// let de = proto.decode(buffer)
// de = JSON.stringify(de, (key, value) => {
//   if (value.type == 'Buffer') {
//     return Buffer.from(value.data,).toString('base64')
//   }
//   return value;
// })
// console.log(de)

// const buffer = fs.readFileSync(path.join(__dirname, 'watingForEmail'),)
//
// let proto = Protos['CPhone_IsAccountWaitingForEmailConfirmation_Response']
// let de = proto.decode(buffer)
// de = JSON.stringify(de, (key, value) => {
//   if (value.type == 'Buffer') {
//     return Buffer.from(value.data,).toString('base64')
//   }
//   return value;
// })
// console.log(de)

// const buffer = fs.readFileSync(path.join(__dirname, 'FinalizeAddAuthenticator'),)
//
// let proto = Protos['CTwoFactor_FinalizeAddAuthenticator_Response']
// let de = proto.decode(buffer)
// de = JSON.stringify(de, (key, value) => {
//   if (value.type == 'Buffer') {
//     return Buffer.from(value.data,).toString('base64')
//   }
//   return value;
// })
// console.log(de)

// let proto = Protos['CPhone_IsAccountWaitingForEmailConfirmation_Response']
// let de = proto.decode(buffer)
// de = JSON.stringify(de, (key, value) => {
//   if (value.type == 'Buffer') {
//     return Buffer.from(value.data,).toString('base64')
//   }
//   return value;
// })
// console.log(de)
