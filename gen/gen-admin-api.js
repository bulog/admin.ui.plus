const { generateApi } = require('swagger-typescript-api')
const path = require('path')
// const fs = require('fs')

const apis = [
  {
    output: path.resolve(__dirname, '../src/api/admin'),
    url: import.meta.env.VITE_API_URL + '/swagger/admin/swagger.json',
  },
]

apis?.forEach((api) => {
  generateApi({
    output: api.output,
    templates: path.resolve(__dirname, './templates'),
    url: api.url,
    httpClientType: 'axios',
    modular: true,
    cleanOutput: true,
    moduleNameIndex: 2, // 0 api, 1 api htt-client data-contracts, 2 apis htt-client data-contracts
    moduleNameFirstTag: true, //apis htt-client data-contracts
    unwrapResponseData: true,
    generateUnionEnums: true,
    defaultResponseType: 'AxiosResponse',
    // hooks: {
    //   onFormatTypeName: (typeName, rawTypeName, schemaType) => {

    //   },
    // }
  })
    .then((r) => {
      // files.forEach(({ content, name }) => {
      //   fs.writeFile(path, content);
      // });
    })
    .catch((e) => console.error(e))
})
