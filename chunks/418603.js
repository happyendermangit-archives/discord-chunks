function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseSpeedTesterEvent: function() {
            return o.BaseSpeedTesterEvent
        },
        default: function() {
            return d
        }
    });
    var r = n("259020"),
        o = n("611556"),
        i = n("439386");

    function a(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var f = 0,
        d = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }(p, e);
            var t, n, r, d, _, E = (t = p, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = l(t);
                if (n) {
                    var u = l(this).constructor;
                    o = Reflect.construct(i, arguments, u)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : a(e)
            });

            function p(e) {
                var t;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, p), s(a(t = E.call(this)), "mediaEngineConnectionId", "WebRTC-".concat(f++)), s(a(t), "ids", void 0), s(a(t), "streamUserId", void 0), s(a(t), "destroyed", !1), s(a(t), "audioSSRC", 0), s(a(t), "videoStreamParameters", []), s(a(t), "connectionState", i.ConnectionStates.CONNECTING), t.ids = e, t
            }
            return r = p, d = [{
                key: "destroy",
                value: function() {
                    this.destroyed = !0, this.setConnectionState(i.ConnectionStates.DISCONNECTED), this.emit(o.BaseSpeedTesterEvent.Destroy, this), this.removeAllListeners()
                }
            }, {
                key: "setConnectionState",
                value: function(e) {
                    this.connectionState = e, this.emit(o.BaseSpeedTesterEvent.ConnectionStateChange, this.connectionState)
                }
            }, {
                key: "initializeStreamParameters",
                value: function(e) {
                    this.videoStreamParameters = e.filter(function(e) {
                        return e.type === i.MediaTypes.TEST
                    }).map(function(e) {
                        var t;
                        return {
                            type: e.type,
                            active: e.active,
                            rid: null !== (t = e.rid) && void 0 !== t ? t : "",
                            ssrc: e.ssrc
                        }
                    })
                }
            }], u(r.prototype, d), _ && u(r, _), p
        }(r.default)
}