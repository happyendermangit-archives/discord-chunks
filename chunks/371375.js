function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("143953"),
        l = n("941504"),
        i = n("674484");
    t.default = function(e) {
        var t, n = e.button,
            u = e.submitting,
            c = e.disableNext,
            s = e.onClick,
            d = e.canNavigateBack,
            f = e.onBackClicked,
            m = r.useRef(null),
            p = null != n && "cancel" !== n.type,
            v = d && (null == n ? void 0 : n.type) !== "done",
            y = p || v;
        if (r.useEffect(function() {
                if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                    var e;
                    null === (e = m.current) || void 0 === e || e.focus()
                }
            }, [null == n ? void 0 : n.type]), !y) return null;
        var E = l.default.Messages.DONE;
        return (null == n ? void 0 : n.type) === "submit" ? (E = l.default.Messages.MOBILE_REPORTS_SUBMIT_REPORT, t = a.Button.Colors.RED) : (null == n ? void 0 : n.type) === "next" ? E = l.default.Messages.NEXT : (null == n ? void 0 : n.type) === "cancel" && (E = l.default.Messages.CANCEL, t = a.Button.Colors.TRANSPARENT), r.createElement(a.ModalFooter, {
            direction: o.default.Direction.HORIZONTAL
        }, v && r.createElement(a.Button, {
            onClick: f,
            color: a.Button.Colors.TRANSPARENT,
            disabled: u
        }, l.default.Messages.BACK), p && r.createElement(a.Button, {
            onClick: function() {
                null != n && s(n)
            },
            color: t,
            className: i.actionButton,
            disabled: u || c,
            buttonRef: m
        }, E))
    }
}