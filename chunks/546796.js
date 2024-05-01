function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("411104");
    var a = n("594174"),
        s = n("831160");
    let o = () => {
        throw Error("updateModal has not been implemented.")
    };
    {
        let e = n("169480");
        i = e.showModal, o = e.updateModalProps, r = n("952265").closeModal
    }

    function l(e) {
        let {
            promiseFn: t,
            resolve: n,
            reject: a,
            modalProps: s = {},
            hooks: {
                onEarlyClose: l
            } = {}
        } = e;
        if (null == i) {
            null == l || l();
            return
        }
        let d = i(I, _, s);

        function _() {
            null == l || l()
        }

        function c(e) {
            r(d), n(e)
        }

        function E(e) {
            r(d), a(e)
        }

        function I(e) {
            return o(d, I, _, {
                ...s,
                isLoading: !0
            }), u({
                promiseFn: t,
                resolve: c,
                reject: E,
                code: e,
                mfaCodeHandler: T,
                isModalOpen: !0
            })
        }

        function T(e) {
            let {
                res: t
            } = e;
            o(d, I, _, {
                ...s,
                error: t.body.message
            })
        }
    }

    function u(e) {
        let {
            promiseFn: t,
            resolve: n,
            reject: i,
            code: r,
            mfaCodeHandler: a = l,
            isModalOpen: s = !1,
            ...o
        } = e;
        return t(null != r ? {
            code: r
        } : {}).then(n, e => {
            var r, l;
            if (r = e, l = s, r.body && 60008 === r.body.code || l && 429 === r.status) return a({
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
            checkEnabled: r = null !== (i = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
            ...o
        } = null != t ? t : {};
        return new Promise((t, n) => {
            ((0, s.resolveThunk)(r) ? l : u)({
                promiseFn: e,
                resolve: t,
                reject: n,
                ...o
            })
        })
    }
}