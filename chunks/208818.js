function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("784184"),
        i = n("247164"),
        a = n("263744"),
        u = n("348201"),
        s = n("941504"),
        l = n("981512");
    t.default = function(e) {
        var t = e.markAsDismissed;
        return r.createElement("div", {
            className: l.wrapper
        }, r.createElement(a.default, {
            className: l.icon
        }), r.createElement("div", {
            className: l.content
        }, r.createElement(o.Text, {
            variant: "text-xs/normal"
        }, s.default.Messages.EMOJI_PICKER_FAVORITES_TIP)), r.createElement(o.Clickable, {
            onClick: function() {
                return t(u.ContentDismissActionType.UNKNOWN)
            }
        }, r.createElement(i.default, {
            className: l.close
        })))
    }
}