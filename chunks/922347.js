function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        },
        isAvatarDecorationRecord: function() {
            return a
        }
    });
    var i = n("979554"),
        r = n("656698");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let a = e => e instanceof o;
    class o extends r.default {
        static fromServer(e) {
            return new o({
                ...super.fromServer(e),
                ...e
            })
        }
        constructor(e) {
            super(e), s(this, "asset", void 0), s(this, "label", void 0), this.type = i.CollectiblesItemType.AVATAR_DECORATION, this.asset = e.asset, this.label = e.label
        }
    }
}