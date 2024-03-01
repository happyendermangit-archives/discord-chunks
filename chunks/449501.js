function(e, _, E) {
    "use strict";
    let t, o;
    E.r(_), E.d(_, {
        default: function() {
            return O
        }
    }), E("222007");
    var n = E("446674"),
        r = E("95410"),
        i = E("913144"),
        a = E("49111");
    let I = "PictureInPictureLocation",
        s = new Map,
        T = a.PictureInPicturePositions.BOTTOM_RIGHT,
        S = {};
    class N extends n.default.Store {
        initialize() {
            T = r.default.get(I, a.PictureInPicturePositions.BOTTOM_RIGHT)
        }
        get pipWindow() {
            var e;
            return null == t && null == o ? null : s.get(null !== (e = null != t ? t : o) && void 0 !== e ? e : "")
        }
        get pipVideoWindow() {
            return null == t ? null : s.get(t)
        }
        get pipActivityWindow() {
            return null == o ? null : s.get(o)
        }
        get pipWindows() {
            return s
        }
        isEmbeddedActivityHidden() {
            return null == o
        }
        getDockedRect(e) {
            return S[e]
        }
        isOpen(e) {
            return null != e && s.has(e)
        }
    }
    N.displayName = "PictureInPictureStore";
    var O = new N(i.default, {
        PICTURE_IN_PICTURE_OPEN: function(e) {
            var _, E;
            let {
                id: n,
                component: r,
                props: i
            } = e, I = s.get(n);
            if (null != I) return;
            let S = {
                id: n,
                component: r,
                position: null !== (_ = i.position) && void 0 !== _ ? _ : T,
                props: i,
                docked: null !== (E = i.docked) && void 0 !== E && E
            };
            s.set(n, S), r === a.PictureInPictureComponents.VIDEO ? null == t && (t = n) : r === a.PictureInPictureComponents.EMBED_IFRAME && null == o && (o = n)
        },
        PICTURE_IN_PICTURE_CLOSE: function(e) {
            let {
                id: _
            } = e;
            if (!s.has(_)) return !1;
            {
                s.delete(_);
                let e = Array.from(s.keys());
                t === _ ? t = e.find(e => {
                    let _ = s.get(e);
                    return null != _ && _.component === a.PictureInPictureComponents.VIDEO
                }) : o === _ && (o = e.find(e => {
                    let _ = s.get(e);
                    return null != _ && _.component === a.PictureInPictureComponents.EMBED_IFRAME
                }))
            }
        },
        PICTURE_IN_PICTURE_MOVE: function(e) {
            let {
                id: _,
                position: E
            } = e;
            if (null == _ || t !== _ && o !== _) return !1;
            {
                let e = new Map;
                s.forEach((_, t) => {
                    e.set(t, {
                        ..._,
                        position: E
                    })
                }), s = e, T = E, r.default.set(I, E)
            }
        },
        PICTURE_IN_PICTURE_HIDE: function(e) {
            let {
                id: _
            } = e;
            if (t !== _ && o !== _) return !1;
            {
                let e = s.get(_);
                if (null == e) return !1;
                s.set(_, {
                    ...e,
                    hidden: !0
                })
            }
        },
        PICTURE_IN_PICTURE_SHOW: function(e) {
            let {
                id: _
            } = e;
            if (t !== _ && o !== _) return !1;
            {
                let e = s.get(_);
                if (null == e) return !1;
                s.set(_, {
                    ...e,
                    hidden: !1
                })
            }
        },
        PICTURE_IN_PICTURE_UPDATE_RECT: function(e) {
            let {
                id: _,
                rect: E
            } = e;
            S[_] = E
        },
        PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: function(e) {
            let {
                id: _
            } = e, E = s.get(_);
            null != E && (E.component === a.PictureInPictureComponents.VIDEO ? t = _ : E.component === a.PictureInPictureComponents.EMBED_IFRAME && (o = _))
        },
        LOGOUT: function() {
            t = null, o = null, s = new Map
        }
    })
}