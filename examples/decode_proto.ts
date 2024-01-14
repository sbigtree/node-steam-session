import Protos from '../src/protobuf-generated/load';

const fs = require('fs')
const path = require('path')


// let data = 'CgUxMTI1MRABGAI='
// let proto = Protos['CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request']
// let de = proto.decode(Buffer.from(data,'base64'))
// console.log(proto)


// let data = 'CfvbBVwBABABIAEqJDJGN0Q2RjNGLTlBOUQtNDg2Ni05RkJGLUM5NEYxNkVBRDVCNzIBMUAC'
// let proto = Protos['CTwoFactor_AddAuthenticator_Request']
// let de = proto.decode(Buffer.from(data,'base64'))
// console.log(de)


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

// 点数赠送
// let data = 'CAMQ+uOJi5SAgIgBGAE='
// let proto = Protos['CLoyaltyRewards_AddReaction_Request']
// let de = proto.decode(Buffer.from(data,'base64'))
// de.targetid = de.targetid.toString()
// {
//   target_type: 3,
//   targetid: '76561199057236474',
//   reactionid: 1
// }
// console.log(de)
// console.log(de.targetid.toString())

// 点数商店获取
// let data = 'CAMQ+uOJi5SAgIgB'
// let proto = Protos['CLoyaltyRewards_GetReactions_Request']
// let de = proto.decode(Buffer.from(data,'base64'))
// console.log(de)
// console.log(de.targetid.toString())


// 获取我的APP列表
let data = 'CgVnYW1lcxIEbm9uZRjYxJmjvZaPoTUgAQ=='
let proto = Protos['CClientComm_GetClientAppList_Request']
let de = proto.decode(Buffer.from(data,'base64'))
console.log(de)
