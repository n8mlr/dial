'use strict';

class DialMenu {
    constructor(elementId) {
        this.dials = [];
        this.element = document.querySelector("#dialMenu");
        this.toggler = this.element.querySelector(".discToggler");
        this.bindToggler();
    }

    bindToggler() {
        let self = this;
        self.element.addEventListener('click', function(event) {
            if (self.toggler.classList.contains('open')) {
                self.toggler.classList.remove('open');
            } else {
                self.toggler.classList.add('open');
            }
        });

        // todo: touch support & gestures
    }
}