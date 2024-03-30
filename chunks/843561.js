function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("483587"),
        i = n("131900"),
        a = n("379887"),
        u = n("203151");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(p, e);
        var t, n, r, a, _, E = (t = p, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : s(e)
        });

        function p() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, p), e = E.apply(this, arguments), c(s(e), "nativeUtils", i.default.getDiscordUtils()), e
        }
        return r = p, a = [{
            key: "requestPermissionCore",
            value: function(e, t) {
                var n;
                return this.asyncify(null === (n = this.nativeUtils) || void 0 === n ? void 0 : n.nativePermssionRequestAuthorization, e, t)
            }
        }, {
            key: "hasPermissionCore",
            value: function(e, t) {
                var n;
                return this.asyncify(null === (n = this.nativeUtils) || void 0 === n ? void 0 : n.nativePermssionHasAuthorization, e, t)
            }
        }, {
            key: "asyncify",
            value: function(e, t, n) {
                var r = p.requestTypeLookup[t];
                return void 0 === r ? Promise.resolve(!0) : this.requestAuthorization(t, function() {
                    return null == e ? Promise.resolve(u.NativePermissionStatus.AUTHORIZED) : new Promise(function(t, n) {
                        return e(t, r)
                    })
                }, n)
            }
        }, {
            key: "openSettings",
            value: function(e) {
                if ((null === (t = this.nativeUtils) || void 0 === t ? void 0 : t.nativePermissionOpenSettings) != null) {
                    var t, n = p.requestTypeLookup[e];
                    void 0 !== n && this.nativeUtils.nativePermissionOpenSettings(n)
                }
            }
        }, {
            key: "didHavePermission",
            value: function(e) {
                return this.storage.hasPermission(e)
            }
        }, {
            key: "openAlertModal",
            value: function(e) {
                var t = e.title,
                    n = e.body,
                    r = e.onConfirm,
                    i = e.cancelText,
                    a = e.confirmText;
                o.default.show({
                    title: t,
                    body: n,
                    onConfirm: r,
                    cancelText: i,
                    confirmText: a
                })
            }
        }], l(r.prototype, a), _ && l(r, _), p
    }(a.NativePermissionBaseUtils);
    c(_, "requestTypeLookup", (c(r = {}, u.NativePermissionTypes.CAMERA, i.NativePermissionRequestType.Camera), c(r, u.NativePermissionTypes.AUDIO, i.NativePermissionRequestType.Microphone), c(r, u.NativePermissionTypes.PHOTOS, i.NativePermissionRequestType.Photo), c(r, u.NativePermissionTypes.INPUT_MONITORING, i.NativePermissionRequestType.InputMonitoring), c(r, u.NativePermissionTypes.SCREEN_RECORDING, i.NativePermissionRequestType.ScreenRecording), r)), t.default = new _
}