// import {message} from 'antd'
import intl from 'react-intl-universal';

function exportData(exportDataModule, pid) {
  exportDataModule.html = {
    name: 'html',
    route: `/api/plugin/export?type=html&pid=${pid}`,
    desc: intl.get('ExportData.client.导出html文档')
  };
  (exportDataModule.markdown = {
    name: 'markdown',
    route: `/api/plugin/export?type=markdown&pid=${pid}`,
    desc: intl.get('ExportData.client.导出markdown文档')
  }),
    (exportDataModule.json = {
      name: 'json',
      route: `/api/plugin/export?type=json&pid=${pid}`,
      desc: intl.get('ExportData.client.导出json文档')
    });
  // exportDataModule.pdf = {
  //     name: 'pdf',
  //     route: `/api/plugin/export?type=pdf&pid=${pid}`,
  //     desc: '导出项目接口文档为 pdf 文件'
  // }
}

module.exports = function() {
  this.bindHook('export_data', exportData);
};
