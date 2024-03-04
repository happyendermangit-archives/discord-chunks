function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return s
        }
    });
    var t = E("37983"),
        o = E("884691"),
        n = E("446674"),
        r = E("77078"),
        a = E("629109"),
        i = E("135230"),
        I = E("42887"),
        T = E("782340"),
        s = () => {
            let e = (0, n.useStateFromStores)([I.default], () => I.default.isInteractionRequired(), []),
                _ = o.useRef(null);

            function E() {
                null !== _.current && ((0, r.closeModal)(_.current), _.current = null)
            }

            function s() {
                a.default.interact()
            }
            return o.useEffect(() => (e ? _.current = (0, r.openModal)(e => (0, t.jsx)(i.default, {
                title: T.default.Messages.INTERACTION_REQUIRED_TITLE,
                body: T.default.Messages.INTERACTION_REQUIRED_BODY,
                onConfirm: s,
                confirmText: T.default.Messages.OKAY,
                ...e
            })) : E(), () => {
                E()
            }), [e]), null
        }
}