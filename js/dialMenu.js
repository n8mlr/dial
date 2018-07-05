'use strict';

class DialMenu {
    constructor(settings) {
        this.container = document.querySelector(settings.mount);
        this.toggler = this.container.querySelector(".discToggler");
        this.bindToggler();

        // build the first dial
        let dial = new Dial(settings.dials);
    }

    bindToggler() {
        let self = this;
        self.container.addEventListener('click', function(event) {
            if (self.toggler.classList.contains('open')) {
                self.toggler.classList.remove('open');
            } else {
                self.toggler.classList.add('open');
            }
        });

        // todo: touch support & gestures
    }
}