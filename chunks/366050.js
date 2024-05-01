function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("47120");
    var a, s, o, l, u = n("442837"),
        d = n("433517"),
        _ = n("570140"),
        c = n("981631");
    let E = "PictureInPictureLocation",
        I = new Map,
        T = c.PictureInPicturePositions.BOTTOM_RIGHT,
        f = {};
    class S extends(a = u.default.Store) {
        initialize() {
            T = d.Storage.get(E, c.PictureInPicturePositions.BOTTOM_RIGHT)
        }
        get pipWindow() {
            var e;
            return null == i && null == r ? null : I.get(null !== (e = null != i ? i : r) && void 0 !== e ? e : "")
        }
        get pipVideoWindow() {
            return null == i ? null : I.get(i)
        }
        get pipActivityWindow() {
            return null == r ? null : I.get(r)
        }
        get pipWindows() {
            return I
        }
        isEmbeddedActivityHidden() {
            return null == r
        }
        getDockedRect(e) {
            return f[e]
        }
        isOpen(e) {
            return null != e && I.has(e)
        }
    }
    l = "PictureInPictureStore", (o = "displayName") in(s = S) ? Object.defineProperty(s, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[o] = l, t.default = new S(_.default, {
        PICTURE_IN_PICTURE_OPEN: function(e) {
            var t, n;
            let {
                id: a,
                component: s,
                props: o
            } = e;
            if (null != I.get(a)) return;
            let l = {
                id: a,
                component: s,
                position: null !== (t = o.position) && void 0 !== t ? t : T,
                props: o,
                docked: null !== (n = o.docked) && void 0 !== n && n
            };
            I.set(a, l), s === c.PictureInPictureComponents.VIDEO ? null == i && (i = a) : s === c.PictureInPictureComponents.EMBED_IFRAME && null == r && (r = a)
        },
        PICTURE_IN_PICTURE_CLOSE: function(e) {
            let {
                id: t
            } = e;
            if (!I.has(t)) return !1;
            {
                I.delete(t);
                let e = Array.from(I.keys());
                i === t ? i = e.find(e => {
                    let t = I.get(e);
                    return null != t && t.component === c.PictureInPictureComponents.VIDEO
                }) : r === t && (r = e.find(e => {
                    let t = I.get(e);
                    return null != t && t.component === c.PictureInPictureComponents.EMBED_IFRAME
                }))
            }
        },
        PICTURE_IN_PICTURE_MOVE: function(e) {
            let {
                id: t,
                position: n
            } = e;
            if (null == t || i !== t && r !== t) return !1;
            {
                let e = new Map;
                I.forEach((t, i) => {
                    e.set(i, {
                        ...t,
                        position: n
                    })
                }), I = e, T = n, d.Storage.set(E, n)
            }
        },
        PICTURE_IN_PICTURE_HIDE: function(e) {
            let {
                id: t
            } = e;
            if (i !== t && r !== t) return !1;
            {
                let e = I.get(t);
                if (null == e) return !1;
                I.set(t, {
                    ...e,
                    hidden: !0
                })
            }
        },
        PICTURE_IN_PICTURE_SHOW: function(e) {
            let {
                id: t
            } = e;
            if (i !== t && r !== t) return !1;
            {
                let e = I.get(t);
                if (null == e) return !1;
                I.set(t, {
                    ...e,
                    hidden: !1
                })
            }
        },
        PICTURE_IN_PICTURE_UPDATE_RECT: function(e) {
            let {
                id: t,
                rect: n
            } = e;
            f[t] = n
        },
        PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function(e) {
            let {
                id: t
            } = e, n = I.get(t);
            null != n && (n.component === c.PictureInPictureComponents.VIDEO ? i = t : n.component === c.PictureInPictureComponents.EMBED_IFRAME && (r = t))
        },
        LOGOUT: function() {
            i = null, r = null, I = new Map
        }
    })
}