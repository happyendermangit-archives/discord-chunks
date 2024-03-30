function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("707907"),
        l = n("941504"),
        i = n("400537");
    t.default = function(e) {
        var t = e.errorMessage,
            n = e.onClose;
        return null == t || "" === t ? null : r.createElement("div", {
            className: i.errorContainer
        }, r.createElement(o.default, {
            width: 20,
            height: 20,
            className: i.errorIcon
        }), r.createElement(a.Text, {
            className: i.errorText,
            variant: "text-sm/normal"
        }, t), r.createElement(a.Clickable, {
            onClick: function() {
                n()
            },
            "aria-label": l.default.Messages.DISMISS,
            className: i.closeIcon
        }))
    }
}