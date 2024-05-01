function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        },
        isProfileEffectRecord: function() {
            return a
        }
    });
    var i = n("979554"),
        r = n("656698");
    let a = e => e instanceof s;
    class s extends r.default {
        static fromServer(e) {
            return new s({
                ...super.fromServer(e),
                ...e
            })
        }
        constructor(e) {
            super(e), this.type = i.CollectiblesItemType.PROFILE_EFFECT
        }
    }
}