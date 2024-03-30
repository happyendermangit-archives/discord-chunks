function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("242880"),
        f = n("629815"),
        d = n("439386");

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = "CertifiedDeviceStore",
        y = {},
        I = {},
        h = 0;

    function O(e, t, n) {
        var r = I[e];
        return null != r ? n(r) : t
    }

    function T(e, t) {
        var n = y[e];
        null != n && n.forEach(function(e) {
            return delete I[e.id]
        }), y[e] = t, t.forEach(function(e) {
            return I[e.id] = e
        })
    }
    var S = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
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

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                var e = c.Storage.get(m);
                null != e && s().forEach(e, function(e, t) {
                    e.forEach(function(e) {
                        "audioinput" === e.type && e.hardwareMute && (e.hardwareMute = !1)
                    }), T(t, e)
                })
            }
        }, {
            key: "isCertified",
            value: function(e) {
                return null != I[e]
            }
        }, {
            key: "getCertifiedDevice",
            value: function(e) {
                return I[e]
            }
        }, {
            key: "getCertifiedDeviceName",
            value: function(e, t) {
                var n = this.getCertifiedDevice(e);
                return null != n ? "".concat(n.vendor.name, " ").concat(n.model.name) : t
            }
        }, {
            key: "getCertifiedDeviceByType",
            value: function(e) {
                return s().find(I, function(t) {
                    return t.type === e
                })
            }
        }, {
            key: "isHardwareMute",
            value: function(e) {
                return O(e, !1, function(e) {
                    return e.type === d.DeviceTypes.AUDIO_INPUT && e.hardwareMute
                })
            }
        }, {
            key: "hasEchoCancellation",
            value: function(e) {
                return O(e, !1, function(e) {
                    return e.type === d.DeviceTypes.AUDIO_INPUT && e.echoCancellation
                })
            }
        }, {
            key: "hasNoiseSuppression",
            value: function(e) {
                return O(e, !1, function(e) {
                    return e.type === d.DeviceTypes.AUDIO_INPUT && e.noiseSuppression
                })
            }
        }, {
            key: "hasAutomaticGainControl",
            value: function(e) {
                return O(e, !1, function(e) {
                    return e.type === d.DeviceTypes.AUDIO_INPUT && e.automaticGainControl
                })
            }
        }, {
            key: "getVendor",
            value: function(e) {
                return O(e, null, function(e) {
                    return e.vendor
                })
            }
        }, {
            key: "getModel",
            value: function(e) {
                return O(e, null, function(e) {
                    return e.model
                })
            }
        }, {
            key: "getRevision",
            value: function() {
                return h
            }
        }], _(r.prototype, o), i && _(r, i), u
    }(l.default.Store);
    i = "CertifiedDeviceStore", (o = "displayName") in(r = S) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new S(f.default, {
        CERTIFIED_DEVICES_SET: function(e) {
            T(e.applicationId, e.devices), c.Storage.set(m, y), h++
        }
    })
}