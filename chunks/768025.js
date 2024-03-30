function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        init: function() {
            return f
        },
        saveAndClearPermissionUpdates: function() {
            return _
        },
        savePermissionUpdates: function() {
            return d
        },
        selectPermission: function() {
            return l
        },
        setAdvancedMode: function() {
            return c
        },
        updatePermission: function() {
            return u
        }
    });
    var r = n("629815"),
        o = n("944178"),
        i = n("651820");

    function a(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function u(e, t, n, r) {
        return s.apply(this, arguments)
    }

    function s() {
        var e;
        return e = function(e, t, n, i) {
            var a;
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
            }(this, function(u) {
                switch (u.label) {
                    case 0:
                        if (!(null != (a = e.getGuildId()) && t === a)) return [3, 2];
                        return [4, (0, o.checkDefaultChannelThresholdMetAfterChannelPermissionDeny)(e, i, n)];
                    case 1:
                        if (!u.sent()) return [2, !1];
                        u.label = 2;
                    case 2:
                        return r.default.dispatch({
                            type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",
                            id: t,
                            allow: n,
                            deny: i
                        }), [2]
                }
            })
        }, (s = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function u(e) {
                    a(i, r, o, u, s, "next", e)
                }

                function s(e) {
                    a(i, r, o, u, s, "throw", e)
                }
                u(void 0)
            })
        }).apply(this, arguments)
    }

    function l(e) {
        r.default.dispatch({
            type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",
            id: e
        })
    }

    function c(e) {
        r.default.dispatch({
            type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",
            advancedMode: e
        })
    }

    function f() {
        r.default.dispatch({
            type: "CHANNEL_SETTINGS_PERMISSIONS_INIT"
        })
    }

    function d(e, t, n) {
        return _(e, t, [], n)
    }

    function _(e, t, n, o) {
        return r.default.dispatch({
            type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"
        }), new Promise(function(r) {
            var o = function() {
                if (0 === t.length && 0 === n.length) return r();
                if (t.length > 0) {
                    var a = t.pop();
                    if (null == a) return o();
                    i.default.updatePermissionOverwrite(e, a).then(o, o)
                } else {
                    var u = n.pop();
                    if (null == u) return o();
                    i.default.clearPermissionOverwrite(e, u).then(o, o)
                }
            };
            o()
        }).then(function() {
            r.default.dispatch({
                type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",
                silent: o
            })
        })
    }
}