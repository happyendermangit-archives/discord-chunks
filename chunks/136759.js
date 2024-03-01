function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        persist: function() {
            return d
        }
    }), n("222007");
    Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
    var i = Object.defineProperty,
        r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable,
        s = (e, t, n) => t in e ? i(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        l = (e, t) => {
            for (var n in t || (t = {})) o.call(t, n) && s(e, n, t[n]);
            if (r)
                for (var n of r(t)) a.call(t, n) && s(e, n, t[n]);
            return e
        };
    let c = e => t => {
            try {
                let n = e(t);
                if (n instanceof Promise) return n;
                return {
                    then: e => c(e)(n),
                    catch (e) {
                        return this
                    }
                }
            } catch (e) {
                return {
                    then(e) {
                        return this
                    },
                    catch: t => c(t)(e)
                }
            }
        },
        d = (e, t) => (n, i, r) => {
            let o, a, s = l({
                getStorage: () => localStorage,
                serialize: JSON.stringify,
                deserialize: JSON.parse,
                partialize: e => e,
                version: 0,
                merge: (e, t) => l(l({}, t), e)
            }, t);
            (s.blacklist || s.whitelist) && console.warn("The ".concat(s.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
            let d = !1,
                u = new Set,
                f = new Set;
            try {
                o = s.getStorage()
            } catch (e) {}
            if (!o) return e(function() {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                console.warn("[zustand persist middleware] Unable to update item '".concat(s.name, "', the given storage is currently unavailable.")), n(...t)
            }, i, r);
            !o.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(s.name, "' does not contain a 'removeItem' method, which will be required in v4."));
            let h = c(s.serialize),
                p = () => {
                    let e;
                    let t = s.partialize(l({}, i()));
                    s.whitelist && Object.keys(t).forEach(e => {
                        var n;
                        (null == (n = s.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                    }), s.blacklist && s.blacklist.forEach(e => delete t[e]);
                    let n = h({
                        state: t,
                        version: s.version
                    }).then(e => o.setItem(s.name, e)).catch(t => {
                        e = t
                    });
                    if (e) throw e;
                    return n
                },
                m = r.setState;
            r.setState = (e, t) => {
                m(e, t), p()
            };
            let g = e(function() {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    n(...t), p()
                }, i, r),
                v = () => {
                    var e;
                    if (!o) return;
                    d = !1, u.forEach(e => e(i()));
                    let t = (null == (e = s.onRehydrateStorage) ? void 0 : e.call(s, i())) || void 0;
                    return c(o.getItem.bind(o))(s.name).then(e => {
                        if (e) return s.deserialize(e)
                    }).then(e => {
                        if (e) {
                            if ("number" != typeof e.version || e.version === s.version) return e.state;
                            if (s.migrate) return s.migrate(e.state, e.version);
                            console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                        }
                    }).then(e => {
                        var t;
                        return n(a = s.merge(e, null != (t = i()) ? t : g), !0), p()
                    }).then(() => {
                        null == t || t(a, void 0), d = !0, f.forEach(e => e(a))
                    }).catch(e => {
                        null == t || t(void 0, e)
                    })
                };
            return r.persist = {
                setOptions: e => {
                    s = l(l({}, s), e), e.getStorage && (o = e.getStorage())
                },
                clearStorage: () => {
                    var e;
                    null == (e = null == o ? void 0 : o.removeItem) || e.call(o, s.name)
                },
                rehydrate: () => v(),
                hasHydrated: () => d,
                onHydrate: e => (u.add(e), () => {
                    u.delete(e)
                }),
                onFinishHydration: e => (f.add(e), () => {
                    f.delete(e)
                })
            }, v(), a || g
        }
}