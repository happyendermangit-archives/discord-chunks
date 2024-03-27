function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LazyLibrary: function() {
            return _
        },
        importWithRetry: function() {
            return u
        },
        makeLazy: function() {
            return d
        },
        setAwaitOnline: function() {
            return o
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079");
    let s = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transparent";
            return () => (0, i.jsx)("div", {
                style: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: e
                }
            })
        },
        a = () => Promise.resolve();

    function o(e) {
        a = e
    }
    let l = e => new Promise(t => setTimeout(t, e));
    async function u(e) {
        let {
            createPromise: t,
            webpackId: i
        } = e, r = 500, s = 0;
        for (;;) try {
            return await t()
        } catch (e) {
            if (console.log(e), i in n.c) throw console.log("Module was found in webpack cache so it has loaded from the network and webpack will not retry"), e;
            if (s >= 50) throw e;
            await l(r), await a(), r = Math.min(5e3, 2 * r), s++
        }
    }

    function d(e) {
        let {
            createPromise: t,
            webpackId: n,
            renderLoader: a,
            name: o,
            memo: l = !1
        } = e, d = r.lazy(() => u({
            createPromise: t,
            webpackId: n
        })), _ = e => (0, i.jsx)(r.Suspense, {
            fallback: null != a ? a() : s()(),
            children: (0, i.jsx)(d, {
                ...e
            })
        });
        return l && (_ = r.memo(_)), _.displayName = "Suspense(".concat(o || "Unknown", ")"), _
    }

    function _(e) {
        let {
            createPromise: t,
            webpackId: n,
            render: s,
            renderFallback: a
        } = e, [o, l] = r.useState(null);
        return r.useEffect(() => {
            u({
                createPromise: t,
                webpackId: n
            }).then(e => {
                let {
                    default: t
                } = e;
                return l(t)
            })
        }, []), (0, i.jsx)(i.Fragment, {
            children: null == o ? a() : s(o)
        })
    }
}