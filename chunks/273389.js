function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("735250"),
        l = n("470079"),
        r = n("481060"),
        s = n("285952"),
        i = n("689938"),
        d = n("674484");
    t.default = e => {
        let t, {
                button: n,
                submitting: o,
                disableNext: u,
                onClick: c,
                canNavigateBack: m,
                onBackClicked: _
            } = e,
            f = l.useRef(null),
            E = null != n && "cancel" !== n.type,
            h = m && (null == n ? void 0 : n.type) !== "done",
            v = E || h;
        if (l.useEffect(() => {
                if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                    var e;
                    null === (e = f.current) || void 0 === e || e.focus()
                }
            }, [null == n ? void 0 : n.type]), !v) return null;
        let R = i.default.Messages.DONE;
        return (null == n ? void 0 : n.type) === "submit" ? (R = i.default.Messages.MOBILE_REPORTS_SUBMIT_REPORT, t = r.Button.Colors.RED) : (null == n ? void 0 : n.type) === "next" ? R = i.default.Messages.NEXT : (null == n ? void 0 : n.type) === "cancel" && (R = i.default.Messages.CANCEL, t = r.Button.Colors.TRANSPARENT), (0, a.jsxs)(r.ModalFooter, {
            direction: s.default.Direction.HORIZONTAL,
            children: [h && (0, a.jsx)(r.Button, {
                onClick: _,
                color: r.Button.Colors.TRANSPARENT,
                disabled: o,
                children: i.default.Messages.BACK
            }), E && (0, a.jsx)(r.Button, {
                onClick: () => {
                    null != n && c(n)
                },
                color: t,
                className: d.actionButton,
                disabled: o || u,
                buttonRef: f,
                children: R
            })]
        })
    }
}