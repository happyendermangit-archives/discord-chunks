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
            return d
        },
        LazyLibrary: function() {
            return c
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691");
    let r = function() {
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
        } = e, s = 500, r = 0;
        for (;;) try {
            return await t()
        } catch (e) {
            if (console.log(e), i in n.c) throw console.log("Module was found in webpack cache so it has loaded from the network and webpack will not retry"), e;
            if (r >= 50) throw e;
            await l(s), await a(), s = Math.min(5e3, 2 * s), r++
        }
    }

    function d(e) {
        let {
            createPromise: t,
            webpackId: n,
            renderLoader: a,
            name: o,
            memo: l = !1
        } = e, d = s.lazy(() => u({
            createPromise: t,
            webpackId: n
        })), c = e => (0, i.jsx)(s.Suspense, {
            fallback: null != a ? a() : r()(),
            children: (0, i.jsx)(d, {
                ...e
            })
        });
        return l && (c = s.memo(c)), c.displayName = "Suspense(".concat(o || "Unknown", ")"), c
    }

    function c(e) {
        let {
            createPromise: t,
            webpackId: n,
            render: r,
            renderFallback: a
        } = e, [o, l] = s.useState(null);
        return s.useEffect(() => {
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
            children: null == o ? a() : r(o)
        })
    }
}