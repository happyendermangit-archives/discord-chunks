function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        isProfileEffectRecord: function() {
            return i
        },
        default: function() {
            return a
        }
    });
    var a, l = r("265586"),
        n = r("200410");
    let i = e => e instanceof a;
    a = class e extends n.default {
        static fromServer(t) {
            return new e({
                ...super.fromServer(t),
                ...t
            })
        }
        constructor(e) {
            super(e), this.type = l.CollectiblesItemType.PROFILE_EFFECT
        }
    }
}