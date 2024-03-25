function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("424973"), n("222007"), n("70102"), n("808653");
    var r, a, o = n("917351"),
        l = n.n(o),
        u = n("748820"),
        d = n("446674"),
        c = n("95410"),
        _ = n("913144"),
        f = n("684849"),
        E = n("611310"),
        h = n("80687"),
        g = n("49111");
    (a = r || (r = {})).REQUIRED = "REQUIRED", a.OPTIONAL = "OPTIONAL", a.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT";
    let m = "migrated",
        p = {
            [g.OverlayWidgets.GUILDS]: {
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
            },
            [g.OverlayWidgets.TEXT]: {
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
            },
            [g.OverlayWidgets.VOICE]: {
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
            },
            [g.OverlayWidgets.GUILDS_TEXT]: {
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
            },
            [g.OverlayWidgets.LOBBY_VOICE]: {
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
            }
        };

    function S(e, t) {
        let n = s[e];
        if (null == n) return !1;
        let r = i[n.layoutId];
        return null != r && t(n, r)
    }

    function T(e) {
        var t;
        return null === (t = p[e]) || void 0 === t ? void 0 : t.defaultSettings
    }
    class v extends d.default.PersistedStore {
        initialize(e) {
            null != e && null != e.layouts && null != e.widgets ? (i = function(e) {
                let t = {};
                return l.forEach(e, (e, n) => {
                    t[n] = new f.default(e)
                }), t
            }(e.layouts), s = function(e) {
                let t = {};
                return l.forEach(e, (e, n) => {
                    t[n] = new E.default(e)
                }), t
            }(e.widgets)) : (i = {}, s = {});
            let t = !1,
                n = [];
            l.forEach(p, (e, t) => {
                "REQUIRED" === e.layoutPolicy && n.push(t)
            }), l.forEach(i, (e, r) => {
                let a = this.getWidgetsForLayout(r),
                    o = !1;
                for (let e of n) {
                    let n = a.find(t => t.type === e);
                    if (null != n) continue;
                    o = t = !0;
                    let i = (0, u.v4)();
                    n = new E.default({
                        ...this.getWidgetDefaultSettings(e),
                        type: e,
                        id: i,
                        layoutId: r,
                        zIndex: a.length
                    }), a.push(n), s = {
                        ...s,
                        [i]: n
                    }
                }
                o && (e = e.set("widgets", a.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                })), i = {
                    ...i,
                    [r]: e
                })
            }), l.forEach(s, (e, n) => {
                let r = i[e.layoutId];
                (null == r || 0 > r.widgets.indexOf(n)) && (s = {
                    ...s
                }, delete s[n], t = !0)
            }), t && (this.persist(), this.emitChange())
        }
        getState() {
            return {
                layouts: i,
                widgets: s
            }
        }
        getLayouts() {
            return i
        }
        getLayout(e) {
            return i[e]
        }
        getAllWidgets() {
            return s
        }
        getWidget(e) {
            return s[e]
        }
        getWidgetsForLayout(e) {
            let t = this.getLayout(e);
            return null == t ? [] : t.widgets.reduce((e, t) => {
                let n = this.getWidget(t);
                return null != n && e.push(n), e
            }, [])
        }
        getWidgetConfig(e) {
            return p[e]
        }
        getWidgetDefaultSettings(e) {
            return T(e)
        }
        getWidgetType(e) {
            let t = s[e];
            return null != t ? t.type : ""
        }
        getRegisteredWidgets() {
            return p
        }
        getDefaultLayout(e) {
            let t = [];
            return l.forEach(this.getRegisteredWidgets(), (n, i) => {
                switch (n.layoutPolicy) {
                    case "REQUIRED":
                    case "OPTIONAL_DEFAULT":
                        t.push({
                            ...n.defaultSettings,
                            type: i,
                            id: (0, u.v4)(),
                            layoutId: e
                        })
                }
            }), t
        }
    }
    v.displayName = "LayoutStore", v.persistKey = "LayoutStore", v.migrations = [() => {
        let e = {
                ...c.Storage.get("OverlayStore")
            },
            {
                pinnedWidgets: t,
                positions: n,
                sizes: i,
                v: s
            } = e;
        if (5 === s && t) {
            let e = [],
                s = t.map(t => {
                    let s = null != n ? n[t] : null,
                        r = null != i ? i[t] : null,
                        a = {
                            id: t,
                            layoutId: m,
                            type: t,
                            anchor: s || {
                                top: -1,
                                left: -1,
                                bottom: null,
                                right: null
                            },
                            size: r || {
                                width: -1,
                                height: -1
                            },
                            pinned: !0,
                            zIndex: 0
                        };
                    return e.push([a.id, a]), a.id
                });
            return {
                layouts: [
                    [m, {
                        id: m,
                        widgets: s
                    }]
                ],
                widgets: e
            }
        }
        return {
            layouts: [],
            widgets: []
        }
    }, e => {
        let {
            layouts: t,
            widgets: n
        } = e, i = new Set(Object.keys(g.OverlayWidgets)), s = Array.from(n).filter(e => {
            let [t] = e;
            return !i.has(t)
        }), r = Array.from(t).filter(e => {
            let [t] = e;
            return t !== m
        });
        return r.forEach(e => {
            let [t, n] = e, i = null, r = null;
            if (n.widgets.find(e => {
                    let n = s.find(n => {
                        let [i, s] = n;
                        return i === e && s.layoutId === t
                    });
                    return null != n && (null == r && n[1].type === g.OverlayWidgets.VOICE && (r = n[0]), null == i && n[1].type === g.OverlayWidgets.TEXT && (i = n[1].pinned), null != i && null != r || void 0)
                }), i || null == r) return;
            let a = (0, u.v4)();
            n.widgets = [r, a], s.push([a, {
                ...T(g.OverlayWidgets.GUILDS_TEXT),
                type: g.OverlayWidgets.GUILDS_TEXT,
                id: a,
                layoutId: t,
                zIndex: 2
            }])
        }), {
            widgets: s,
            layouts: r
        }
    }, e => {
        let {
            layouts: t,
            widgets: n
        } = e, i = t.reduce((e, t) => {
            let [n, i] = t;
            return e[n] = i, e
        }, {}), s = n.reduce((e, t) => {
            let [n, i] = t;
            return e[n] = i, e
        }, {});
        return {
            layouts: i,
            widgets: s
        }
    }];
    var I = new v(_.default, {
        LAYOUT_CREATE: function(e) {
            let {
                layoutId: t,
                widgets: n,
                defaultResolution: r
            } = e;
            if (null != i[t]) return !1;
            let a = [];
            n.forEach((e, t) => {
                let n = function(e) {
                        let t = i[m];
                        if (null != t)
                            for (let n of t.widgets) {
                                let t = s[n];
                                if (null != t && t.type === e) return t
                            }
                        return null
                    }(e.type),
                    o = {
                        ...e,
                        zIndex: t
                    };
                "" === o.id && (o.id = (0, u.v4)()), null != n && (o.pinned = n.pinned, -1 !== n.anchor.left && (o.anchor = (0, h.getAnchorPercentageFromLayoutSize)(n.anchor, r)), -1 !== n.size.width && (o.size = (0, h.getSizePercentageFromSize)(n.size, r))), s = {
                    ...s,
                    [o.id]: new E.default(o)
                }, a.push(o.id)
            }), i = {
                ...i,
                [t]: new f.default({
                    id: t,
                    widgets: a
                })
            }
        },
        LAYOUT_SET_PINNED: function(e) {
            let {
                widgetId: t
            } = e;
            return S(t, (e, t) => {
                (function(e) {
                    s = {
                        ...s,
                        [e.id]: e.set("pinned", !e.pinned)
                    }
                })(e)
            })
        },
        LAYOUT_UPDATE_WIDGET: function(e) {
            let {
                widgetId: t,
                anchor: n,
                size: i
            } = e;
            return S(t, (e, t) => (function(e, t, n) {
                s = {
                    ...s,
                    [e.id]: e.merge({
                        anchor: t,
                        size: n
                    })
                }
            })(e, n, i))
        },
        LAYOUT_SET_TOP_WIDGET: function(e) {
            let {
                widgetId: t
            } = e;
            return S(t, (e, t) => (function(e, t) {
                let n = function(e) {
                    let t = [];
                    return e.widgets.forEach(e => {
                        let n = s[e];
                        null != n && t.push(n)
                    }), t
                }(e);
                n.sort((e, t) => e.zIndex - t.zIndex);
                let i = n.findIndex(e => e.id === t);
                if (i === n.length - 1) return !1;
                n.push(n.splice(i, 1)[0]);
                for (let e = 0; e < n.length; e++) {
                    let t = n[e];
                    (function(e, t) {
                        s = {
                            ...s,
                            [e.id]: e.set("zIndex", t)
                        }
                    })(t, e)
                }
                return !0
            })(t, e.id))
        },
        LAYOUT_DELETE_WIDGET: function(e) {
            let {
                widgetId: t
            } = e;
            s = {
                ...s
            }, delete s[t], l.forEach(i, (e, n) => {
                if (n === m) return;
                let s = e.widgets.indexOf(t);
                if (s >= 0) {
                    let t = [...e.widgets];
                    t.splice(s, 1), i = {
                        ...i,
                        [n]: e.set("widgets", t)
                    }
                }
            })
        },
        LAYOUT_DELETE_ALL_WIDGETS: function(e) {
            let {
                layoutId: t
            } = e, n = i[t];
            if (null == n) return !1;
            n.widgets.forEach(e => {
                s = {
                    ...s
                }, delete s[e]
            }), i = {
                ...i,
                [n.id]: n.set("widgets", [])
            }
        },
        LAYOUT_CREATE_WIDGETS: function(e) {
            let {
                widgetConfigs: t
            } = e;
            t.forEach(e => {
                let t = new E.default(e),
                    n = i[t.layoutId];
                if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
                t = t.set("zIndex", n.widgets.length), s = {
                    ...s,
                    [t.id]: t
                };
                let r = [...n.widgets, t.id];
                i = {
                    ...i,
                    [n.id]: n.set("widgets", r)
                }
            })
        }
    })
}