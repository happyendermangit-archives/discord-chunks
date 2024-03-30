function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("608036"),
        u = n("324377"),
        s = n("924900"),
        l = n("147391"),
        c = n("135983"),
        f = n("143953"),
        d = n("941504"),
        _ = n("528836");
    t.default = function(e) {
        var t, n, o, E = e.body,
            p = e.cancelText,
            m = e.className,
            y = e.confirmColor,
            I = e.confirmText,
            h = void 0 === I ? d.default.Messages.OKAY : I,
            O = e.secondaryConfirmText,
            T = e.onCancel,
            S = e.onClose,
            v = e.onConfirm,
            g = e.onConfirmSecondary,
            A = e.title,
            b = e.transitionState,
            N = e.titleClassName;
        return null != p && "" !== p && (t = r.createElement(a.Button, {
            type: "button",
            size: a.Button.Sizes.XLARGE,
            color: a.Button.Colors.PRIMARY,
            onClick: function() {
                null == S || S(), null == T || T()
            },
            className: _.secondaryButton
        }, p)), null != h && "" !== h && (n = r.createElement(a.Button, {
            type: "submit",
            color: y,
            size: a.Button.Sizes.XLARGE,
            className: i()(_.primaryButton, null != t ? _.gutter : null),
            autoFocus: !0
        }, h)), null != O && "" !== O && (o = r.createElement(u.Clickable, {
            onClick: function() {
                null == S || S(), null == g || g()
            },
            className: _.minorContainer
        }, r.createElement(c.Text, {
            className: _.secondaryAction,
            variant: "text-xs/normal"
        }, O))), r.createElement(l.ModalRoot, {
            transitionState: b,
            className: i()(m, _.container),
            "aria-label": A
        }, r.createElement("form", {
            onSubmit: function(e) {
                null != e && e.preventDefault(), null == S || S(), null == v || v()
            },
            className: _.form
        }, r.createElement(l.ModalContent, {
            className: _.modalContent
        }, r.createElement(f.default, {
            direction: f.default.Direction.VERTICAL,
            justify: f.default.Justify.CENTER,
            className: _.content
        }, null != A && r.createElement(s.FormTitle, {
            tag: "h2",
            className: i()(_.title, N)
        }, A), null != E && r.createElement(c.Text, {
            variant: "text-md/normal",
            className: _.body
        }, E))), r.createElement(l.ModalFooter, {
            justify: f.default.Justify.BETWEEN,
            wrap: f.default.Wrap.WRAP
        }, n, t, o)))
    }
}