function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("55935"),
        r = n("70956"),
        s = n("34756"),
        a = n("689938");
    class o extends s.default {
        _getMessageFromRateLimit(e) {
            let t = e.body.retry_after,
                n = (0, i.diffAsUnits)(0, t * r.default.Millis.SECOND);
            return (0, i.unitsAsStrings)(n, {
                days: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                hours: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                minutes: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
            })
        }
        constructor(e, t) {
            super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
        }
    }
    t.default = o
}