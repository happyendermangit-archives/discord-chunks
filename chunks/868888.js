function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        persist: function() {
            return l
        }
    });
    Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
    var r = Object.defineProperty,
        i = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable,
        s = (e, t, n) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        u = (e, t) => {
            for (var n in t || (t = {})) a.call(t, n) && s(e, n, t[n]);
            if (i)
                for (var n of i(t)) o.call(t, n) && s(e, n, t[n]);
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
        l = (e, t) => (n, r, i) => {
            let a, o, s = u({
                getStorage: () => localStorage,
                serialize: JSON.stringify,
                deserialize: JSON.parse,
                partialize: e => e,
                version: 0,
                merge: (e, t) => u(u({}, t), e)
            }, t);
            (s.blacklist || s.whitelist) && console.warn(`The ${s.blacklist?"blacklist":"whitelist"} option is deprecated and will be removed in the next version. Please use the 'partialize' option instead.`);
            let l = !1,
                d = new Set,
                f = new Set;
            try {
                a = s.getStorage()
            } catch (e) {}
            if (!a) return e((...e) => {
                console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), n(...e)
            }, r, i);
            !a.removeItem && console.warn(`[zustand persist middleware] The given storage for item '${s.name}' does not contain a 'removeItem' method, which will be required in v4.`);
            let p = c(s.serialize),
                h = () => {
                    let e;
                    let t = s.partialize(u({}, r()));
                    s.whitelist && Object.keys(t).forEach(e => {
                        var n;
                        (null == (n = s.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                    }), s.blacklist && s.blacklist.forEach(e => delete t[e]);
                    let n = p({
                        state: t,
                        version: s.version
                    }).then(e => a.setItem(s.name, e)).catch(t => {
                        e = t
                    });
                    if (e) throw e;
                    return n
                },
                m = i.setState;
            i.setState = (e, t) => {
                m(e, t), h()
            };
            let g = e((...e) => {
                    n(...e), h()
                }, r, i),
                _ = () => {
                    var e;
                    if (!a) return;
                    l = !1, d.forEach(e => e(r()));
                    let t = (null == (e = s.onRehydrateStorage) ? void 0 : e.call(s, r())) || void 0;
                    return c(a.getItem.bind(a))(s.name).then(e => {
                        if (e) return s.deserialize(e)
                    }).then(e => {
                        if (e) {
                            if ("number" != typeof e.version || e.version === s.version) return e.state;
                            if (s.migrate) return s.migrate(e.state, e.version);
                            console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                        }
                    }).then(e => {
                        var t;
                        return n(o = s.merge(e, null != (t = r()) ? t : g), !0), h()
                    }).then(() => {
                        null == t || t(o, void 0), l = !0, f.forEach(e => e(o))
                    }).catch(e => {
                        null == t || t(void 0, e)
                    })
                };
            return i.persist = {
                setOptions: e => {
                    s = u(u({}, s), e), e.getStorage && (a = e.getStorage())
                },
                clearStorage: () => {
                    var e;
                    null == (e = null == a ? void 0 : a.removeItem) || e.call(a, s.name)
                },
                rehydrate: () => _(),
                hasHydrated: () => l,
                onHydrate: e => (d.add(e), () => {
                    d.delete(e)
                }),
                onFinishHydration: e => (f.add(e), () => {
                    f.delete(e)
                })
            }, _(), o || g
        }
}