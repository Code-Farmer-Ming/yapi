import AdvMock from './AdvMock'
import mockCol from './MockCol/mockColReducer.js'
import intl from 'react-intl-universal'

module.exports = function(){
  this.bindHook('interface_tab', function(tabs){
    tabs.advMock = {
      name: intl.get('AdvMock.client.高级Mock'),
      component: AdvMock
    }
  })
  this.bindHook('add_reducer', function(reducerModules){
    reducerModules.mockCol = mockCol;
  })
}