function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return a
        }
    });
    var l = n("666038");
    class r extends l.default {
        static createFromServer(t) {
            return new r({
                id: t.id,
                guildId: t.guild_id,
                userId: null != t.user ? t.user.id : t.user_id,
                user: t.user,
                ended: t.ended,
                endsAt: null != t.ends_at && "" !== t.ends_at ? new Date(t.ends_at) : null
            })
        }
        constructor(t) {
            super(), this.id = t.id, this.guildId = t.guildId, this.userId = t.userId, this.user = t.user, this.ended = t.ended, this.endsAt = null != t.endsAt ? t.endsAt : null
        }
    }
    var a = r
}