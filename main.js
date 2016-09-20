(function () {

    var rootQuestion = data;
    var stack = [];

    var app = new Ractive({
        el: '#root',
        template: '#easy-http-status-app',
        data: {
            currentItem: rootQuestion,
            answer: null,
            hasPrevious: null
        },
        hasNext: function() {
            return this.get('currentItem')['yes'] || this.get('currentItem')['no'];
        }
    });

    app.on('answer-yes', function (event, current) {
        var next = current['yes'];

        if (next['yes']) {
            if (app.hasNext()) {
                stack.push(this.get('currentItem'));
                this.set({hasPrevious: true});
            }
            this.set({currentItem: current['yes']});
        } else if (next['http_status']) {
            stack.push(current);
            this.set({answer: next['http_status']});
        }
    });

    app.on('answer-no', function (event, current) {
        var next = current['no'];
        if (next['no']) {
            if (app.hasNext()) {
                stack.push(this.get('currentItem'));
                this.set({hasPrevious: true});
            }
            this.set({currentItem: current['no']});
        } else if (next['http_status']) {
            stack.push(current);
            this.set({answer: next['http_status']});
        }
    });

    app.on('go-back', function (event, current) {
        var item = stack.pop();
        if (item) this.set({currentItem: item, answer: null});
        if (stack.length == 0) this.set({hasPrevious: null})
    });

    app.on('restart', function (event) {
        stack = [];
        this.set({
            currentItem: rootQuestion,
            answer: null,
            hasPrevious: null
        });
    });

}());
