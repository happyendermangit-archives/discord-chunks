function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("346649"),
        u = n("784184"),
        s = n("549579"),
        l = n("355544"),
        c = n("803321"),
        f = n("396242"),
        d = n("266140"),
        _ = n("467789"),
        E = n("281767"),
        p = n("863538"),
        m = n("785232");

    function y(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function I(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    y(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    y(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function h(e, t) {
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
    }

    function O(e) {
        return {
            react: function(t, o, y) {
                var O, T = y.noStyleAndInteraction ? void 0 : (O = I(function(n) {
                        var r;
                        return h(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, (0, f.maybeRefreshAttachmentUrl)(t.attachmentUrl)];
                                case 1:
                                    return r = o.sent(), e.shouldStopPropagation && (null == n || n.stopPropagation()), c.default.trackLinkClicked(r), e.shouldCloseDefaultModals && (0, u.closeAllModals)(), (0, l.default)(r), [2]
                            }
                        })
                    }), function(e) {
                        return O.apply(this, arguments)
                    }),
                    S = y.noStyleAndInteraction ? E.NOOP : function(e) {
                        (0, s.openContextMenuLazy)(e, I(function() {
                            var e;
                            return h(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, n.e("43163").then(n.bind(n, "363498"))];
                                    case 1:
                                        return e = o.sent().default, [2, function(n) {
                                            var o, i;
                                            return r.createElement(e, (o = function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))), r.forEach(function(t) {
                                                        var r, o, i;
                                                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        }) : r[o] = i
                                                    })
                                                }
                                                return e
                                            }({}, n), i = (i = {
                                                attachmentUrl: t.attachmentUrl,
                                                attachmentName: t.attachmentName
                                            }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r)
                                                }
                                                return n
                                            })(Object(i)).forEach(function(e) {
                                                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
                                            }), o))
                                        }]
                                }
                            })
                        }))
                    };
                return r.createElement(d.default, {
                    role: "link",
                    key: y.key,
                    href: t.attachmentUrl,
                    onClick: T,
                    onContextMenu: S,
                    className: "attachmentLink"
                }, r.createElement(a.AttachmentIcon, {
                    className: i()(m.icon, p.icon),
                    color: u.tokens.colors.MENTION_FOREGROUND,
                    width: 16,
                    height: 16
                }), (0, _.smartOutput)(t, o, y))
            }
        }
    }
}