module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = __webpack_require__(3);

var _config = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var qq = window.qq = window.qq || {};
qq.maps = qq.maps || {};

var OrderMap = function (_Component) {
    _inherits(OrderMap, _Component);

    function OrderMap() {
        _classCallCheck(this, OrderMap);

        return _possibleConstructorReturn(this, (OrderMap.__proto__ || Object.getPrototypeOf(OrderMap)).call(this));
    }

    _createClass(OrderMap, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var apiKey = this.props.apiKey;

            this._addScript('open.map.qq.com/apifiles/2/4/85/main.js', apiKey);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.map && qq.maps.event.clearListeners(this.map);
        }

        // 加载外部script

    }, {
        key: '_addScript',
        value: function _addScript(src, apiKey) {
            var _this2 = this;

            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = location.protocol + '//' + src;
            document.body.appendChild(script);
            script.onload = function () {
                return _this2._initMap();
            };
            var loadScriptTime = new Date().getTime();
            qq.maps.__load = function (apiLoad) {
                delete qq.maps.__load;
                apiLoad([["2.4.85", apiKey, 0], ["open.map.qq.com/", "apifiles/2/4/85/mods/", "open.map.qq.com/apifiles/2/4/85/theme/", true], [1, 18, 34.519469, 104.461761, 4], [1519918617710, "pr.map.qq.com/pingd", "pr.map.qq.com/pingd"], ["apis.map.qq.com/jsapi", "apikey.map.qq.com/mkey/index.php/mkey/check", "sv.map.qq.com/xf", "sv.map.qq.com/boundinfo", "sv.map.qq.com/rarp", "apis.map.qq.com/api/proxy/search", "apis.map.qq.com/api/proxy/routes/", "confinfo.map.qq.com/confinfo"], [[null, ["rt0.map.gtimg.com/tile", "rt1.map.gtimg.com/tile", "rt2.map.gtimg.com/tile", "rt3.map.gtimg.com/tile"], "png", [256, 256], 3, 19, "114", true, false], [null, ["m0.map.gtimg.com/hwap", "m1.map.gtimg.com/hwap", "m2.map.gtimg.com/hwap", "m3.map.gtimg.com/hwap"], "png", [128, 128], 3, 18, "110", false, false], [null, ["p0.map.gtimg.com/sateTiles", "p1.map.gtimg.com/sateTiles", "p2.map.gtimg.com/sateTiles", "p3.map.gtimg.com/sateTiles"], "jpg", [256, 256], 1, 19, "101", false, false], [null, ["rt0.map.gtimg.com/tile", "rt1.map.gtimg.com/tile", "rt2.map.gtimg.com/tile", "rt3.map.gtimg.com/tile"], "png", [256, 256], 1, 19, "", false, false], [null, ["sv0.map.qq.com/hlrender/", "sv1.map.qq.com/hlrender/", "sv2.map.qq.com/hlrender/", "sv3.map.qq.com/hlrender/"], "png", [256, 256], 1, 19, "", false, false], [null, ["rtt2.map.qq.com/rtt/", "rtt2a.map.qq.com/rtt/", "rtt2b.map.qq.com/rtt/", "rtt2c.map.qq.com/rtt/"], "png", [256, 256], 1, 19, "", false, false], null, [["rt0.map.gtimg.com/vector/", "rt1.map.gtimg.com/vector/", "rt2.map.gtimg.com/vector/", "rt3.map.gtimg.com/vector/"], [256, 256], 3, 18, "114", ["rt0.map.gtimg.com/icons/", "rt1.map.gtimg.com/icons/", "rt2.map.gtimg.com/icons/", "rt3.map.gtimg.com/icons/"]], null], ["s.map.qq.com/TPano/v1.1.2/TPano.js", "map.qq.com/", ""]], loadScriptTime);
            };
        }

        // 初始化地图

    }, {
        key: '_initMap',
        value: function _initMap() {
            var _this3 = this;

            var _props = this.props,
                initialOptions = _props.initialOptions,
                orderList = _props.orderList,
                boxInfo = _props.boxInfo;

            var options = Object.assign({}, _config.INITIALOPTIONS, initialOptions);
            var center = new qq.maps.LatLng(boxInfo.lat, boxInfo.lng);

            options.center = center;
            this.map = new qq.maps.Map(this.mapContainer, options);
            qq.maps.event.addListener(this.map, 'click', function (e) {
                _this3.infoWindow && _this3.infoWindow.close();
            });
            this._addXianMarker(boxInfo);
            orderList && this._addOrderMarker(orderList, boxInfo);
        }

        // 创建鲜库标记

    }, {
        key: '_addXianMarker',
        value: function _addXianMarker(boxInfo) {
            var position = new qq.maps.LatLng(boxInfo.lat, boxInfo.lng);
            var xianOverlay = function xianOverlay(opts) {
                qq.maps.Overlay.call(this, opts);
            };
            xianOverlay.prototype = new qq.maps.Overlay();
            xianOverlay.prototype.construct = function () {
                this.dom = document.createElement('div');
                this.dom.style.cssText = "background:#f00;font-size:8px;color:#fff;position:absolute;display:flex;" + "justify-content:center;align-items:center;width:28px;height:28px;border-radius:14px;";
                this.dom.innerHTML = this.get('initHtml');
                this.getPanes().overlayLayer.appendChild(this.dom);
            };
            xianOverlay.prototype.draw = function () {
                //获取地理经纬度坐标
                var position = this.get('position');
                if (position) {
                    var pixel = this.getProjection().fromLatLngToDivPixel(position);
                    this.dom.style.left = pixel.getX() - 14 + 'px';
                    this.dom.style.top = pixel.getY() - 14 + 'px';
                }
            };
            xianOverlay.prototype.destroy = function () {
                this.dom.parentNode.removeChild(this.dom); //移除dom
            };
            // console.log(qq.maps.Overlay.prototype)
            // console.log(qq.maps.Marker.prototype)
            // console.log(qq.maps.MarkerDecoration.prototype)
            // console.log(qq.maps.event.addListener.prototype)
            new xianOverlay({
                map: this.map,
                position: position,
                initHtml: '鲜库'
            });
        }

        // 创建订单标记

    }, {
        key: '_addOrderMarker',
        value: function _addOrderMarker(orderList, boxInfo) {
            var _this4 = this;

            this.infoWindow = new qq.maps.InfoWindow({
                map: this.map
            });
            orderList.forEach(function (item, i) {
                var addressInfo = item.addressInfo,
                    sendDay = item.sendDay,
                    sendTime = item.sendTime,
                    orderNumber = item.orderNumber,
                    createdAt = item.createdAt;

                if (!addressInfo) return;
                var position = new qq.maps.LatLng(addressInfo.coordinate.lat, addressInfo.coordinate.lng);
                var decoration = new qq.maps.MarkerDecoration('<span style="color: #fff; cursor: pointer;">' + (i + 1) + '</span>');
                var distance = (0, _util.getFlatternDistance)(addressInfo.coordinate.lat, addressInfo.coordinate.lng, boxInfo.lat, boxInfo.lng);
                var marker = new qq.maps.Marker({
                    position: position,
                    map: _this4.map,
                    decoration: decoration,
                    draggable: true,
                    animation: qq.maps.MarkerAnimation.DROP
                });

                qq.maps.event.addListener(marker, 'mouseover', function () {
                    _this4.infoWindow.open();
                    _this4.infoWindow.setContent('<div style="text-align:center;maigin:10px;width:300px;">\n                        <table width="100%" border="0" cellspacing="1" cellpadding="10">\n                            <tr>\n                                <th>' + orderNumber + '</th>\n                                <th>' + (0, _util.formatTime)(createdAt) + '</th>\n                            </tr>\n                        </table>\n                        <table width="100%" border="1" cellspacing="0" cellpadding="4">\n                            <tr>\n                                <td width="30%">\u8BA2\u5355\u7C7B\u578B</td>\n                                <td>' + (sendDay === 'tomorrow' ? '明日达' : sendDay === 'presale' ? '预售' : '快速达') + '</td>\n                            </tr>\n                            <tr>\n                                <td width="30%">\u8054\u7CFB\u4EBA\u4FE1\u606F</td>\n                                <td>' + addressInfo.receiver + '&#x3000;' + addressInfo.phoneNumber + '</td>\n                            </tr>\n                            <tr>\n                                <td width="30%">\u8BA2\u5355\u5730\u5740<br/>\u8DDD\u79BB\uFF1A' + (distance / 1000).toFixed(2) + 'km</td>\n                                <td>' + (addressInfo.detail + addressInfo.unitNumber) + '</td>\n                            </tr>\n                            <tr>\n                                <td width="30%">\u914D\u9001\u65F6\u95F4</td>\n                                <td>' + (!sendTime ? '即时配送' : sendDay == 'presale' ? '\u9884\u552E' + sendTime + '\u9001\u8FBE' : sendTime) + '</td>\n                            </tr>\n                        </table>\n                    </div>');
                    _this4.infoWindow.setPosition(position);
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props2 = this.props,
                className = _props2.className,
                style = _props2.style;

            return _react2.default.createElement('div', {
                ref: function ref(div) {
                    return _this5.mapContainer = div;
                },
                style: { width: '100%', height: '100%', minHeight: 700 }
                // {...{ className }}
            });
        }
    }]);

    return OrderMap;
}(_react.Component);

OrderMap.prototypes = {
    initialOptions: _propTypes2.default.object,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    apiKey: _propTypes2.default.string.isRequired,
    orderList: _propTypes2.default.array,
    boxInfo: _propTypes2.default.object.isRequired
};

exports.default = OrderMap;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 根据经纬度求距离
 */
var getFlatternDistance = function getFlatternDistance(lat1, lng1, lat2, lng2) {

    var EARTH_RADIUS = 6378137.0;
    var getRad = function getRad(d) {
        return d * Math.PI / 180.0;
    };

    lat1 = Number(lat1);
    lng1 = Number(lng1);
    lat2 = Number(lat2);
    lng2 = Number(lng2);

    var f = getRad((lat1 + lat2) / 2);
    var g = getRad((lat1 - lat2) / 2);
    var l = getRad((lng1 - lng2) / 2);
    var fl = 1 / 298.257;

    var sg = Math.sin(g);
    var sl = Math.sin(l);
    var sf = Math.sin(f);
    var s = void 0,
        c = void 0,
        w = void 0,
        r = void 0,
        d = void 0,
        h1 = void 0,
        h2 = void 0;

    sg = sg * sg;
    sl = sl * sl;
    sf = sf * sf;

    s = sg * (1 - sl) + (1 - sf) * sl;
    c = (1 - sg) * (1 - sl) + sf * sl;
    w = Math.atan(Math.sqrt(s / c));
    r = Math.sqrt(s * c) / w;
    d = 2 * w * EARTH_RADIUS;

    h1 = (3 * r - 1) / 2 / c;
    h2 = (3 * r + 1) / 2 / s;
    return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
};

var xnFullLength = function xnFullLength() {
    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var _tempLength = void 0;
    if (!isNaN(number)) {
        _tempLength = number.toString().length;
    } else {
        _tempLength = number.length;
    }
    var _tempArray = [];
    length = length || _tempLength;
    var arrayLength = length - _tempLength;

    if (arrayLength > 0) {
        _tempArray.length = arrayLength;
    }

    return _tempArray.fill(0).join('') + number;
};

var formatTime = function formatTime(time) {
    time = new Date(time) || new Date();
    var _timeStr = void 0;
    try {
        _timeStr = time.getFullYear() + '-' + xnFullLength(time.getMonth() + 1, 2) + '-' + xnFullLength(time.getDate(), 2) + '  ' + xnFullLength(time.getHours(), 2) + ':' + xnFullLength(time.getMinutes(), 2) + ':' + xnFullLength(time.getSeconds(), 2);
    } catch (e) {
        console.log('xianTime Error', e);
        return time;
    }
    return _timeStr;
};

exports.getFlatternDistance = getFlatternDistance;
exports.formatTime = formatTime;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var INITIALOPTIONS = exports.INITIALOPTIONS = {
    zoom: 14,
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false
};

/***/ })
/******/ ]);