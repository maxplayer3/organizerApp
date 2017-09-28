import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[hideDone]'
})
export class HideDoneDirective {

    constructor(private el: ElementRef, private renderer: Renderer) { }

    @Input() hideDone: boolean;

    ngOnInit() {
        if (this.hideDone) {
            this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        }
    }
}
