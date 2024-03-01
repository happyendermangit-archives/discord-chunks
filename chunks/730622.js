function(e, t, n) {
    "use strict";
    let s, i;
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("70102");
    var r = n("697218"),
        a = n("615931");
    let o = () => {
        throw Error("updateModal has not been implemented.")
    };
    {
        let e = n("670924");
        s = e.showModal, o = e.updateModalProps, i = n("551042").closeModal
    }

    function d(e) {
        let {
            promiseFn: t,
            resolve: n,
            reject: r,
            modalProps: a = {},
            hooks: {
                onEarlyClose: d
            } = {}
        } = e;
        if (null == s) {
            null == d || d();
            return
        }
        let l = s(g, f, a);

        function f() {
            null == d || d()
        }

        function _(e) {
            i(l), n(e)
        }

        function c(e) {
            i(l), r(e)
        }

        function g(e) {
            return o(l, g, f, {
                ...a,
                isLoading: !0
            }), u({
                promiseFn: t,
                resolve: _,
                reject: c,
                code: e,
                mfaCodeHandler: m,
                isModalOpen: !0
            })
        }

        function m(e) {
            let {
                res: t
            } = e;
            o(l, g, f, {
                ...a,
                error: t.body.message
            })
        }
    }

    function u(e) {
        let {
            promiseFn: t,
            resolve: n,
            reject: s,
            code: i,
            mfaCodeHandler: r = d,
            isModalOpen: a = !1,
            ...o
        } = e;
        return t(null != i ? {
            code: i
        } : {}).then(n, e => {
            var i, d;
            if (i = e, d = a, i.body && 60008 === i.body.code || d && 429 === i.status) return r({
                promiseFn: t,
                resolve: n,
                reject: s,
                res: e,
                ...o
            });
            s(e)
        })
    }

    function l(e, t) {
        var n, s;
        let {
            checkEnabled: i = null !== (s = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== s && s,
            ...o
        } = null != t ? t : {};
        return new Promise((t, n) => {
            ((0, a.resolveThunk)(i) ? d : u)({
                promiseFn: e,
                resolve: t,
                reject: n,
                ...o
            })
        })
    }
}