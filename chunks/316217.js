function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IGNORE_ANALYTICS_BREADCRUMB_EVENTS: function() {
            return s
        },
        filterThrottle: function() {
            return r
        }
    });
    var i = n("49111");
    let s = [i.AnalyticEvents.START_SPEAKING, i.AnalyticEvents.START_LISTENING, i.AnalyticEvents.APP_OPENED, i.AnalyticEvents.NOTIFICATION_CLICKED, i.AnalyticEvents.EXPERIMENT_USER_TRIGGERED, i.AnalyticEvents.EXPERIMENT_DM_TRIGGERED, i.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED];

    function r(e) {
        let {
            maxBudgetMinute: t,
            maxBudgetHour: n
        } = e, i = {
            minute: {
                slot: 0,
                budgetUsed: 0
            },
            hour: {
                slot: 0,
                budgetUsed: 0
            }
        };
        return () => {
            let e = Date.now(),
                s = Math.round(e / 1e3 / 60),
                r = Math.round(e / 1e3 / 60 / 60);
            return i.minute.slot !== s && (i.minute.slot = s, i.minute.budgetUsed = 0), i.hour.slot !== r && (i.hour.slot = r, i.hour.budgetUsed = 0), !!(i.minute.budgetUsed < t) && (i.minute.budgetUsed++, !!(i.hour.budgetUsed < n)) && (i.hour.budgetUsed++, !0)
        }
    }
}