function(e, t, n) {
    "use strict";
    let s, i;
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("424973"), n("222007"), n("70102"), n("808653");
    var r, a, o = n("917351"),
        d = n.n(o),
        u = n("748820"),
        l = n("446674"),
        f = n("95410"),
        _ = n("913144"),
        c = n("684849"),
        g = n("611310"),
        m = n("80687"),
        h = n("49111");
    (a = r || (r = {})).REQUIRED = "REQUIRED", a.OPTIONAL = "OPTIONAL", a.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT";
    let v = "migrated",
        E = {
            [h.OverlayWidgets.GUILDS]: {
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
            [h.OverlayWidgets.TEXT]: {
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
            [h.OverlayWidgets.VOICE]: {
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
            [h.OverlayWidgets.GUILDS_TEXT]: {
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
            [h.OverlayWidgets.LOBBY_VOICE]: {
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

    function p(e, t) {
        let n = i[e];
        if (null == n) return !1;
        let r = s[n.layoutId];
        return null != r && t(n, r)
    }

    function y(e) {
        var t;
        return null === (t = E[e]) || void 0 === t ? void 0 : t.defaultSettings
    }
    class T extends l.default.PersistedStore {
        initialize(e) {
            null != e && null != e.layouts && null != e.widgets ? (s = function(e) {
                let t = {};
                return d.forEach(e, (e, n) => {
                    t[n] = new c.default(e)
                }), t
            }(e.layouts), i = function(e) {
                let t = {};
                return d.forEach(e, (e, n) => {
                    t[n] = new g.default(e)
                }), t
            }(e.widgets)) : (s = {}, i = {});
            let t = !1,
                n = [];
            d.forEach(E, (e, t) => {
                "REQUIRED" === e.layoutPolicy && n.push(t)
            }), d.forEach(s, (e, r) => {
                let a = this.getWidgetsForLayout(r),
                    o = !1;
                for (let e of n) {
                    let n = a.find(t => t.type === e);
                    if (null != n) continue;
                    o = t = !0;
                    let s = (0, u.v4)();
                    n = new g.default({
                        ...this.getWidgetDefaultSettings(e),
                        type: e,
                        id: s,
                        layoutId: r,
                        zIndex: a.length
                    }), a.push(n), i = {
                        ...i,
                        [s]: n
                    }
                }
                o && (e = e.set("widgets", a.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                })), s = {
                    ...s,
                    [r]: e
                })
            }), d.forEach(i, (e, n) => {
                let r = s[e.layoutId];
                (null == r || 0 > r.widgets.indexOf(n)) && (i = {
                    ...i
                }, delete i[n], t = !0)
            }), t && (this.persist(), this.emitChange())
        }
        getState() {
            return {
                layouts: s,
                widgets: i
            }
        }
        getLayouts() {
            return s
        }
        getLayout(e) {
            return s[e]
        }
        getAllWidgets() {
            return i
        }
        getWidget(e) {
            return i[e]
        }
        getWidgetsForLayout(e) {
            let t = this.getLayout(e);
            return null == t ? [] : t.widgets.reduce((e, t) => {
                let n = this.getWidget(t);
                return null != n && e.push(n), e
            }, [])
        }
        getWidgetConfig(e) {
            return E[e]
        }
        getWidgetDefaultSettings(e) {
            return y(e)
        }
        getWidgetType(e) {
            let t = i[e];
            return null != t ? t.type : ""
        }
        getRegisteredWidgets() {
            return E
        }
        getDefaultLayout(e) {
            let t = [];
            return d.forEach(this.getRegisteredWidgets(), (n, s) => {
                switch (n.layoutPolicy) {
                    case "REQUIRED":
                    case "OPTIONAL_DEFAULT":
                        t.push({
                            ...n.defaultSettings,
                            type: s,
                            id: (0, u.v4)(),
                            layoutId: e
                        })
                }
            }), t
        }
    }
    T.displayName = "LayoutStore", T.persistKey = "LayoutStore", T.migrations = [() => {
        let e = {
                ...f.default.get("OverlayStore")
            },
            {
                pinnedWidgets: t,
                positions: n,
                sizes: s,
                v: i
            } = e;
        if (5 === i && t) {
            let e = [],
                i = t.map(t => {
                    let i = null != n ? n[t] : null,
                        r = null != s ? s[t] : null,
                        a = {
                            id: t,
                            layoutId: v,
                            type: t,
                            anchor: i || {
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
                    [v, {
                        id: v,
                        widgets: i
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
        } = e, s = new Set(Object.keys(h.OverlayWidgets)), i = Array.from(n).filter(e => {
            let [t] = e;
            return !s.has(t)
        }), r = Array.from(t).filter(e => {
            let [t] = e;
            return t !== v
        });
        return r.forEach(e => {
            let [t, n] = e, s = null, r = null;
            if (n.widgets.find(e => {
                    let n = i.find(n => {
                        let [s, i] = n;
                        return s === e && i.layoutId === t
                    });
                    return null != n && (null == r && n[1].type === h.OverlayWidgets.VOICE && (r = n[0]), null == s && n[1].type === h.OverlayWidgets.TEXT && (s = n[1].pinned), null != s && null != r || void 0)
                }), s || null == r) return;
            let a = (0, u.v4)();
            n.widgets = [r, a], i.push([a, {
                ...y(h.OverlayWidgets.GUILDS_TEXT),
                type: h.OverlayWidgets.GUILDS_TEXT,
                id: a,
                layoutId: t,
                zIndex: 2
            }])
        }), {
            widgets: i,
            layouts: r
        }
    }, e => {
        let {
            layouts: t,
            widgets: n
        } = e, s = t.reduce((e, t) => {
            let [n, s] = t;
            return e[n] = s, e
        }, {}), i = n.reduce((e, t) => {
            let [n, s] = t;
            return e[n] = s, e
        }, {});
        return {
            layouts: s,
            widgets: i
        }
    }];
    var C = new T(_.default, {
        LAYOUT_CREATE: function(e) {
            let {
                layoutId: t,
                widgets: n,
                defaultResolution: r
            } = e;
            if (null != s[t]) return !1;
            let a = [];
            n.forEach((e, t) => {
                let n = function(e) {
                        let t = s[v];
                        if (null != t)
                            for (let n of t.widgets) {
                                let t = i[n];
                                if (null != t && t.type === e) return t
                            }
                        return null
                    }(e.type),
                    o = {
                        ...e,
                        zIndex: t
                    };
                "" === o.id && (o.id = (0, u.v4)()), null != n && (o.pinned = n.pinned, -1 !== n.anchor.left && (o.anchor = (0, m.getAnchorPercentageFromLayoutSize)(n.anchor, r)), -1 !== n.size.width && (o.size = (0, m.getSizePercentageFromSize)(n.size, r))), i = {
                    ...i,
                    [o.id]: new g.default(o)
                }, a.push(o.id)
            }), s = {
                ...s,
                [t]: new c.default({
                    id: t,
                    widgets: a
                })
            }
        },
        LAYOUT_SET_PINNED: function(e) {
            let {
                widgetId: t
            } = e;
            return p(t, (e, t) => {
                (function(e) {
                    i = {
                        ...i,
                        [e.id]: e.set("pinned", !e.pinned)
                    }
                })(e)
            })
        },
        LAYOUT_UPDATE_WIDGET: function(e) {
            let {
                widgetId: t,
                anchor: n,
                size: s
            } = e;
            return p(t, (e, t) => (function(e, t, n) {
                i = {
                    ...i,
                    [e.id]: e.merge({
                        anchor: t,
                        size: n
                    })
                }
            })(e, n, s))
        },
        LAYOUT_SET_TOP_WIDGET: function(e) {
            let {
                widgetId: t
            } = e;
            return p(t, (e, t) => (function(e, t) {
                let n = function(e) {
                    let t = [];
                    return e.widgets.forEach(e => {
                        let n = i[e];
                        null != n && t.push(n)
                    }), t
                }(e);
                n.sort((e, t) => e.zIndex - t.zIndex);
                let s = n.findIndex(e => e.id === t);
                if (s === n.length - 1) return !1;
                n.push(n.splice(s, 1)[0]);
                for (let e = 0; e < n.length; e++) {
                    let t = n[e];
                    (function(e, t) {
                        i = {
                            ...i,
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
            i = {
                ...i
            }, delete i[t], d.forEach(s, (e, n) => {
                if (n === v) return;
                let i = e.widgets.indexOf(t);
                if (i >= 0) {
                    let t = [...e.widgets];
                    t.splice(i, 1), s = {
                        ...s,
                        [n]: e.set("widgets", t)
                    }
                }
            })
        },
        LAYOUT_DELETE_ALL_WIDGETS: function(e) {
            let {
                layoutId: t
            } = e, n = s[t];
            if (null == n) return !1;
            n.widgets.forEach(e => {
                i = {
                    ...i
                }, delete i[e]
            }), s = {
                ...s,
                [n.id]: n.set("widgets", [])
            }
        },
        LAYOUT_CREATE_WIDGETS: function(e) {
            let {
                widgetConfigs: t
            } = e;
            t.forEach(e => {
                let t = new g.default(e),
                    n = s[t.layoutId];
                if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
                t = t.set("zIndex", n.widgets.length), i = {
                    ...i,
                    [t.id]: t
                };
                let r = [...n.widgets, t.id];
                s = {
                    ...s,
                    [n.id]: n.set("widgets", r)
                }
            })
        }
    })
}