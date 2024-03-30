function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l = n("392711"),
        c = n.n(l),
        f = n("153832"),
        d = n("898511"),
        _ = n("242880"),
        E = n("629815"),
        p = n("555171"),
        m = n("725349"),
        y = n("411686"),
        I = n("281767");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function v(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                T(e, t, n[t])
            })
        }
        return e
    }

    function g(e, t) {
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

    function A(e, t) {
        return (A = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function b(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || R(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function N(e) {
        return function(e) {
            if (Array.isArray(e)) return h(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || R(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function R(e, t) {
        if (e) {
            if ("string" == typeof e) return h(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
        }
    }(r = o || (o = {})).REQUIRED = "REQUIRED", r.OPTIONAL = "OPTIONAL", r.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT";
    var C = "migrated",
        P = (T(u = {}, I.OverlayWidgets.GUILDS, {
            minSize: {
                width: 312,
                height: 300
            },
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: "OPTIONAL",
            defaultSettings: {
                anchor: {
                    left: .175,
                    top: .15,
                    bottom: null,
                    right: null
                },
                size: {
                    width: "auto",
                    height: .65
                },
                pinned: !1
            }
        }), T(u, I.OverlayWidgets.TEXT, {
            minSize: {
                width: 430,
                height: 300
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: "OPTIONAL",
            defaultSettings: {
                anchor: {
                    left: .26,
                    top: .15,
                    bottom: null,
                    right: null
                },
                size: {
                    width: .565,
                    height: .65
                },
                pinned: !0
            }
        }), T(u, I.OverlayWidgets.VOICE, {
            minSize: {
                width: 272,
                height: 100
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: "REQUIRED",
            defaultSettings: {
                anchor: {
                    left: .011,
                    top: .011,
                    bottom: null,
                    right: null
                },
                size: {
                    width: "auto",
                    height: "auto"
                },
                pinned: !0
            }
        }), T(u, I.OverlayWidgets.GUILDS_TEXT, {
            minSize: {
                height: 300,
                width: 610
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: "OPTIONAL_DEFAULT",
            defaultSettings: {
                anchor: {
                    left: .15,
                    top: .15,
                    bottom: null,
                    right: null
                },
                size: {
                    width: .7,
                    height: .65
                },
                pinned: !1
            }
        }), T(u, I.OverlayWidgets.LOBBY_VOICE, {
            minSize: {
                width: 272,
                height: 100
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: "REQUIRED",
            defaultSettings: {
                anchor: {
                    left: null,
                    top: .011,
                    bottom: null,
                    right: .011
                },
                size: {
                    width: "auto",
                    height: "auto"
                },
                pinned: !0
            }
        }), u);

    function D(e, t) {
        var n = a[e];
        if (null == n) return !1;
        var r = i[n.layoutId];
        return null != r && t(n, r)
    }

    function L(e) {
        var t;
        return null === (t = P[e]) || void 0 === t ? void 0 : t.defaultSettings
    }
    var M = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && A(e, t)
        }(l, e);
        var t, n, r, o, u, s = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = S(t);
            if (n) {
                var a = S(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), s.apply(this, arguments)
        }
        return r = l, o = [{
            key: "initialize",
            value: function(e) {
                var t, n, r, o, u = this;
                if (null != e && null != e.layouts && null != e.widgets) {
                    ;
                    t = e.layouts, n = {}, c().forEach(t, function(e, t) {
                        n[t] = new p.default(e)
                    }), i = n, r = e.widgets, o = {}, c().forEach(r, function(e, t) {
                        o[t] = new m.default(e)
                    }), a = o
                } else i = {}, a = {};
                var s = !1,
                    l = [];
                c().forEach(P, function(e, t) {
                    "REQUIRED" === e.layoutPolicy && l.push(t)
                }), c().forEach(i, function(e, t) {
                    var n = u.getWidgetsForLayout(t),
                        r = !1,
                        o = !0,
                        c = !1,
                        d = void 0;
                    try {
                        for (var _, E = l[Symbol.iterator](); !(o = (_ = E.next()).done); o = !0) ! function() {
                            var e = _.value,
                                o = n.find(function(t) {
                                    return t.type === e
                                });
                            if (null != o) return;
                            r = s = !0;
                            var i = (0, f.v4)();
                            o = new m.default(g(v({}, u.getWidgetDefaultSettings(e)), {
                                type: e,
                                id: i,
                                layoutId: t,
                                zIndex: n.length
                            })), n.push(o), a = g(v({}, a), T({}, i, o))
                        }()
                    } catch (e) {
                        c = !0, d = e
                    } finally {
                        try {
                            !o && null != E.return && E.return()
                        } finally {
                            if (c) throw d
                        }
                    }
                    r && (e = e.set("widgets", n.map(function(e) {
                        return e.id
                    })), i = g(v({}, i), T({}, t, e)))
                }), c().forEach(a, function(e, t) {
                    var n = i[e.layoutId];
                    (null == n || 0 > n.widgets.indexOf(t)) && (a = v({}, a), delete a[t], s = !0)
                }), s && (this.persist(), this.emitChange())
            }
        }, {
            key: "getState",
            value: function() {
                return {
                    layouts: i,
                    widgets: a
                }
            }
        }, {
            key: "getLayouts",
            value: function() {
                return i
            }
        }, {
            key: "getLayout",
            value: function(e) {
                return i[e]
            }
        }, {
            key: "getAllWidgets",
            value: function() {
                return a
            }
        }, {
            key: "getWidget",
            value: function(e) {
                return a[e]
            }
        }, {
            key: "getWidgetsForLayout",
            value: function(e) {
                var t = this,
                    n = this.getLayout(e);
                return null == n ? [] : n.widgets.reduce(function(e, n) {
                    var r = t.getWidget(n);
                    return null != r && e.push(r), e
                }, [])
            }
        }, {
            key: "getWidgetConfig",
            value: function(e) {
                return P[e]
            }
        }, {
            key: "getWidgetDefaultSettings",
            value: function(e) {
                return L(e)
            }
        }, {
            key: "getWidgetType",
            value: function(e) {
                var t = a[e];
                return null != t ? t.type : ""
            }
        }, {
            key: "getRegisteredWidgets",
            value: function() {
                return P
            }
        }, {
            key: "getDefaultLayout",
            value: function(e) {
                var t = [];
                return c().forEach(this.getRegisteredWidgets(), function(n, r) {
                    switch (n.layoutPolicy) {
                        case "REQUIRED":
                        case "OPTIONAL_DEFAULT":
                            t.push(g(v({}, n.defaultSettings), {
                                type: r,
                                id: (0, f.v4)(),
                                layoutId: e
                            }))
                    }
                }), t
            }
        }], O(r.prototype, o), u && O(r, u), l
    }(d.default.PersistedStore);
    T(M, "displayName", "LayoutStore"), T(M, "persistKey", "LayoutStore"), T(M, "migrations", [function() {
        var e = v({}, _.Storage.get("OverlayStore")),
            t = e.pinnedWidgets,
            n = e.positions,
            r = e.sizes;
        if (5 === e.v && t) {
            var o = [],
                i = t.map(function(e) {
                    var t = null != n ? n[e] : null,
                        i = null != r ? r[e] : null,
                        a = {
                            id: e,
                            layoutId: C,
                            type: e,
                            anchor: t || {
                                top: -1,
                                left: -1,
                                bottom: null,
                                right: null
                            },
                            size: i || {
                                width: -1,
                                height: -1
                            },
                            pinned: !0,
                            zIndex: 0
                        };
                    return o.push([a.id, a]), a.id
                });
            return {
                layouts: [
                    [C, {
                        id: C,
                        widgets: i
                    }]
                ],
                widgets: o
            }
        }
        return {
            layouts: [],
            widgets: []
        }
    }, function(e) {
        var t = e.layouts,
            n = e.widgets,
            r = new Set(Object.keys(I.OverlayWidgets)),
            o = Array.from(n).filter(function(e) {
                var t = b(e, 1)[0];
                return !r.has(t)
            }),
            i = Array.from(t).filter(function(e) {
                return b(e, 1)[0] !== C
            });
        return i.forEach(function(e) {
            var t = b(e, 2),
                n = t[0],
                r = t[1],
                i = null,
                a = null;
            if (r.widgets.find(function(e) {
                    var t = o.find(function(t) {
                        var r = b(t, 2),
                            o = r[0],
                            i = r[1];
                        return o === e && i.layoutId === n
                    });
                    return null != t && (null == a && t[1].type === I.OverlayWidgets.VOICE && (a = t[0]), null == i && t[1].type === I.OverlayWidgets.TEXT && (i = t[1].pinned), null != i && null != a || void 0)
                }), !i && null != a) {
                var u = (0, f.v4)();
                r.widgets = [a, u], o.push([u, g(v({}, L(I.OverlayWidgets.GUILDS_TEXT)), {
                    type: I.OverlayWidgets.GUILDS_TEXT,
                    id: u,
                    layoutId: n,
                    zIndex: 2
                })])
            }
        }), {
            widgets: o,
            layouts: i
        }
    }, function(e) {
        var t = e.layouts,
            n = e.widgets;
        return {
            layouts: t.reduce(function(e, t) {
                var n = b(t, 2),
                    r = n[0],
                    o = n[1];
                return e[r] = o, e
            }, {}),
            widgets: n.reduce(function(e, t) {
                var n = b(t, 2),
                    r = n[0],
                    o = n[1];
                return e[r] = o, e
            }, {})
        }
    }]), t.default = new M(E.default, {
        LAYOUT_CREATE: function(e) {
            var t = e.layoutId,
                n = e.widgets,
                r = e.defaultResolution;
            if (null != i[t]) return !1;
            var o = [];
            n.forEach(function(e, t) {
                var n = function(e) {
                        var t = i[C];
                        if (null != t) {
                            var n = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var u, s = t.widgets[Symbol.iterator](); !(n = (u = s.next()).done); n = !0) {
                                    var l = a[u.value];
                                    if (null != l && l.type === e) return l
                                }
                            } catch (e) {
                                r = !0, o = e
                            } finally {
                                try {
                                    !n && null != s.return && s.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                        }
                        return null
                    }(e.type),
                    u = g(v({}, e), {
                        zIndex: t
                    });
                "" === u.id && (u.id = (0, f.v4)()), null != n && (u.pinned = n.pinned, -1 !== n.anchor.left && (u.anchor = (0, y.getAnchorPercentageFromLayoutSize)(n.anchor, r)), -1 !== n.size.width && (u.size = (0, y.getSizePercentageFromSize)(n.size, r))), a = g(v({}, a), T({}, u.id, new m.default(u))), o.push(u.id)
            }), i = g(v({}, i), T({}, t, new p.default({
                id: t,
                widgets: o
            })))
        },
        LAYOUT_SET_PINNED: function(e) {
            return D(e.widgetId, function(e, t) {
                (function(e) {
                    a = g(v({}, a), T({}, e.id, e.set("pinned", !e.pinned)))
                })(e)
            })
        },
        LAYOUT_UPDATE_WIDGET: function(e) {
            var t = e.widgetId,
                n = e.anchor,
                r = e.size;
            return D(t, function(e, t) {
                return function(e, t, n) {
                    a = g(v({}, a), T({}, e.id, e.merge({
                        anchor: t,
                        size: n
                    })))
                }(e, n, r)
            })
        },
        LAYOUT_SET_TOP_WIDGET: function(e) {
            return D(e.widgetId, function(e, t) {
                return function(e, t) {
                    var n = function(e) {
                        var t = [];
                        return e.widgets.forEach(function(e) {
                            var n = a[e];
                            null != n && t.push(n)
                        }), t
                    }(e);
                    n.sort(function(e, t) {
                        return e.zIndex - t.zIndex
                    });
                    var r = n.findIndex(function(e) {
                        return e.id === t
                    });
                    if (r === n.length - 1) return !1;
                    n.push(n.splice(r, 1)[0]);
                    for (var o = 0; o < n.length; o++)(function(e, t) {
                        a = g(v({}, a), T({}, e.id, e.set("zIndex", t)))
                    })(n[o], o);
                    return !0
                }(t, e.id)
            })
        },
        LAYOUT_DELETE_WIDGET: function(e) {
            var t = e.widgetId;
            a = v({}, a), delete a[t], c().forEach(i, function(e, n) {
                if (n !== C) {
                    var r = e.widgets.indexOf(t);
                    if (r >= 0) {
                        var o = N(e.widgets);
                        o.splice(r, 1), i = g(v({}, i), T({}, n, e.set("widgets", o)))
                    }
                }
            })
        },
        LAYOUT_DELETE_ALL_WIDGETS: function(e) {
            var t = i[e.layoutId];
            if (null == t) return !1;
            t.widgets.forEach(function(e) {
                a = v({}, a), delete a[e]
            }), i = g(v({}, i), T({}, t.id, t.set("widgets", [])))
        },
        LAYOUT_CREATE_WIDGETS: function(e) {
            e.widgetConfigs.forEach(function(e) {
                var t = new m.default(e),
                    n = i[t.layoutId];
                if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
                t = t.set("zIndex", n.widgets.length), a = g(v({}, a), T({}, t.id, t));
                var r = N(n.widgets).concat([t.id]);
                i = g(v({}, i), T({}, n.id, n.set("widgets", r)))
            })
        }
    })
}