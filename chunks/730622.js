function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("70102");
    var r = n("697218"),
        a = n("615931");
    let o = () => {
        throw Error("updateModal has not been implemented.")
    };
    {
        let e = n("670924");
        i = e.showModal, o = e.updateModalProps, s = n("551042").closeModal
    }

    function l(e) {
        let {
            promiseFn: t,
            resolve: n,
            reject: r,
            modalProps: a = {},
            hooks: {
                onEarlyClose: l
            } = {}
        } = e;
        if (null == i) {
            null == l || l();
            return
        }
        let d = i(E, c, a);

        function c() {
            null == l || l()
        }

        function f(e) {
            s(d), n(e)
        }

        function _(e) {
            s(d), r(e)
        }

        function E(e) {
            return o(d, E, c, {
                ...a,
                isLoading: !0
            }), u({
                promiseFn: t,
                resolve: f,
                reject: _,
                code: e,
                mfaCodeHandler: h,
                isModalOpen: !0
            })
        }

        function h(e) {
            let {
                res: t
            } = e;
            o(d, E, c, {
                ...a,
                error: t.body.message
            })
        }
    }

    function u(e) {
        let {
            promiseFn: t,
            resolve: n,
            reject: i,
            code: s,
            mfaCodeHandler: r = l,
            isModalOpen: a = !1,
            ...o
        } = e;
        return t(null != s ? {
            code: s
        } : {}).then(n, e => {
            var s, l;
            if (s = e, l = a, s.body && 60008 === s.body.code || l && 429 === s.status) return r({
                promiseFn: t,
                resolve: n,
                reject: i,
                res: e,
                ...o
            });
            i(e)
        })
    }

    function d(e, t) {
        var n, i;
        let {
            checkEnabled: s = null !== (i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
            ...o
        } = null != t ? t : {};
        return new Promise((t, n) => {
            ((0, a.resolveThunk)(s) ? l : u)({
                promiseFn: e,
                resolve: t,
                reject: n,
                ...o
            })
        })
    }
}