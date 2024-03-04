function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, s = n("666038"),
        r = n("766274");
    i = class e extends s.default {
        static createFromServer(t) {
            return new e({
                ...t,
                user: new r.default(t.user)
            })
        }
        constructor(e) {
            var t;
            super(), this.id = e.id, this.name = e.name, this.type = e.type, this.user = e.user, this.displayName = null !== (t = e.name_localized) && void 0 !== t ? t : e.name
        }
    }
}