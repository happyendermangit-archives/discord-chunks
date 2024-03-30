function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        IGNORE_ANALYTICS_BREADCRUMB_EVENTS: function() {
            return t
        },
        filterThrottle: function() {
            return I
        }
    });
    var o = e("281767"),
        t = [o.AnalyticEvents.START_SPEAKING, o.AnalyticEvents.START_LISTENING, o.AnalyticEvents.APP_OPENED, o.AnalyticEvents.NOTIFICATION_CLICKED, o.AnalyticEvents.EXPERIMENT_USER_TRIGGERED, o.AnalyticEvents.EXPERIMENT_DM_TRIGGERED, o.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED];

    function I(_) {
        var E = _.maxBudgetMinute,
            e = _.maxBudgetHour,
            o = {
                minute: {
                    slot: 0,
                    budgetUsed: 0
                },
                hour: {
                    slot: 0,
                    budgetUsed: 0
                }
            };
        return function() {
            var _ = Date.now(),
                t = Math.round(_ / 1e3 / 60),
                I = Math.round(_ / 1e3 / 60 / 60);
            return o.minute.slot !== t && (o.minute.slot = t, o.minute.budgetUsed = 0), o.hour.slot !== I && (o.hour.slot = I, o.hour.budgetUsed = 0), !!(o.minute.budgetUsed < E) && (o.minute.budgetUsed++, !!(o.hour.budgetUsed < e)) && (o.hour.budgetUsed++, !0)
        }
    }
}