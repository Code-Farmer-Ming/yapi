import React, { PureComponent as Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import intl from 'react-intl-universal'
import { getToken } from '../../../client/reducer/modules/project.js'


import './Services.scss';

@connect(
  state => {
    return {
      token: state.project.token
    }
  },
  {
    getToken
  }
)
export default class Services extends Component {
  static propTypes = {
    projectId: PropTypes.string,
    token: PropTypes.string,
    getToken: PropTypes.func
  }

  async componentDidMount() {
    const id = this.props.projectId;
    await this.props.getToken(id);

  }
  render() {
    const id = this.props.projectId;
    return (
      <div className="project-services">
        <section className="news-box m-panel">
          <div className="token">
            <h5>Install Tools</h5>
            <pre>{`
  npm i sm2tsservice -D
  `}</pre>
            <h5>Configuration [Version 3.2.0 and above]</h5>
            <pre>{`
  touch json2service.json
  `}</pre>
            <pre>{`
  {
    "url": "yapi-swagger.json",
    "remoteUrl": "${location.protocol}//${location.hostname}${location.port ? `:${location.port}` : ''}/api/open/plugin/export-full?type=json&pid=${id}&status=all&token=${this.props.token}",
    "type": "yapi",
    "swaggerParser": {}
  }
  `}
            </pre>
            <h5>Configuration [Version 3.2.0 and below]</h5>
            <pre>{`
  touch json2service.json
  `}</pre>
            <pre>{`
  {
    "url": "${location.protocol}//${location.hostname}${location.port ? `:${location.port}` : ''}/api/open/plugin/export-full?type=json&pid=${id}&status=all&token=${this.props.token}",
    "type": "yapi",
    "swaggerParser": {}
  }
  `}
            </pre>
            <h5>{intl.get('Services.Services.生成services代码')}</h5>
            <pre>{`
  (./node_modules/.bin/)sm2tsservice --clear
  `}</pre>
          </div>
          <a href="https://github.com/gogoyqj/sm2tsservice">more sm2tsservice</a>
        </section>
      </div>
    );
  }
}
