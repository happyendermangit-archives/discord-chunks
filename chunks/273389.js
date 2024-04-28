function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("285952"),
        o = n("689938"),
        l = n("88493");
    t.default = e => {
        let t, {
                button: n,
                submitting: u,
                disableNext: d,
                onClick: _,
                canNavigateBack: c,
                onBackClicked: E
            } = e,
            I = r.useRef(null),
            T = null != n && "cancel" !== n.type,
            f = c && (null == n ? void 0 : n.type) !== "done",
            S = T || f;
        if (r.useEffect(() => {
                if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                    var e;
                    null === (e = I.current) || void 0 === e || e.focus()
                }
            }, [null == n ? void 0 : n.type]), !S) return null;
        let h = o.default.Messages.DONE;
        return (null == n ? void 0 : n.type) === "submit" ? (h = o.default.Messages.MOBILE_REPORTS_SUBMIT_REPORT, t = s.Button.Colors.RED) : (null == n ? void 0 : n.type) === "next" ? h = o.default.Messages.NEXT : (null == n ? void 0 : n.type) === "cancel" && (h = o.default.Messages.CANCEL, t = s.Button.Colors.TRANSPARENT), (0, i.jsxs)(s.ModalFooter, {
            direction: a.default.Direction.HORIZONTAL,
            children: [f && (0, i.jsx)(s.Button, {
                onClick: E,
                color: s.Button.Colors.TRANSPARENT,
                disabled: u,
                children: o.default.Messages.BACK
            }), T && (0, i.jsx)(s.Button, {
                onClick: () => {
                    null != n && _(n)
                },
                color: t,
                className: l.actionButton,
                disabled: u || d,
                buttonRef: I,
                children: h
            })]
        })
    }
}