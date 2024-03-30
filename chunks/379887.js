function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NativePermissionBaseUtils: function() {
            return d
        }
    });
    var r = n("870331"),
        o = n("466452"),
        i = n("354706"),
        a = n("203151"),
        u = n("281767"),
        s = n("941504");

    function l(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var d = function() {
        var e, t, n;

        function d() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, d), f(this, "storage", new i.default)
        }
        return e = d, t = [{
            key: "requestAuthorization",
            value: function(e, t, n) {
                var i, s = this;
                return (i = function() {
                    var i, l;
                    return function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    }(this, function(c) {
                        switch (c.label) {
                            case 0:
                                if ("function" != typeof t) throw Error("requestAuthorization: Was provided with not a function for ".concat(e, "."));
                                return r.default.track(u.AnalyticEvents.PERMISSIONS_REQUESTED, {
                                    type: e
                                }), [4, t()];
                            case 1:
                                return l = (i = c.sent() === a.NativePermissionStatus.AUTHORIZED) ? a.NativePermissionStates.ACCEPTED : a.NativePermissionStates.DENIED, o.default.setPermission(e, l), !i && n.showAuthorizationError && s.showAlert(e), [2, i]
                        }
                    })
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(n, r) {
                        var o = i.apply(e, t);

                        function a(e) {
                            l(o, n, r, a, u, "next", e)
                        }

                        function u(e) {
                            l(o, n, r, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                })()
            }
        }, {
            key: "requestPermission",
            value: function(e, t) {
                var n = d.defaultNativePermissionsRequestOptions(t);
                return this.requestPermissionCore(e, n)
            }
        }, {
            key: "hasPermission",
            value: function(e, t) {
                var n = d.defaultNativePermissionsRequestOptions(t);
                return this.hasPermissionCore(e, n)
            }
        }, {
            key: "showAlert",
            value: function(e) {
                var t, n = this,
                    r = (f(t = {}, a.NativePermissionTypes.CAMERA, "".concat(s.default.Messages.NO_CAMERA_ACCESS, ". ").concat(s.default.Messages.ENABLE_PRIVACY_ACCESS)), f(t, a.NativePermissionTypes.AUDIO, "".concat(s.default.Messages.NO_MICRPHONE_ACCESS, ". ").concat(s.default.Messages.ENABLE_PRIVACY_ACCESS)), f(t, a.NativePermissionTypes.PHOTOS, "".concat(s.default.Messages.NO_PHOTOS_ACCESS, ". ").concat(s.default.Messages.ENABLE_PRIVACY_ACCESS)), f(t, a.NativePermissionTypes.INPUT_MONITORING, "".concat(s.default.Messages.NO_INPUT_MONITORING_ACCESS, ". ").concat(s.default.Messages.ENABLE_PRIVACY_ACCESS)), f(t, a.NativePermissionTypes.CONTACTS, "".concat(s.default.Messages.NO_CONTACTS_ACCESS, ". ").concat(s.default.Messages.ENABLE_PRIVACY_ACCESS)), t)[e];
                null != r && this.openAlertModal({
                    title: s.default.Messages.SYSTEM_PERMISSION_GRANT,
                    body: r,
                    onConfirm: function() {
                        return n.openSettings(e)
                    },
                    cancelText: s.default.Messages.CANCEL,
                    confirmText: s.default.Messages.DEVICE_SETTINGS
                })
            }
        }], n = [{
            key: "defaultNativePermissionsRequestOptions",
            value: function(e) {
                var t = {
                    showAuthorizationError: !0
                };
                return null == e ? t : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            f(e, t, n[t])
                        })
                    }
                    return e
                }({}, t, e)
            }
        }], t && c(e.prototype, t), n && c(e, n), d
    }()
}