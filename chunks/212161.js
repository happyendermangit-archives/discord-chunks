function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        isProfileEffectRecord: function() {
            return s
        }
    });
    var i = n("979554"),
        r = n("656698");
    let s = e => e instanceof a;
    class a extends r.default {
        static fromServer(e) {
            return new a({
                ...super.fromServer(e),
                ...e
            })
        }
        constructor(e) {
            super(e), this.type = i.CollectiblesItemType.PROFILE_EFFECT
        }
    }
}