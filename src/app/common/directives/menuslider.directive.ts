import { Directive,HostListener,HostBinding,Output,EventEmitter, Renderer2, ElementRef } from "@angular/core";

@Directive({
    selector:"[menuslider]"
})
export class MenuSliderDirective{

    constructor(private renderer:Renderer2,private Elementref : ElementRef){}

    @HostListener('click',['$event']) onMneuclick(event){
        if(this.Elementref.nativeElement.classList.contains("active-menu")){
            this.renderer.removeClass(this.Elementref.nativeElement,"active-menu")
        }else{
            this.renderer.addClass(this.Elementref.nativeElement,"active-menu")
        }
    }



}
