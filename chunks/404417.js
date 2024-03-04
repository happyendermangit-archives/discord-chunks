function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuImageUploadControl: function() {
            return o
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("551042"),
        a = n("694187");
    let o = s.forwardRef(function(e, t) {
        let o = s.useRef(null);
        return s.useImperativeHandle(t, () => ({
            focus: () => null,
            activate: () => {
                var e;
                return null === (e = o.current) || void 0 === e || e.activateUploadDialogue(), !1
            }
        }), []), (0, i.jsx)("div", {
            style: {
                position: "relative"
            },
            children: (0, i.jsx)(a.default, {
                ...e,
                ref: o,
                onChange: function(t, s) {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: r
                        } = await n.el("57015").then(n.bind(n, "57015"));
                        return n => (0, i.jsx)(r, {
                            imgURI: t,
                            file: s,
                            onCrop: e.onChange,
                            ...n
                        })
                    })
                }
            })
        })
    })
}