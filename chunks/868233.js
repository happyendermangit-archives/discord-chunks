function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setAwaitOnline: function() {
            return o
        },
        importWithRetry: function() {
            return u
        },
        makeLazy: function() {
            return c
        },
        LazyLibrary: function() {
            return d
        }
    }), n("222007");
    var i = n("37983"),
        r = n("884691");
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

    function c(e) {
        let {
            createPromise: t,
            webpackId: n,
            renderLoader: a,
            name: o,
            memo: l = !1
        } = e, c = r.lazy(() => u({
            createPromise: t,
            webpackId: n
        })), d = e => (0, i.jsx)(r.Suspense, {
            fallback: null != a ? a() : s()(),
            children: (0, i.jsx)(c, {
                ...e
            })
        });
        return l && (d = r.memo(d)), d.displayName = "Suspense(".concat(o || "Unknown", ")"), d
    }

    function d(e) {
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