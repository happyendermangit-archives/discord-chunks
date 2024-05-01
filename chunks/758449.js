function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("789020");
    var i = n("913527"),
        r = n.n(i),
        s = n("81825");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class o extends s.default {
        static createFromServer(e) {
            var t;
            return new o({
                ...e,
                maxUses: e.max_uses,
                maxAge: e.max_age,
                createdAt: r()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                targetType: e.target_type,
                targetUser: e.target_user,
                targetApplication: e.target_application
            })
        }
        isExpired() {
            let e = this.maxAge;
            return !!(e > 0 && r()(this.createdAt).add(e, "seconds").isBefore(Date.now())) || !1
        }
        getExpiresAt() {
            return this.maxAge > 0 ? r()(this.createdAt).add(this.maxAge, "seconds").toDate() : 1 / 0
        }
        toString() {
            return this.code
        }
        constructor(e) {
            super(), a(this, "code", void 0), a(this, "temporary", void 0), a(this, "revoked", void 0), a(this, "uses", void 0), a(this, "maxUses", void 0), a(this, "maxAge", void 0), a(this, "createdAt", void 0), a(this, "channel", void 0), a(this, "guild", void 0), a(this, "inviter", void 0), a(this, "targetType", void 0), a(this, "targetUser", void 0), a(this, "targetApplication", void 0), a(this, "type", void 0), a(this, "flags", void 0), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
        }
    }
}