function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("481060"),
        o = n("846027"),
        l = n("468026"),
        u = n("131951"),
        d = n("689938");
    t.default = () => {
        let e = (0, a.useStateFromStores)([u.default], () => u.default.isInteractionRequired(), []),
            t = r.useRef(null);

        function n() {
            null !== t.current && ((0, s.closeModal)(t.current), t.current = null)
        }

        function _() {
            o.default.interact()
        }
        return r.useEffect(() => (e ? t.current = (0, s.openModal)(e => (0, i.jsx)(l.default, {
            title: d.default.Messages.INTERACTION_REQUIRED_TITLE,
            body: d.default.Messages.INTERACTION_REQUIRED_BODY,
            onConfirm: _,
            confirmText: d.default.Messages.OKAY,
            ...e
        })) : n(), () => {
            n()
        }), [e]), null
    }
}