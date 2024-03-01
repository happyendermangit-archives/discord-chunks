function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IGNORE_ANALYTICS_BREADCRUMB_EVENTS: function() {
            return r
        },
        filterThrottle: function() {
            return s
        }
    });
    var i = n("49111");
    let r = [i.AnalyticEvents.START_SPEAKING, i.AnalyticEvents.START_LISTENING, i.AnalyticEvents.APP_OPENED, i.AnalyticEvents.NOTIFICATION_CLICKED, i.AnalyticEvents.EXPERIMENT_USER_TRIGGERED, i.AnalyticEvents.EXPERIMENT_DM_TRIGGERED, i.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED];

    function s(e) {
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
                r = Math.round(e / 1e3 / 60),
                s = Math.round(e / 1e3 / 60 / 60);
            return i.minute.slot !== r && (i.minute.slot = r, i.minute.budgetUsed = 0), i.hour.slot !== s && (i.hour.slot = s, i.hour.budgetUsed = 0), !!(i.minute.budgetUsed < t) && (i.minute.budgetUsed++, !!(i.hour.budgetUsed < n)) && (i.hour.budgetUsed++, !0)
        }
    }
}