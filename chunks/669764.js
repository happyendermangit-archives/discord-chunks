function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("442837"),
        l = n("570140");
    let u = new Map,
        d = new Set,
        _ = new Set;
    class c extends(i = o.default.Store) {
        canFetch(e) {
            return !d.has(e) && !_.has(e) && !u.has(e)
        }
        isFetching(e) {
            return d.has(e)
        }
        getLocalizedName(e) {
            var t;
            return null === (t = u.get(e)) || void 0 === t ? void 0 : t.name
        }
        getThemes(e) {
            var t;
            return null === (t = u.get(e)) || void 0 === t ? void 0 : t.themes
        }
        getCoverImageUrl(e, t) {
            var n;
            let i = null === (n = u.get(e)) || void 0 === n ? void 0 : n.coverImageUrl;
            return null == i ? null : null == t ? i : "".concat(i, "?width=").concat(t.width, "&height=").concat(t.height)
        }
    }
    s = "DetectableGameSupplementalStore", (a = "displayName") in(r = c) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new c(l.default, {
        CONNECTION_OPEN: function() {
            u = new Map, d = new Set, _ = new Set
        },
        DETECTABLE_GAME_SUPPLEMENTAL_FETCH: function(e) {
            let {
                applicationIds: t
            } = e;
            t.forEach(e => {
                d.add(e), _.delete(e)
            })
        },
        DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: function(e) {
            let {
                applicationIds: t,
                supplementalGameData: n
            } = e;
            t.forEach(e => {
                d.delete(e), _.delete(e)
            }), n.forEach(e => {
                let {
                    application_id: t,
                    cover_image_url: n,
                    name: i,
                    themes: r
                } = e;
                u.set(t, {
                    themes: r,
                    coverImageUrl: n,
                    name: i
                })
            })
        },
        DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: function(e) {
            let {
                applicationIds: t
            } = e;
            t.forEach(e => {
                d.delete(e), _.add(e)
            })
        }
    })
}