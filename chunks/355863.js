function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("653041"), n("47120"), n("411104"), n("724458");
    var s, a, o, l = n("392711"),
        u = n.n(l),
        d = n("153832"),
        _ = n("442837"),
        c = n("433517"),
        E = n("570140"),
        I = n("131792"),
        T = n("252982"),
        f = n("434529"),
        S = n("981631");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(o = s || (s = {})).REQUIRED = "REQUIRED", o.OPTIONAL = "OPTIONAL", o.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT";
    let A = "migrated",
        m = {
            [S.OverlayWidgets.GUILDS]: {
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
            [S.OverlayWidgets.TEXT]: {
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
            [S.OverlayWidgets.VOICE]: {
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
            [S.OverlayWidgets.GUILDS_TEXT]: {
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
            [S.OverlayWidgets.LOBBY_VOICE]: {
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

    function N(e, t) {
        let n = r[e];
        if (null == n) return !1;
        let s = i[n.layoutId];
        return null != s && t(n, s)
    }

    function O(e) {
        var t;
        return null === (t = m[e]) || void 0 === t ? void 0 : t.defaultSettings
    }
    class p extends(a = _.default.PersistedStore) {
        initialize(e) {
            null != e && null != e.layouts && null != e.widgets ? (i = function(e) {
                let t = {};
                return u().forEach(e, (e, n) => {
                    t[n] = new I.default(e)
                }), t
            }(e.layouts), r = function(e) {
                let t = {};
                return u().forEach(e, (e, n) => {
                    t[n] = new T.default(e)
                }), t
            }(e.widgets)) : (i = {}, r = {});
            let t = !1,
                n = [];
            u().forEach(m, (e, t) => {
                "REQUIRED" === e.layoutPolicy && n.push(t)
            }), u().forEach(i, (e, s) => {
                let a = this.getWidgetsForLayout(s),
                    o = !1;
                for (let e of n) {
                    let n = a.find(t => t.type === e);
                    if (null != n) continue;
                    o = t = !0;
                    let i = (0, d.v4)();
                    n = new T.default({
                        ...this.getWidgetDefaultSettings(e),
                        type: e,
                        id: i,
                        layoutId: s,
                        zIndex: a.length
                    }), a.push(n), r = {
                        ...r,
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
                    [s]: e
                })
            }), u().forEach(r, (e, n) => {
                let s = i[e.layoutId];
                (null == s || 0 > s.widgets.indexOf(n)) && (r = {
                    ...r
                }, delete r[n], t = !0)
            }), t && (this.persist(), this.emitChange())
        }
        getState() {
            return {
                layouts: i,
                widgets: r
            }
        }
        getLayouts() {
            return i
        }
        getLayout(e) {
            return i[e]
        }
        getAllWidgets() {
            return r
        }
        getWidget(e) {
            return r[e]
        }
        getWidgetsForLayout(e) {
            let t = this.getLayout(e);
            return null == t ? [] : t.widgets.reduce((e, t) => {
                let n = this.getWidget(t);
                return null != n && e.push(n), e
            }, [])
        }
        getWidgetConfig(e) {
            return m[e]
        }
        getWidgetDefaultSettings(e) {
            return O(e)
        }
        getWidgetType(e) {
            let t = r[e];
            return null != t ? t.type : ""
        }
        getRegisteredWidgets() {
            return m
        }
        getDefaultLayout(e) {
            let t = [];
            return u().forEach(this.getRegisteredWidgets(), (n, i) => {
                switch (n.layoutPolicy) {
                    case "REQUIRED":
                    case "OPTIONAL_DEFAULT":
                        t.push({
                            ...n.defaultSettings,
                            type: i,
                            id: (0, d.v4)(),
                            layoutId: e
                        })
                }
            }), t
        }
    }
    h(p, "displayName", "LayoutStore"), h(p, "persistKey", "LayoutStore"), h(p, "migrations", [() => {
        let {
            pinnedWidgets: e,
            positions: t,
            sizes: n,
            v: i
        } = {
            ...c.Storage.get("OverlayStore")
        };
        if (5 === i && e) {
            let i = [],
                r = e.map(e => {
                    let r = null != t ? t[e] : null,
                        s = null != n ? n[e] : null,
                        a = {
                            id: e,
                            layoutId: A,
                            type: e,
                            anchor: r || {
                                top: -1,
                                left: -1,
                                bottom: null,
                                right: null
                            },
                            size: s || {
                                width: -1,
                                height: -1
                            },
                            pinned: !0,
                            zIndex: 0
                        };
                    return i.push([a.id, a]), a.id
                });
            return {
                layouts: [
                    [A, {
                        id: A,
                        widgets: r
                    }]
                ],
                widgets: i
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
        } = e, i = new Set(Object.keys(S.OverlayWidgets)), r = Array.from(n).filter(e => {
            let [t] = e;
            return !i.has(t)
        }), s = Array.from(t).filter(e => {
            let [t] = e;
            return t !== A
        });
        return s.forEach(e => {
            let [t, n] = e, i = null, s = null;
            if (n.widgets.find(e => {
                    let n = r.find(n => {
                        let [i, r] = n;
                        return i === e && r.layoutId === t
                    });
                    return null != n && (null == s && n[1].type === S.OverlayWidgets.VOICE && (s = n[0]), null == i && n[1].type === S.OverlayWidgets.TEXT && (i = n[1].pinned), null != i && null != s || void 0)
                }), i || null == s) return;
            let a = (0, d.v4)();
            n.widgets = [s, a], r.push([a, {
                ...O(S.OverlayWidgets.GUILDS_TEXT),
                type: S.OverlayWidgets.GUILDS_TEXT,
                id: a,
                layoutId: t,
                zIndex: 2
            }])
        }), {
            widgets: r,
            layouts: s
        }
    }, e => {
        let {
            layouts: t,
            widgets: n
        } = e, i = t.reduce((e, t) => {
            let [n, i] = t;
            return e[n] = i, e
        }, {});
        return {
            layouts: i,
            widgets: n.reduce((e, t) => {
                let [n, i] = t;
                return e[n] = i, e
            }, {})
        }
    }]), t.default = new p(E.default, {
        LAYOUT_CREATE: function(e) {
            let {
                layoutId: t,
                widgets: n,
                defaultResolution: s
            } = e;
            if (null != i[t]) return !1;
            let a = [];
            n.forEach((e, t) => {
                let n = function(e) {
                        let t = i[A];
                        if (null != t)
                            for (let n of t.widgets) {
                                let t = r[n];
                                if (null != t && t.type === e) return t
                            }
                        return null
                    }(e.type),
                    o = {
                        ...e,
                        zIndex: t
                    };
                "" === o.id && (o.id = (0, d.v4)()), null != n && (o.pinned = n.pinned, -1 !== n.anchor.left && (o.anchor = (0, f.getAnchorPercentageFromLayoutSize)(n.anchor, s)), -1 !== n.size.width && (o.size = (0, f.getSizePercentageFromSize)(n.size, s))), r = {
                    ...r,
                    [o.id]: new T.default(o)
                }, a.push(o.id)
            }), i = {
                ...i,
                [t]: new I.default({
                    id: t,
                    widgets: a
                })
            }
        },
        LAYOUT_SET_PINNED: function(e) {
            let {
                widgetId: t
            } = e;
            return N(t, (e, t) => {
                (function(e) {
                    r = {
                        ...r,
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
            return N(t, (e, t) => (function(e, t, n) {
                r = {
                    ...r,
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
            return N(t, (e, t) => (function(e, t) {
                let n = function(e) {
                    let t = [];
                    return e.widgets.forEach(e => {
                        let n = r[e];
                        null != n && t.push(n)
                    }), t
                }(e);
                n.sort((e, t) => e.zIndex - t.zIndex);
                let i = n.findIndex(e => e.id === t);
                if (i === n.length - 1) return !1;
                n.push(n.splice(i, 1)[0]);
                for (let e = 0; e < n.length; e++)(function(e, t) {
                    r = {
                        ...r,
                        [e.id]: e.set("zIndex", t)
                    }
                })(n[e], e);
                return !0
            })(t, e.id))
        },
        LAYOUT_DELETE_WIDGET: function(e) {
            let {
                widgetId: t
            } = e;
            r = {
                ...r
            }, delete r[t], u().forEach(i, (e, n) => {
                if (n === A) return;
                let r = e.widgets.indexOf(t);
                if (r >= 0) {
                    let t = [...e.widgets];
                    t.splice(r, 1), i = {
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
                r = {
                    ...r
                }, delete r[e]
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
                let t = new T.default(e),
                    n = i[t.layoutId];
                if (null == n) throw Error("LayoutStore - handleAddWidget: Invalid layoutId");
                t = t.set("zIndex", n.widgets.length), r = {
                    ...r,
                    [t.id]: t
                };
                let s = [...n.widgets, t.id];
                i = {
                    ...i,
                    [n.id]: n.set("widgets", s)
                }
            })
        }
    })
}