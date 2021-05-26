import './Home.scss';
import React, { PureComponent as Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Icon, Card } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import LogoSVG from '../../components/LogoSVG/index.js';
import { changeMenuItem } from '../../reducer/modules/menu';
import intl from "react-intl-universal";
const plugin = require('client/plugin.js');

const ThirdLogin = plugin.emitHook('third_login');
const HomeGuest = () => (
  <div className="g-body">
    <div className="m-bg">
      <div className="m-bg-mask m-bg-mask0" />
      <div className="m-bg-mask m-bg-mask1" />
      <div className="m-bg-mask m-bg-mask2" />
      <div className="m-bg-mask m-bg-mask3" />
    </div>
    <div className="main-one">
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="home-header">
              <a href="#" className="item">
                YAPI
              </a>

            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={9} xs={24}>
            <div className="home-des">
              <div className="logo">
                <LogoSVG length="72px" />
                <span className="name">YAPI</span>
              </div>
              <div className="detail">
              {intl.get('Home.Home.高效、易用、功能强大')}<br />
                <span className="desc">{intl.get('Home.Home.旨在为开发、产品、测')}</span>
              </div>
              <div className="btn-group">
                <Link to="/login">
                  <Button type="primary" className="btn-home btn-login">
                    {intl.get('Home.Home.登录 / 注册')}
                  </Button>
                </Link>
                {ThirdLogin != null ? <ThirdLogin /> : null}
              </div>
            </div>
          </Col>
          <Col lg={15} xs={0} className="col-img">
            <div className="img-container">

            </div>
          </Col>
        </Row>
      </div>
    </div>
    </div>
);
HomeGuest.propTypes = {
  introList: PropTypes.array
};

@connect(
  state => ({
    login: state.user.isLogin
  }),
  {
    changeMenuItem
  }
)
@withRouter
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.login) {
      this.props.history.push('/group/261');
    }
  }

  componentDidMount() {}
  static propTypes = {
    introList: PropTypes.array,
    login: PropTypes.bool,
    history: PropTypes.object,
    changeMenuItem: PropTypes.func
  };
  toStart = () => {
    this.props.changeMenuItem('/group');
  };
  render() {
    return (
      <div className="home-main">
        <HomeGuest introList={this.props.introList} />
      </div>
    );
  }
}

// Home.defaultProps={
//   introList:[{
//     title:"接口管理",
//     des:"满足你的所有接口管理需求。不再需要为每个项目搭建独立的接口管理平台和编写离线的接口文档，其权限管理和项目日志让协作开发不再痛苦。",
//     detail:[
//       {title:"团队协作",des:"多成员协作，掌握项目进度",iconType:"team"},
//       {title:"权限管理",des:"设置每个成员的操作权限",iconType:"usergroup-add"},
//       {title:"项目日志",des:"推送项目情况，掌握更新动态",iconType:"schedule"}
//     ],
//     img:"./image/demo-img.jpg"
//   },{
//     title:"接口测试",
//     des:"一键即可得到返回结果。根据用户的输入接口信息如协议、URL、接口名、请求头、请求参数、mock规则生成Mock接口，这些接口会自动生成模拟数据。",
//     detail:[
//       {title:"编辑接口",des:"团队开发时任何人都可以在权限许可下创建、修改接口",iconType:"tags-o"},
//       {title:"mock请求",des:"创建者可以自由构造需要的数据，支持复杂的生成逻辑",iconType:"fork"}
//     ],
//     img:"./image/demo-img.jpg"
//   }
//   ]
// };

export default Home;
