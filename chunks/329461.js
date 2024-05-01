function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("70956");
    let d = [],
        _ = new Set,
        c = 0;
    class E extends(i = o.default.Store) {
        initialize() {
            setInterval(() => {
                this.emitChange()
            }, 1 * u.default.Millis.MINUTE)
        }
        getMessageReminders() {
            return d
        }
        isMessageReminder(e) {
            let t = d.find(t => t.messageId === e);
            return null != t && !t.complete
        }
        getOverdueMessageReminderCount() {
            return d.filter(e => null == e.dueAt || new Date > e.dueAt).length
        }
        recentlyFetched() {
            return new Date().getTime() - c < 1 * u.default.Millis.MINUTE
        }
        hasSentNotification(e) {
            return _.has(e)
        }
        getState() {
            return {
                messages: d
            }
        }
    }
    s = "MessageRemindersStore", (a = "displayName") in(r = E) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new E(l.default, {
        SAVED_MESSAGES_UPDATE: function(e) {
            let {
                messages: t
            } = e;
            c = new Date().getTime(), d = t.map(e => ({
                ...e,
                complete: !1
            })), t.forEach(e => {
                null != e.dueAt && e.dueAt > new Date && _.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && _.add(e.messageId)
            })
        },
        MESSAGE_REMINDER_TOGGLE: function(e) {
            let {
                messageId: t,
                complete: n
            } = e, i = d.findIndex(e => e.messageId === t);
            if (-1 === i) return !1;
            d[i] = {
                ...d[i],
                complete: n
            }
        },
        MESSAGE_REMINDER_NOTIFIED: function(e) {
            let {
                messageId: t
            } = e;
            _.add(t)
        }
    })
}