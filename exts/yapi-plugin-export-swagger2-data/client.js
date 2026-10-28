import intl from 'react-intl-universal';

function exportData(exportDataModule, pid) {
    exportDataModule.swaggerjson = {
      name: 'swaggerjson',
      route: `/api/plugin/exportSwagger?type=OpenAPIV2&pid=${pid}`,
      desc: intl.get('ExportSwagger2Data.client.导出Swagger文档')
    };
}

module.exports = function() {
    this.bindHook('export_data', exportData);
};