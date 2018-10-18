import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { getFlatternDistance, formatTime } from  './util'
import { INITIALOPTIONS } from './config'

let qq = window.qq = window.qq || {};
qq.maps = qq.maps || {};

class OrderMap extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const { apiKey } = this.props
        this._addScript('open.map.qq.com/apifiles/2/4/85/main.js', apiKey)
    }

    componentWillUnmount() {
        this.map && qq.maps.event.clearListeners(this.map)
    }

    // 加载外部script
    _addScript(src, apiKey) {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = `${location.protocol}//${src}`
        document.body.appendChild(script)
        script.onload = () => this._initMap()
        const loadScriptTime = (new Date).getTime()
        qq.maps.__load = function(apiLoad) {
            delete qq.maps.__load
            apiLoad([["2.4.85", apiKey, 0],["open.map.qq.com/","apifiles/2/4/85/mods/","open.map.qq.com/apifiles/2/4/85/theme/",true],[1,18,34.519469,104.461761,4],[1519918617710,"pr.map.qq.com/pingd","pr.map.qq.com/pingd"],["apis.map.qq.com/jsapi","apikey.map.qq.com/mkey/index.php/mkey/check","sv.map.qq.com/xf","sv.map.qq.com/boundinfo","sv.map.qq.com/rarp","apis.map.qq.com/api/proxy/search","apis.map.qq.com/api/proxy/routes/","confinfo.map.qq.com/confinfo"],[[null,["rt0.map.gtimg.com/tile","rt1.map.gtimg.com/tile","rt2.map.gtimg.com/tile","rt3.map.gtimg.com/tile"],"png",[256,256],3,19,"114",true,false],[null,["m0.map.gtimg.com/hwap","m1.map.gtimg.com/hwap","m2.map.gtimg.com/hwap","m3.map.gtimg.com/hwap"],"png",[128,128],3,18,"110",false,false],[null,["p0.map.gtimg.com/sateTiles","p1.map.gtimg.com/sateTiles","p2.map.gtimg.com/sateTiles","p3.map.gtimg.com/sateTiles"],"jpg",[256,256],1,19,"101",false,false],[null,["rt0.map.gtimg.com/tile","rt1.map.gtimg.com/tile","rt2.map.gtimg.com/tile","rt3.map.gtimg.com/tile"],"png",[256,256],1,19,"",false,false],[null,["sv0.map.qq.com/hlrender/","sv1.map.qq.com/hlrender/","sv2.map.qq.com/hlrender/","sv3.map.qq.com/hlrender/"],"png",[256,256],1,19,"",false,false],[null,["rtt2.map.qq.com/rtt/","rtt2a.map.qq.com/rtt/","rtt2b.map.qq.com/rtt/","rtt2c.map.qq.com/rtt/"],"png",[256,256],1,19,"",false,false],null,[["rt0.map.gtimg.com/vector/","rt1.map.gtimg.com/vector/","rt2.map.gtimg.com/vector/","rt3.map.gtimg.com/vector/"],[256,256],3,18,"114",["rt0.map.gtimg.com/icons/","rt1.map.gtimg.com/icons/","rt2.map.gtimg.com/icons/","rt3.map.gtimg.com/icons/"]],null],["s.map.qq.com/TPano/v1.1.2/TPano.js","map.qq.com/",""]],loadScriptTime);
        }
    }

    // 初始化地图
    _initMap() {
        const { initialOptions, orderList, boxInfo } = this.props
        const options = Object.assign({}, INITIALOPTIONS, initialOptions)
        const center = new qq.maps.LatLng(boxInfo.lat, boxInfo.lng)

        options.center = center
        this.map = new qq.maps.Map(this.mapContainer, options)
        qq.maps.event.addListener(this.map, 'click', (e) => {
            this.infoWindow && this.infoWindow.close()
        })
        this._addXianMarker(boxInfo)
        orderList && this._addOrderMarker(orderList, boxInfo)
    }

    // 创建鲜库标记
    _addXianMarker(boxInfo) {
        const position = new qq.maps.LatLng(boxInfo.lat, boxInfo.lng)
        let xianOverlay = function(opts) {
            qq.maps.Overlay.call(this, opts)
        }
        xianOverlay.prototype = new qq.maps.Overlay()
        xianOverlay.prototype.construct = function() {
            this.dom = document.createElement('div')
            this.dom.style.cssText = "background:#f00;font-size:8px;color:#fff;position:absolute;display:flex;" + "justify-content:center;align-items:center;width:28px;height:28px;border-radius:14px;"
            this.dom.innerHTML = this.get('initHtml')
            this.getPanes().overlayLayer.appendChild(this.dom)
        }
        xianOverlay.prototype.draw = function() {
            //获取地理经纬度坐标
            let position = this.get('position')
            if (position) {
                let pixel = this.getProjection().fromLatLngToDivPixel(position)
                this.dom.style.left = pixel.getX() - 14 + 'px'
                this.dom.style.top = pixel.getY() - 14 + 'px'
            }
        }
        xianOverlay.prototype.destroy = function() {
            this.dom.parentNode.removeChild(this.dom) //移除dom
        }
        // console.log(qq.maps.Overlay.prototype)
        // console.log(qq.maps.Marker.prototype)
        // console.log(qq.maps.MarkerDecoration.prototype)
        // console.log(qq.maps.event.addListener.prototype)
        new xianOverlay({
            map: this.map,
            position,
            initHtml: '鲜库'
        })
    }

    // 创建订单标记
    _addOrderMarker(orderList, boxInfo) {
        this.infoWindow = new qq.maps.InfoWindow({
            map: this.map
        })
        orderList.forEach((item, i) => {
            const { addressInfo, sendDay, sendTime, orderNumber, createdAt } = item
            if(!addressInfo) return
            const position = new qq.maps.LatLng(addressInfo.coordinate.lat, addressInfo.coordinate.lng)
            const decoration = new qq.maps.MarkerDecoration(`<span style="color: #fff; cursor: pointer;">${i + 1}</span>`)
            const distance = getFlatternDistance(addressInfo.coordinate.lat, addressInfo.coordinate.lng, boxInfo.lat, boxInfo.lng)
            const marker = new qq.maps.Marker({
                position,
                map: this.map,
                decoration,
                draggable: true,
                animation: qq.maps.MarkerAnimation.DROP,
            })

            qq.maps.event.addListener(marker, 'mouseover', () => {
                this.infoWindow.open()
                this.infoWindow.setContent(
                    `<div style="text-align:center;maigin:10px;width:300px;">
                        <table width="100%" border="0" cellspacing="1" cellpadding="10">
                            <tr>
                                <th>${orderNumber}</th>
                                <th>${formatTime(createdAt)}</th>
                            </tr>
                        </table>
                        <table width="100%" border="1" cellspacing="0" cellpadding="4">
                            <tr>
                                <td width="30%">订单类型</td>
                                <td>${sendDay === 'tomorrow' ? '明日达' : sendDay === 'presale' ? '预售' : '快速达'}</td>
                            </tr>
                            <tr>
                                <td width="30%">联系人信息</td>
                                <td>${addressInfo.receiver}&#x3000;${addressInfo.phoneNumber}</td>
                            </tr>
                            <tr>
                                <td width="30%">订单地址<br/>距离：${(distance / 1000).toFixed(2)}km</td>
                                <td>${addressInfo.detail + addressInfo.unitNumber}</td>
                            </tr>
                            <tr>
                                <td width="30%">配送时间</td>
                                <td>${!sendTime ? '即时配送' : sendDay == 'presale' ? `预售${sendTime}送达` : sendTime}</td>
                            </tr>
                        </table>
                    </div>`
                )
                this.infoWindow.setPosition(position)
            })
        })
    }


    render() {
        const { className, style } = this.props
        return(
            <div 
                ref={div => this.mapContainer = div}
                style={{ width: '100%', height: '100%', minHeight: 700 }}
                // style={{ width: '100%', height: '100%', ...style }}
                // {...{ className }}
            />
        )
    }
}

OrderMap.prototypes = {
    initialOptions: PropTypes.object,
    style: PropTypes.object,
    className: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
    orderList: PropTypes.array,
    boxInfo: PropTypes.object.isRequired
}

export default OrderMap