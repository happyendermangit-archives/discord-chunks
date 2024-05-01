function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeContextMenu: function() {
            return u
        },
        openContextMenu: function() {
            return d
        },
        openContextMenuLazy: function() {
            return _
        }
    }), n("773603");
    var i = n("570140"),
        r = n("40851"),
        a = n("358085"),
        s = n("601993"),
        o = n("981631");

    function l(e) {
        i.default.dispatch({
            type: "CONTEXT_MENU_OPEN",
            contextMenu: e
        })
    }

    function u(e) {
        {
            let {
                flushSync: t
            } = n("699581");
            t(() => {
                i.default.wait(() => {
                    i.default.dispatch({
                        type: "CONTEXT_MENU_CLOSE"
                    }).finally(e)
                })
            })
        }
    }

    function d(e, t, n, i) {
        var u, d, _;
        if (e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
        let c = 0,
            E = 0;
        if ("pageX" in e && (c = e.pageX, E = e.pageY), 0 === c && 0 === E) {
            let t = null === (u = e.target) || void 0 === u ? void 0 : u.getBoundingClientRect(),
                {
                    left: n = 0,
                    top: i = 0,
                    width: r = 0,
                    height: a = 0
                } = null != t ? t : {};
            c = n + r / 2, E = i + a / 2
        }
        let I = {
            render: t,
            renderLazy: i,
            target: null !== (d = e.target) && void 0 !== d ? d : e.currentTarget,
            rect: new DOMRect(c, E, 0, 0),
            config: {
                context: __OVERLAY__ ? o.AppContext.OVERLAY : null !== (_ = (0, r.getCurrentlyInteractingAppContext)()) && void 0 !== _ ? _ : o.AppContext.APP,
                ...n
            }
        };
        if ((null == n ? void 0 : n.enableSpellCheck) && (0, a.isDesktop)()) {
            let e = (0, s.addResultListener)(() => {
                e(), l(I)
            })
        } else e.preventDefault(), l(I)
    }

    function _(e, t, n) {
        d(e, void 0, n, t)
    }
}