import Protos from './protobuf-generated/load';

const PROTO_MAP = {
  Authentication_GenerateAccessTokenForApp: 'CAuthentication_AccessToken_GenerateForApp'
};

export function getProtoForMethod(apiInterface, apiMethod, requestDefinitionName = null, responseDefinitionName = null): { request: any, response: any } {
  let signature = [apiInterface, apiMethod].join('_');


  if (!requestDefinitionName && !responseDefinitionName) {
    let protoDefinitionName = PROTO_MAP[signature] || `C${signature}`;
    requestDefinitionName = `${protoDefinitionName}_Request`;
    responseDefinitionName = `${protoDefinitionName}_Response`;
  }

  if (signature == 'Authentication_BeginAuthSessionViaCredentials') {
    requestDefinitionName += '_BinaryGuardData';
  }

  let request = Protos[requestDefinitionName];
  let response = Protos[responseDefinitionName];

  return {request, response};
}
