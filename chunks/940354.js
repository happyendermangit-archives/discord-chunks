function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("384433"),
        a = n("629815"),
        u = n("851285"),
        s = n("335911"),
        l = n("894288"),
        c = n("208454"),
        f = n("422003");

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                _(e, t, n[t])
            })
        }
        return e
    }

    function m(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var I = !1,
        h = null,
        O = !1,
        T = {};

    function S(e) {
        var t, n = c.default.getCurrentUser();
        if (null == n) return !1;
        var r = null != e ? e : (0, f.getVideoBackgroundOptionFromProto)(null === (t = u.default.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
        return null != l.default.getVoiceChannelId() && s.default.isVideoEnabled() && null != r
    }

    function v() {
        h !== l.default.getVoiceChannelId() && (O = !1), S() && (O = !0), h = l.default.getVoiceChannelId()
    }
    var g = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }(c, e);
        var t, n, r, o, i, a = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function c() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), a.apply(this, arguments)
        }
        return r = c, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(u.default, l.default, s.default), this.syncWith([l.default, s.default], v)
            }
        }, {
            key: "videoFilterAssets",
            get: function() {
                return T
            }
        }, {
            key: "hasBeenApplied",
            get: function() {
                return I
            }
        }, {
            key: "hasUsedBackgroundInCall",
            get: function() {
                return O
            }
        }], d(r.prototype, o), i && d(r, i), c
    }(o.default.Store);
    _(g, "displayName", "VideoBackgroundStore"), t.default = new g(a.default, {
        VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function(e) {
            T = e.assets.reduce(function(e, t) {
                return m(p({}, e), _({}, t.id, t))
            }, {})
        },
        VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function(e) {
            var t = e.videoFilterAsset;
            T = m(p({}, T), _({}, t.id, t))
        },
        VIDEO_FILTER_ASSET_DELETE_SUCCESS: function(e) {
            var t = e.videoFilterAsset;
            T = p({}, T), delete T[t.id]
        },
        VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function(e) {
            S(e.backgroundOption) && (O = !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            var t = e.settings;
            i.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in t && (I = !0)
        }
    })
}