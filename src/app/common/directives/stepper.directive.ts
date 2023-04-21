import { Directive,HostListener,HostBinding,Output,EventEmitter, Input } from "@angular/core";
import { OrderState } from "../utils/enum";

@Directive({
    selector:"[StepController]"
})
export class StepperDirective{

    @Input("ActiveState") ActiveState : number
    @Input("StateList")StateList : string[]
    @Input("Controller") set Controller(State:number){

        if(State < this.ActiveState){
            this.completed = true
        }else if(State == this.ActiveState){
            this.active = true
        }else{
            this.uncompleted = true
        }
        this.disabled = this.checkForDisabled(State)
        console.log(this.disabled)

    }

    public checkForDisabled(State:number){
        return State == this.ActiveState ? true : this.ActiveState == this.StateList.length-1 ? true : false

    }
    constructor(){}

    @HostBinding('class.completed') completed : boolean;
    @HostBinding('class.active') active : boolean;
    @HostBinding('class.uncompleted') uncompleted : boolean;
    @HostBinding('disabled') disabled : boolean

}
